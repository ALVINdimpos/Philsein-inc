import './style.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1" />
        <div className="wave" id="wave2" />
        <div className="wave" id="wave3" />
        <div className="wave" id="wave4" />
      </div>
      <ul className="social-icons">
        <li className="social-icons__item">
          <a className="social-icons__link" href="#">
            <FaFacebook />
          </a>
        </li>
        <li className="social-icons__item">
          <a className="social-icons__link" href="#">
            <FaTwitter />
          </a>
        </li>
        <li className="social-icons__item">
          <a className="social-icons__link" href="#">
            <ion-icon name="logo-linkedin" />
          </a>
        </li>
        <li className="social-icons__item">
          <a className="social-icons__link" href="#">
            <FaInstagram />
          </a>
        </li>
      </ul>
      <ul className="Menu">
        <li className="Menu__item">
          <a className="Menu__link" href="#">
            Accueil
          </a>
        </li>
        <li className="Menu__item">
          <a className="Menu__link" href="#">
            Application rapide
          </a>
        </li>
        <li className="Menu__item">
          <a className="Menu__link" href="#">
            Programme de référence
          </a>
        </li>
        <li className="Menu__item">
          <a className="Menu__link" href="#">
            Blog
          </a>
        </li>
        <li className="Menu__item">
          <a className="Menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
      <p>©2023 Alvin Coder | All Rights Reserved</p>
    </footer>
  )
}

export default Footer
