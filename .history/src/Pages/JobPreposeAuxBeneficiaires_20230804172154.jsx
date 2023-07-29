import { Link } from 'react-router-dom';
import Header from '../Layouts/Header';

const JobPreposeAuxBeneficiaires = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Emploi: Préposé(e) aux bénéficiaires</h1>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p>
              Trouvez les meilleures perspectives d'emplois en tant que préposé(e) aux bénéficiaires chez notre agence de placement!
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Description de poste</h3>
            <h4 className="text-lg font-bold mb-2">Nature de l'emploi</h4>
            <p>
              Dans le cadre de votre emploi de préposé(e) aux bénéficiaires en agence, vous aurez à assumer la responsabilité d'un ensemble de soins aux patients, tels que prescrit par votre formation et expérience. Ces soins devront être adaptés aux besoins de vos patients et ce, dans différents environnements de travail. Vous travaillerez aussi en collaboration avec d'autres professionnels de la santé pour assurer une bonne continuité des soins pour vos patients.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              À partir de 36$ de l'heure
            </p>
            <p>
              Postes disponibles partout à travers le Québec.
            </p>
            <p>
              Flexible. Possibilité de moduler son horaire selon ses disponibilités
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Conditions de travail</h3>
            <h4 className="text-lg font-bold mb-2">Salaire</h4>
            <p>
              Le salaire pour se poste commence à partir de 36$ de l'heure. et varie principalement selon la région d’emploi.
            </p>
            <p>
              Notez aussi que les taux payés pour nos clients privés diffèrent généralement de ceux de nos clients publics.
            </p>
            <p>
              De plus, nous travaillons aussi avec des professionnels(elles) incorporés et les taux horaires sont aussi plus élevés dans ces cas.
            </p>
            <p>
              Finalement, dans les régions sélectionnées, nous avons aussi un programme de remboursement des dépenses disponible.
            </p>
            <h4 className="text-lg font-bold mt-2">Types d'horaires</h4>
            <p>
              Postes à temps plein et à temps partiel disponibles. Possibilité de choisir des quarts ponctuellement, si vous le désirez.
            </p>
            <h4 className="text-lg font-bold mt-2">Types de quarts</h4>
            <p>
              Quarts de jour, de soir et de nuit disponibles.
            </p>
            <p>
              Lieu de travail
              Choisissez l’emplacement et le type d’établissement de votre choix! Postes disponibles partout à travers le Québec.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Nos Avantages</h3>
            <h4 className="text-lg font-bold mb-2">Programme de remboursement des dépenses</h4>
            <p>
              Profitez de notre programme de remboursement des dépenses dans les régions sélectionnées. Ce programme inclu:
            </p>
            <ul className="list-disc list-inside">
              <li>L'indemnité de logement</li>
              <li>Une allocation personnelle (perdiem) de 30$ à 80$ par jours travaillés</li>
              <li>Le remboursement du temps de déplacement</li>
              <li>Le remboursement 0,48$ par kilomètre parcouru</li>
              <li>Le remboursement des frais de taxi ou de location</li>
              <li>Et même le transport par avion payé</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              Nos infirmiers et infirmières ont la possibilité de moduler leur horaire et leurs quarts de travail en fonction de leurs disponibilités! La région de travail, l'emplacement et même votre département comptent aussi parmi les préférences d'emploi que vous pourrez déterminer. Ainsi, que vous préfériez un emploi à Montréal, en banlieue ou en régions éloignées - Exercez votre travail dans l'emplacement et les conditions qui vous conviennent le mieux!
            </p>
          </div>
          <div className="container mx-auto mt-8">
            <h3 className="text-2xl font-bold mb-4">Qualifications requises</h3>
            <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Formation</h4>
                <p>
                - DEP en assistance à la personne en établissement de santé, incluant stages et PDSB de plus de 750 heures
                </p>
                <p>
                - Expérience professionnelle minimale 6 mois (950 heures) comme PAB dans un établissement public du réseau de la santé et services sociaux du Québec.
                </p>
                <p>
                - RCR à jour. </p>
                <p>
                - Tu t’exprimes clairement tant à l’oral qu’à l’écrit </p>
            </div>
             <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreposeAuxBeneficiaires;
