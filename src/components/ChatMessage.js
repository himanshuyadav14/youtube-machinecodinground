import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center p-1">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
        alt="user"
        className="w-8 h-8 rounded-full"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
