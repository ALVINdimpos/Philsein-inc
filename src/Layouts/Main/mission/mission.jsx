import MissionP from '../../../assets/Images/Group 129 (1).png'
import './style.css'
const Mission = () => {
  return (
    <div className="mission-section">
      <div className="mission-content">
        <h2>Un désir de faire mieux</h2>
        <p>
          Le ssein santé est une agence de placement en santé née de la mission
          de ses fondateurs. Celle d’être un réel soutien pour les
          établissements et les professionnels du réseau de la santé…
        </p>
        <button className="mission-button">À propos</button>
      </div>
      <div className="mission-image">
        <img src={MissionP} alt="Side Picture" />
      </div>
    </div>
  )
}

export default Mission
