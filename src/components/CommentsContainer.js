import React from "react";

// Sample comments data (nested)
const commentsData = [
  {
    name: "Alice Johnson",
    text: "This is a fantastic article! I really enjoyed reading it.",
    replies: [
      {
        name: "Bob Smith",
        text: "I agree, Alice. It was very informative.",
        replies: [
          {
            name: "Alice Johnson",
            text: "Absolutely, Bob. The examples were very clear!",
            replies: [],
          },
          {
            name: "Charlie Brown",
            text: "Do you think the concepts can be applied in other fields?",
            replies: [
              {
                name: "Bob Smith",
                text: "Definitely, Charlie. The principles are quite universal.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Diana Lee",
        text: "I thought it was good, but some parts were a bit confusing.",
        replies: [],
      },
    ],
  },
  {
    name: "Edward Green",
    text: "Does anyone have suggestions for further reading on this topic?",
    replies: [
      {
        name: "Fiona Adams",
        text: "I recommend checking out the author's previous work.",
        replies: [
          {
            name: "George Harris",
            text: "Great suggestion, Fiona. I found those articles very helpful too.",
            replies: [],
          },
        ],
      },
    ],
  },
];

// Generate a random avatar color
const getAvatarColor = (name) => {
  const colors = ["bg-blue-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-purple-500"];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

// Individual Comment Component
const Comment = ({ data }) => {
  const { name, text } = data;
  const avatarColor = getAvatarColor(name);

  return (
    <div className="flex items-start gap-4 py-3">
      {/* Circular Avatar with Initial */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-semibold ${avatarColor}`}>
        {name[0]}
      </div>
      
      {/* Comment Content */}
      <div className="bg-white shadow-sm p-3 rounded-lg w-full">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-700 mt-1">{text}</p>
      </div>
    </div>
  );
};

// Recursive Comment List Component
const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="pl-5 border-l-2 border-gray-300">
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-6">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

// Comments Container Component
const CommentsContainer = () => {
  return (
    <div className="m-5 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-5">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
