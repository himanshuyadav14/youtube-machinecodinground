import React from "react";

const VideoCards = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-64 cursor-pointer">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({data}) => {
  return (
    <div className="p-1 m-1 border border-red-400">
      <VideoCards data={data}/>
    </div>
  );
};

export default VideoCards;
