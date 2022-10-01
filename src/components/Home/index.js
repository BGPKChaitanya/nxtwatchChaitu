import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { ThreeDots } from "react-loader-spinner";
import VideoCard from "../VideoCard";
import Header from "../Header";
import SideBar from "../SideBar";
import "./index.css";

const status = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "INPROGRESS",
};

const Home = () => {
  const [displayBanner, setDisplayBanner] = useState("flex");
  const [apiStatus, setApiStatus] = useState(status.initial);
  const [searchInput, setSearchInput] = useState("");
  const [videosList, setVideosList] = useState([]);
  const jwtToken = Cookies.get("jwt_token");

  const getVideosData = async () => {
    setApiStatus(status.inProgress);
    const fetchVideos = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const fetchData = await fetchVideos.json();
    console.log(fetchData);
    const updateData = fetchData.videos.map((item) => ({
      channel: item.channel,
      id: item.id,
      publishedAt: item.published_at,
      thumbnailUrl: item.thumbnail_url,
      title: item.title,
      viewCount: item.view_count,
    }));
    if (updateData.length !== 0) {
      setVideosList(updateData);
      setApiStatus(status.success);
    } else {
      setApiStatus(status.failure);
    }
  };

  const rerenderSearch = () => {
    getVideosData();
  };

  useEffect(() => {
    getVideosData();
  }, []);

  const ViewSuccessPage = () => (
    <ul className="video-container">
      {videosList.map((video) => (
        <li key={video.id} className="list">
          <VideoCard item={video} />
        </li>
      ))}
    </ul>
  );

  const ViewFailurePage = () => (
    <div className="fo-container">
      <div className="fi-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
          className="failure-image"
        />
        <h1 className="failure-text">No Search Results Found</h1>
        <p className="failure-text2">
          Try different key words or remove search filter
        </p>
        <button type="button" className="retry" onClick={rerenderSearch}>
          Retry
        </button>
      </div>
    </div>
  );

  const ViewLoadingPage = () => (
    <div className="loader-container" data-testid="loader">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );

  const renderHomeVideos = () => {
    switch (apiStatus) {
      case status.success:
        return ViewSuccessPage();
      case status.failure:
        return ViewFailurePage();
      case status.inProgress:
        return ViewLoadingPage();
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <div className="home-content">
        <SideBar />
        <div className="home-container">
          <div
            className="banner-container"
            style={{ display: `${displayBanner}` }}
          >
            <div>
              <img
                className="banner-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
              <p className="banner-text">
                Buy Nxt Watch Premium prepaid plans with <br /> UPI
              </p>
              <button type="button" className="getButton">
                GET IT NOW
              </button>
            </div>
            <button
              type="button"
              className="banner-close-btn"
              onClick={() => setDisplayBanner("none")}
            >
              <AiOutlineClose size={25} />
            </button>
          </div>
          <div className="searchContainer">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="button"
              className="button-search"
              onClick={rerenderSearch}
            >
              <AiOutlineSearch size={15} />
            </button>
          </div>
          {renderHomeVideos()}
        </div>
      </div>
    </div>
  );
};

export default Home;
