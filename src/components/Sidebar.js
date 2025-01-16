import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      
      <h1 className="font-bold pt-5">You > </h1>
      <ul>
        <li>History</li>
        <li>Playlist</li>
        <li>Your videos</li>
        <li>Your courses</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>CodeStoryWithMik</li>
        <li>CodeWithHarry</li>
        <li>Sony LIV</li>
        <li>TMKOC</li>
        <li>Elvish Yadav</li>
        <li>Gaurav kapoor</li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
