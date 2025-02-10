import React, { useState, useEffect } from "react";
import { ReactComponent as Hamburger } from "../assets/hamburger-menu.svg";
import { ReactComponent as UserIcon } from "../assets/user-icon.svg";
import { Search, Mic } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search.cache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestion();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSuggestion = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();
    setSuggestions(json[1] || []);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-3 shadow-md bg-white ">
      {/* Left Section: Hamburger & Logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMenuHandler}
          className="p-2 hover:bg-gray-200 rounded-full"
        >
          <Hamburger className="h-6 w-6" />
        </button>
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
        />
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center flex-grow justify-center">
        <div className="relative flex items-center w-[40%]">
          <input
            type="text"
            className="w-full border border-gray-400 p-2 pl-4 rounded-l-full focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-4 py-[10px] rounded-r-full bg-gray-100 hover:bg-gray-200">
            <Search className="h-5 w-5" />
          </button>
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 shadow-lg rounded-md z-50">
              <ul className="py-2">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    <span>🔍 {suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Mic Icon */}
        <button className="ml-3 p-2 bg-gray-100 hover:bg-gray-200 rounded-full">
          <Mic className="h-5 w-5" />
        </button>
      </div>

      {/* Right Section: User Icon */}
      <div className="flex items-center gap-4">
        <UserIcon className="h-6 w-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
