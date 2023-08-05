import { Link } from 'react-router-dom'
import advP from '../../../assets/Images/Group 12.svg'
import './style.css'
const index = () => {
  return (
    <div className="advantages-section">
      <div className="advantages-image">
        <img src={advP} alt="Advantages Image" />
      </div>
      <div className="advantages-content">
        <h2>Découvrez les avantages de notre agence de placement en santé!</h2>
        <p>
          Des salaires de 30 à 80% plus élevé que la moyenne provinciale, ainsi
          que des horaires et quarts de travail personnalisables à même votre
          téléphone mobile… Découvrez les avantages que tirent les infirmières,
          les travailleurs sociaux et les professionnels de réadaptation
          physiques avec nous!
        </p>
        <Link toclassName="advantages-button">Nos avantages</Link>
      </div>
    </div>
  )
}

export default index
