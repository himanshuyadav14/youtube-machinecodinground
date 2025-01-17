import React from "react";

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
  {
    name: "Helen Carter",
    text: "The formatting of the article could use some improvement.",
    replies: [],
  },
  {
    name: "Ian Black",
    text: "Loved the visuals in the article! They really helped explain the concepts.",
    replies: [
      {
        name: "Jack White",
        text: "Same here! The diagrams were top-notch.",
        replies: [
          {
            name: "Ian Black",
            text: "I wonder if the author used any specific software for them.",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start shadow-md bg-white p-4 rounded-lg mt-3">
      <img
        className="w-10 h-10 rounded-full"
        src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
        alt="user-avatar"
      />
      <div className="ml-4">
        <p className="font-bold text-blue-600">{name}</p>
        <p className="text-gray-700 mt-1">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} className="pl-6 border-l-2 border-gray-300 mt-3">
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-6">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-5 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
