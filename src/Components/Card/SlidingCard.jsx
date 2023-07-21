
import '../../assets/Style/SlidingCard.css';

const SlidingCard = ({ title, salary, location, schedule, workingCondition }) => {
  return (
    <div className="sliding-card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-details">
        <div className="card-item">
          <span className="item-label">Salaire:</span>
          <span className="item-value">{salary}</span>
        </div>
        <div className="card-item">
          <span className="item-label">Emplacements:</span>
          <span className="item-value">{location}</span>
        </div>
        <div className="card-item">
          <span className="item-label">Types d'horaires et de quarts:</span>
          <span className="item-value">{schedule}</span>
        </div>
        <div className="card-item">
          <span className="item-label">Conditions de travail:</span>
          <span className="item-value">{workingCondition}</span>
        </div>
        <div className="button">
          <button>EN SAVOIR PLUS</button>
        </div>
      </div>
    </div>
  );
};

export default SlidingCard;
