import React, { useState, useEffect } from "react";
import { ReactComponent as Hamburger } from "../assets/hamburger-menu.svg";
import { ReactComponent as UserIcon } from "../assets/user-icon.svg";
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
    // Debouncing the search query
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestion();
      }
    }, 200);

    // Clear the timer on cleanup
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestion = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();

    // Update suggestions state
    setSuggestions(json[1] || []);
    dispatch(cacheResults({ [searchQuery]: json[1] }));
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      {/* Left Section */}
      <div className="flex col-span-1 items-center cursor-pointer">
        <Hamburger className="h-8 w-10" onClick={toggleMenuHandler} />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtube-icon"
        />
      </div>

      {/* Center Section */}
      <div className="col-span-10 text-center relative">
        <div className="flex justify-center">
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 rounded-l-full cursor-text focus:outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {/* Suggestions */}
        {showSuggestions &&
          suggestions.length > 0 &&
          searchQuery.length > 0 && (
            <div className="absolute bg-white border border-gray-200 rounded-lg shadow-lg mt-1 w-1/2 left-1/4 z-10">
              <ul className="py-2">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-start"
                    onClick={() => setSearchQuery(suggestion)}
                  >
                    <span>🔍 {suggestion}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      {/* Right Section */}
      <div className="col-span-1 cursor-pointer">
        <UserIcon className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;
