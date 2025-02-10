import React, { useState, useEffect } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";
import { Link } from "react-router-dom";

const formatViews = (num) => {
  if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
  return num;
};

const VideoCards = ({ data }) => {
  const { snippet, statistics } = data;
  const { channelTitle, title, thumbnails, channelId } = snippet;

  const [channelLogo, setChannelLogo] = useState("");

  useEffect(() => {
    if (!channelId) return; // Prevent unnecessary API calls
    getChannelLogo();
  }, [channelId]);

  const getChannelLogo = async () => {
    try {
      const response = await fetch(`${YOUTUBE_CHANNEL_API}&id=${channelId}`);
      const jsonData = await response.json();
      const logoUrl = jsonData?.items?.[0]?.snippet?.thumbnails?.default?.url;
      setChannelLogo(logoUrl || "https://via.placeholder.com/40"); // Fallback image
    } catch (error) {
      console.error("Error fetching channel logo:", error);
      setChannelLogo("https://via.placeholder.com/40"); // Fallback image in case of error
    }
  };

  return (
    <div className="p-3 w-72 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg w-full"
      />
      <div className="flex mt-3 gap-3">
        {/* Channel Logo */}
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={channelLogo}
            alt="channel-logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold text-[15px] leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm">{channelTitle}</p>
          <p className="text-gray-500 text-sm">
            {formatViews(statistics?.viewCount)} views
          </p>
        </div>
      </div>
    </div>
  );
};

// Ad Video Card with a subtle border to differentiate ads
export const AdVideoCard = ({ data }) => {
  const videoUrl = `/watch?v=${data.id}`;

  return (
    <div className="relative w-72 p-3 border border-gray-200 bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer flex flex-col items-center justify-center">
      {/* Clickable Overlay */}
      {/* <Link to={videoUrl} className="absolute inset-0 z-10"></Link> */}
      <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-lg"></div>
      {/* "Ad" Badge */}
      <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-semibold px-2 py-1 rounded">
        Ad
      </div>

      {/* Video Card Content */}
      <div className="w-full flex flex-col items-center">
        <VideoCards data={data} />
      </div>
    </div>
  );
};

export default VideoCards;
