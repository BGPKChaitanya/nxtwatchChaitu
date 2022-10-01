import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'

const SavedVideos = () => (
  <div>
    <Header />
    <div className="sv-content">
      <SideBar />
      Saved Videos
    </div>
  </div>
)

export default SavedVideos
