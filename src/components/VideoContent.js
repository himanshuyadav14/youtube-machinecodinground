import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API, YOUTUBE_CHANNEL_API } from "../utils/constants";
import VideoCards, { AdVideoCard } from "../components/VideoCards";
import { Link } from "react-router-dom";

const VideoContent = () => {
  const [videos, setVideos] = useState([]);
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    getVideos();
    getChannel();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  const getChannel = async () => {
    const data = await fetch(YOUTUBE_CHANNEL_API);
    const jsonData = await data.json();
    console.log(jsonData);
    setChannel(jsonData?.items?.snippet?.thumbnails?.high.url);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard data={videos[0]} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCards data={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContent;
