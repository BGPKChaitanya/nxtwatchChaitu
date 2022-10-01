import {useState} from 'react'
import {useHistory, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [checkBox, setCheck] = useState(false)

  const Token = Cookies.get('jwt_token')
  const history = useHistory()

  const submitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.push('/')
  }

  const submitFailure = errorMsg => {
    setErrMsg(errorMsg)
    setUsername('')
    setPassword('')
  }

  const onSubmitForm = async event => {
    event.preventDefault()
    const fetData = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
    })
    const data = await fetData.json()
    if (fetData.ok === true) {
      submitSuccess(data.jwt_token)
      setUsername('')
      setPassword('')
    } else {
      submitFailure(data.error_msg)
    }
  }

  return (
    <div className="outerContainer">
      {Token !== undefined ? (
        <Redirect to="/" />
      ) : (
        <div className="innerContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
            className="loginLogo"
          />
          <form onSubmit={onSubmitForm}>
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              className="inputBox"
              id="username"
              value={username}
              onChange={e => {
                setUsername(e.target.value)
                setErrMsg('')
              }}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              type={checkBox ? 'text' : 'password'}
              className="inputBox"
              id="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value)
                setErrMsg('')
              }}
            />
            <div>
              <input
                type="checkbox"
                id="box"
                value={checkBox}
                onChange={() => setCheck(!checkBox)}
              />
              <label htmlFor="box">Show Password</label>
            </div>
            <button type="submit" className="loginButton">
              Login
            </button>
            {errMsg !== '' && <p className="errorMsg">{errMsg}</p>}
          </form>
        </div>
      )}
    </div>
  )
}

export default Login
