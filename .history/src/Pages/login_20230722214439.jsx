import '../assets/Style/login.css'
import { FcGoogle, FcCamera } from 'react-icons/fc'

const login = () => {
  return (
    <div className="main">
      <div className="Container" id="Container">
        <div className="form-Container log-in-Container">
          <form action="#">
            <h1>Connexion</h1>
            <div className="social-Container">
              <a href="#" className="social">
                <FcGoogle />
              </a>
              <a href="#" className="social">
                <FcCamera />
              </a>
            </div>
            <span>ou utilisez votre compte</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Mot de passe oublié?</a>
            <button className="button">Connexion</button>
          </form>
        </div>
        <div className="overlay-Container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
