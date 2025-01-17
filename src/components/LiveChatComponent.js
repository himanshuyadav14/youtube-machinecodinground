import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNumber, generateRandomComment } from "../utils/helper";

const LiveChatComponent = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API polling");
      dispatch(
        addMessage({
          name: generateRandomNumber(),
          message: generateRandomComment(20) + " 😎",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  const handleSendMessage = () => {
    if (userMessage.trim() !== "") {
      dispatch(
        addMessage({
          name: "You",
          message: userMessage,
        })
      );
      setUserMessage("");
    }
  };

  return (
    <>
      <div className="w-full h-[593px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>
      <div className="mt-2 ml-2 flex">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full p-3 border border-gray-300 rounded-l-lg focus:outline-none"
          value={userMessage}
          onChange={(e) => {
            setUserMessage(e.target.value);
          }}
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-3 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"
        >
          Send
        </button>
      </div>
    </>
  );
};

export default LiveChatComponent;
