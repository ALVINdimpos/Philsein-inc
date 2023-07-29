import Image from '../../../assets/Images/image (1).svg'
import './style.css'
const CareerSection = () => {
  return (
    <div className="career-section">
      <div className="content">
        <h2>Prêt(e) à prendre le contrôle de votre carrière en santé?</h2>
        <p>
          Notre agence de placement vous laisse le faire en quelques clics grâce
          à notre formulaire d’application rapide!
        </p>
        <button onClick={handleApl}>APPLIQUER MAINTENANT</button>
      </div> 
      <div className="image">
        <img
          src={Image}
          alt="Image of a person taking control of their career in healthcare"
        />
      </div>
    </div>
  )
}

export default CareerSection
