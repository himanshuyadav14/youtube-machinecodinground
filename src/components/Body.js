import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar (Sticky) */}
        <Sidebar />

      <div className="flex-1 overflow-y-auto h-screen w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
