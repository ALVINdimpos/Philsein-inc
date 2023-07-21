import hero from '../../../assets/Images/hero.svg'
import { FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import './style.css'
const index = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="company-name">Philsein inc</h1>
        <h2 className="slogan">Agence de placement en santé</h2>
        <p className="description">
          Notre agence de placement en santé offre une plus grande mainmise sur
          vos conditions de travail. Élevez votre carrière en soins infirmiers
          au prochain niveau! Poste d’infirmière et infirmières auxiliaires
          disponible maintenant, partout au Québec.
        </p>
        <div className="heroFooter">
          <button className="Apply-button">APPLIQUEZ MAINTENANT</button>
          <div className="socials">
            <a
              href="https://twitter.com/PhilseinInc"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
            >
              <FiTwitter />
            </a>
            <a
              href="https://www.facebook.com/PhilseinInc"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/philseininc/"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
            >
              <FiInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/philsein-inc/"
              target="_blank"
              className="social-icon"
              rel="noreferrer"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="Company Image" />
      </div>
    </section>
  )
}
export default index
