import React, { useState, useEffect } from "react";
import { ReactComponent as Hamburger } from "../assets/hamburger-menu.svg";
import { ReactComponent as UserIcon } from "../assets/user-icon.svg";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    //Debouncing
    const timer = setTimeout(() => {
      getSuggestion(searchQuery);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestion = async (searchQuery) => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 items-center cursor-pointer">
        <Hamburger className="h-8 w-10" onClick={toggleMenuHandler} />
        <img
          className="h-8 mx-2"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="youtube-icon"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full cursor-text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1 cursor-pointer">
        <UserIcon className="h-8 w-8" />
      </div>
    </div>
  );
};

export default Header;
