import Cookies from 'js-cookie'
import {useHistory, Link} from 'react-router-dom'
import {BsBrightnessHigh} from 'react-icons/bs'
import './index.css'

const Header = () => {
  const history = useHistory()
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.push('/login')
  }

  return (
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
          alt="nxt watch logo"
          className="imageStyle"
        />
      </Link>
      <div className="container">
        <button className="theme-btn" data-testid="theme" type="button">
          <BsBrightnessHigh color="#ffffff" size={25} />
        </button>
        <img
          className="profile-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
        />
        <button type="button" className="logOut" onClick={onClickLogout}>
          Log out
        </button>
      </div>
    </div>
  )
}

export default Header
