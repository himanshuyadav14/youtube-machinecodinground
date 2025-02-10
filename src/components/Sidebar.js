import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Home,
  History,
  ListVideo,
  PlaySquare,
  Clock,
  ThumbsUp,
  ChevronDown,
  Film,
  Users,
  X,
} from "lucide-react";
import { toggleMenu } from "../utils/appSlice"; // Update the path as per your Redux store

const Sidebar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-60 bg-white">
      {/* Top Navigation */}
      <ul className="space-y-2 mt-6">
        <li>
          <Link
            to="/"
            className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded-lg"
          >
            <Home className="w-5 h-5" /> Home
          </Link>
        </li>
        <li className="flex items-center gap-4 text-black hover:bg-gray-100  p-2 rounded-lg">
          <Film className="w-5 h-5" /> Shorts
        </li>
        <li className="flex items-center gap-4 text-black hover:bg-gray-100  p-2 rounded-lg">
          <Users className="w-5 h-5" /> Subscriptions
        </li>
      </ul>

      {/* You Section */}
      <h1 className="font-bold text-black mt-6 mb-2">
        You
      </h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded-lg">
          <History className="w-5 h-5" /> History
        </li>
        <li className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded-lg">
          <ListVideo className="w-5 h-5" /> Playlist
        </li>
        <li className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded-lg">
          <PlaySquare className="w-5 h-5" /> Your videos
        </li>
        <li className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded-lg">
          <Clock className="w-5 h-5" /> Watch Later
        </li>
        <li className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded-lg">
          <ThumbsUp className="w-5 h-5" /> Liked Videos
        </li>
      </ul>

      {/* Subscriptions */}
      <h1 className="font-bold text-black mt-6 mb-2">
        Subscriptions
      </h1>
      <ul className="space-y-2">
        {[
          "CodeStoryWithMik",
          "CodeWithHarry",
          "Sony LIV",
          "TMKOC",
          "Elvish Yadav",
          "Gaurav Kapoor",
        ].map((channel, index) => (
          <li
            key={index}
            className="flex items-center gap-4 text-black hover:bg-gray-100 p-2 rounded-lg"
          >
            <ChevronDown className="w-5 h-5" /> {channel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
