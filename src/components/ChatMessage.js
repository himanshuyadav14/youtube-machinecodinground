const ChatMessage = ({ name, message }) => {
  const getUserInitial = (username) => username.charAt(0).toUpperCase();

  return (
    <div className="flex items-center gap-3 mb-3">
      {/* User Avatar */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white text-lg font-semibold">
        {getUserInitial(name)}
      </div>
      
      {/* Chat Bubble */}
      <div className="max-w-xs px-4 py-2 rounded-lg shadow-md bg-gray-200 text-gray-900">
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-md">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
