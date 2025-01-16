import React from "react";
import Sidebar from "./Sidebar";
import Maincontent from "./Maincontent";
const Body = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <Maincontent />
    </div>
  );
};

export default Body;
