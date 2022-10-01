import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import SideBar from "../SideBar";

const VideoDetailsRoute = () => {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <Header />
      <div className="home-content">
        <SideBar />
        <div className="home-container">Video</div>
      </div>
    </div>
  );
};

export default VideoDetailsRoute;
