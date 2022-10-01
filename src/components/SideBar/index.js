import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiFire } from "react-icons/hi";
import { SiYoutubegaming } from "react-icons/si";
import { CgPlayListAdd } from "react-icons/cg";
import "./index.css";

const SideBar = () => (
  <div className="sideBar-container">
    <ul className="sb-containerList">
      <li>
        <Link to="/" className="listIcon">
          <AiFillHome size={20} color="#475569" className="icon" />
          <p className="route-type">Home</p>
        </Link>
      </li>

      <li className="listIcon">
        <Link to="/trending" className="listIcon">
          <HiFire size={20} color="#475569" className="icon" />
          <p className="route-type">Trending</p>
        </Link>
      </li>
      <li className="listIcon">
        <Link to="/gaming" className="listIcon">
          x
          <SiYoutubegaming size={20} color="#475569" className="icon" />
          <p className="route-type">Gaming</p>
        </Link>
      </li>
      <li className="listIcon">
        <Link to="/saved-videos" className="listIcon">
          <CgPlayListAdd size={20} color="#475569" className="icon" />
          <p className="route-type">Saved Videos</p>
        </Link>
      </li>
    </ul>
    <div className="contact-container">
      <p className="contact-text">CONTACT US</p>
      <div className="contact-icons">
        <img
          className="contact-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <img
          className="contact-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <img
          className="contact-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </div>
      <p className="contact-note">
        Enjoy! Now to see your channels and recommendations!
      </p>
    </div>
  </div>
);

export default SideBar;
