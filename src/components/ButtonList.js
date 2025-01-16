import React from "react";
import Button from "../components/Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Kapil",
  "Soccer",
  "Cricket",
  "Vlogs",
  "Entertainment",
  "News",
  "Cooking",
  "Valentines",
  "Travel",
  "Technology",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
