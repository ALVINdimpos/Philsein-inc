import { Link } from 'react-router-dom';
import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
const JobNurseAuxiliary = () => {
  return (
    <div>
      <HEADER />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Emploi: Infirmier(ère) Auxiliaire</h1>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p>
              Notre agence de placement embauche présentement des infirmières auxiliaires pour des assignations partout à travers le Québec! Profitez de salaire de 30% à 80% plus élevé que la moyenne provinciale et une plus grande mainmise sur vos conditions de travail!
            </p>
             <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Description de poste</h3>
            <h4 className="text-lg font-bold mb-2">Nature de l'emploi</h4>
            <p>
              Dans le cadre de votre emploi d'infirmier(ère) auxiliaire, vous exercerez vos fonctions type tel que décrit par l’OIIAQ. Ceci inclut mais ne se limite pas à évaluer l’état de santé de la personne et réaliser les plans de soins.
            </p>
            <p>
              Vous aurez également la charge de prodiguer des soins et des traitements infirmiers et médicaux dans le but de maintenir la santé, de la rétablir et de prévenir la maladie, ainsi que de fournir des soins palliatifs.
            </p>
            <p>
              À partir de 45$ de l'heure
            </p>
            <p>
              Postes disponibles partout à travers le Québec.
            </p>
            <p>
              Flexibles. Possibilité de moduler son horaire selon ses disponibilités
            </p>
            
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Conditions de travail</h3>
            <h4 className="text-lg font-bold mb-2">Salaire</h4>
            <p>
              Pour le poste d’infirmier(ère) auxiliaire, nos salaires commencent à partir de 34$ de l’heure et varient principalement en fonction de la région d’emploi.
            </p>
            <p>
              Ainsi, pour les lieux de travail proches des grands centres, comme Montréal et Laval, les salaires varient entre 34 et 40$ de l'heure. Celui pour nos emplois en régions plus éloignées varient entre 44$ à 57$ de l’heure.
            </p>
            <p>
              Finalement, à Lanaudière et les Laurentides, nos salaires commencent à 42$ de l’heure.
            </p>
            <p>
              De plus, dans certaines régions, nous avons un programme de remboursement des dépenses disponibles (kilométrage, perdiem, frais d’hébergement)
            </p>
            <h4 className="text-lg font-bold mt-2">Types d'horaires</h4>
            <p>
              Postes à temps plein et à temps partiel disponibles. Possibilité de choisir des quarts ponctuellement, si vous le désirez.
            </p>
            <h4 className="text-lg font-bold mt-2">Types de quarts</h4>
            <p>
              Quarts de jour, de soir et de nuit disponibles.
            </p>
            <h4 className="text-lg font-bold mt-2">Lieu de travail</h4>
            <p>
              Choisissez l’emplacement et le type d’établissement de votre choix! Postes disponibles partout à travers le Québec.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Nos Avantages</h3>
            <h4 className="text-lg font-bold mb-2">Programme de remboursement des dépenses</h4>
            <p>
              Profitez de notre programme de remboursement des dépenses dans les régions sélectionnées. Ce programme inclut:
            </p>
            <ul className="list-disc list-inside">
              <li>L'indemnité de logement.</li>
              <li>Une allocation personnelle (per diem) de 30$ à 80$ par jours travaillés.</li>
              <li>Le remboursement du temps de déplacement.</li>
              <li>Le remboursement 0,48$ par kilomètre parcouru.</li>
              <li>Le remboursement des frais de taxi ou de location.</li>
              <li>Et même le transport par avion payé.</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Personnalisez votre expérience de travail</h3>
            <p>
              Nos infirmiers et infirmières auxiliaires ont la possibilité de moduler leur horaire et leurs quarts de travail en fonction de leurs disponibilités!
            </p>
            <p>
              La région de travail, l'emplacement et même votre département comptent aussi parmi les préférences d'emploi que vous pourrez déterminer.
            </p>
            <p>
              Ainsi, que vous préfériez un emploi à Montréal, en banlieue ou en régions éloignées - Exercez votre travail dans l'emplacement et les conditions qui vous conviennent le mieux!
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Lien utile</h3>
            <ul className="list-disc list-inside">
              <li>Tous nos emplois disponibles</li>
              <li>À propos de nous</li>
              <li>Article: Comment trouver la meilleure agence de placement infirmier?</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Qualifications requises</h3>
            <h4 className="text-lg font-bold mb-2">Formation</h4>
            <p>
              Détenir un diplôme d'études professionnelles (DEP) reconnu par le MÉES en Santé, assistance et soins infirmiers (SASI)
            </p>
            <p>
              Être membre de l’Ordre des infirmiers(ères) auxiliaires du Québec (OIIAQ) et détenir un permis valide depuis au moins 6 mois
            </p>
            <p>
              Avoir une certification de RCR valide
            </p>
            <p>
              Bonne maîtrise du français tant à l’oral qu’à l’écrit
            </p>
             <Link   to="/application" className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default JobNurseAuxiliary;
