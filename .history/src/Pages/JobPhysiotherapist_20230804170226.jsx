import { Link } from 'react-router-dom';
import Header from '../Layouts/Header';

const JobPhysiotherapist = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Emploi: Physiothérapeute</h1>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p>
              Êtes-vous un physiothérapeute à la recherche des meilleures perspectives d'emplois en régions? Alors nous aimerions vous compter parmi notre équipe! Chez Groupe ADR, nous sommes l'agence de placement qui laisse les physiothérapeutes être en charge!
            </p>
            <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Description de poste</h3>
            <h4 className="text-lg font-bold mb-2">Nature de l'emploi</h4>
            <p>
              En tant que physiothérapeute, vous serez responsable d'évaluer et de traiter les patients atteints de douleurs musculo-squelettiques, neurologiques et respiratoires. Vous travaillerez en étroite collaboration avec d'autres professionnels de la santé pour aider les patients à retrouver leur mobilité et leur qualité de vie.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              À partir de 65$ de l'heure
            </p>
            <p>
              Postes disponibles partout à travers le Québec.
            </p>
            <p>
              Horaire temps plein. Quarts de jours ou de soir disponibles
            </p>
            <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Conditions de travail</h3>
            <h4 className="text-lg font-bold mb-2">Salaire</h4>
            <p>
              Pour le poste de physiothérapeute, nos salaires sont de 65$ à 75$ de l'heure et varient principalement en fonction de la région d’emploi.
            </p>
            <p>
              Ainsi, pour les lieux de travail dans, ou proches des grands centres, comme Montréal et Laval, le salaire est de 65$ de l’heure.
            </p>
            <p>
              De la même manière, le salaire pour nos emplois en régions plus éloignées, comme l’Abitibi et la Côte-Nord, est de 73$ à 75$ de l’heure.
            </p>
            <p>
              Finalement, à Lanaudière et les Laurentides, nos offres d’emplois pour physiothérapeute comprennent un salaire de 70$ de l’heure.
            </p>
            <h4 className="text-lg font-bold mt-2">Types d'horaire</h4>
            <p>
              Les horaires de travail pour ce poste sont à temps plein, du Lundi au Vendredi.
            </p>
            <h4 className="text-lg font-bold mt-2">Types de quarts</h4>
            <p>
              Nous vous donnons l'opportunité de choisir entre des quarts de jours ou de soir, selon vos préférences.
            </p>
            <p>
              Lieu de travail
              Au moment de la rédaction de cette offre (Mars 2023), nos demandes pour physiothérapeutes sont principalement en Abitibi et en Côte-Nord. Vous pourrez décider votre région de préférence en déposant votre candidature.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Nos Avantages</h3>
            <h4 className="text-lg font-bold mb-2">Programme de remboursement des dépenses</h4>
            <p>
              Profitez de notre programme de remboursement des dépenses dans les régions sélectionnées. Ce programme peut inclure:
            </p>
            <ul className="list-disc list-inside">
              <li>L'indemnité de logement.</li>
              <li>Une allocation personnelle(per diem) de 30$ à 80$ par jours travaillés.</li>
              <li>Le remboursement du temps de déplacement.</li>
              <li>Le remboursement est de 0,48$ par kilomètre parcouru.</li>
              <li>Le remboursement des frais de taxi ou de location.</li>
              <li>Et même le transport par avion payé!</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              Bénéficiez d’horaires de travail flexibles, centrés autour de votre style de vie. En fait, dès l’embauche, vous aurez la chance de déterminer vos préférences en termes de quarts, d'horaires, lieu et même département de travail!
            </p>
            <p>
              Un REER collectif qui rapporte
            </p>
            <p>
              Nous sommes un fier partenaire du fond de solidarité de la FTQ! Un REER au rendement supérieur qui vient avec des déductions d’impôt préférentielle!
            </p>
          </div>
          <div className="container mx-auto mt-8">
            <h3 className="text-2xl font-bold mb-4">Qualifications requises</h3>
            <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Formation</h4>
                <p>
                BAC ou Maîtrise en physiothérapie.
                </p>
                <p>
                Être membre de l’Ordre des Physiothérapeutes du Québec.
                </p>
                <p>
                Bonne maîtrise du français tant à l’oral qu’à l’écrit </p>
            </div>
            <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobPhysiotherapist;
