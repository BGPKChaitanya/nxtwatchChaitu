import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import "./index.css";

const VideoCard = (props) => {
  const { item } = props;
  const { channel, id, publishedAt, thumbnailUrl, title, viewCount } = item;
  const updateChannelData = {
    name: channel.name,
    profileImageUrl: channel.profile_image_url,
  };
  const { name, profileImageUrl } = updateChannelData;

  const year = new Date(publishedAt).getFullYear();
  const month = new Date(publishedAt).getMonth();
  const date = new Date(publishedAt).getDate();

  const tillNow = formatDistanceToNow(new Date(year, month, date));

  return (
    <Link to={`/videos/${id}`}>
      <div className="vc-container">
        <img src={thumbnailUrl} alt="video thumbnail" className="thumbnail" />
        <div className="videoDescription">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="channelLogo"
          />
          <div className="description">
            <p className="videoText">{title}</p>
            <p className="videoText">{name}</p>
            <div className="views">
              <p className="videoText">
                {viewCount} views .<span className="videoText">{tillNow}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
