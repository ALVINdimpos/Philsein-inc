import { Link } from 'react-router-dom';
import Header from '../Layouts/Header';

const JobTechnicienTravailSocial = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Emploi: Technicien(enne) en travail social</h1>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p>
              Vous êtes un technicien en travail social cherchant les meilleures perspectives d'emplois au Québec? Vous êtes au bon endroit! Défilez pour en savoir plus sur nos postes disponibles en travail social!
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Description de poste</h3>
            <h4 className="text-lg font-bold mb-2">Nature de l'emploi</h4>
            <p>
              En tant que technicien en travail social, vous jouerez un rôle essentiel dans la fourniture de services de soutien aux individus et aux familles confrontées à divers défis sociaux. Vous travaillerez en étroite collaboration avec les travailleurs sociaux et d'autres professionnels de la santé pour évaluer les besoins des clients, élaborer des plans de soins et fournir des ressources et des services appropriés.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              À partir de 50$ de l'heure
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
              Le taux horaire pour ce poste est de 50$ par heure et varie selon la région d’emploi. En effet, plus proche de la grande région de Montréal, nos salaires se rapprochent de 50$ de l'heure, alors que nos régions plus éloignées, le salaire se rapproche de 58$ de l’heure. De plus, en général, les taux payés pour des clients privés peuvent différer de ceux de nos clients du réseau public.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Nos Avantages</h3>
            <h4 className="text-lg font-bold mb-2">Remboursement des dépenses</h4>
            <p>
              Maximisez vos revenus d’emploi avec notre programme de remboursement des dépenses! Dans les régions sélectionnées, ce programme peut inclure:
            </p>
            <ul className="list-disc list-inside">
              <li>L'indemnité de logement</li>
              <li>Une allocation personnelle (perdiem) de 30$ à 80$ par jour travaillé</li>
              <li>Le remboursement du temps de déplacement</li>
              <li>Le remboursement de 0,48$ par kilomètre parcouru (certaines conditions peuvent s’appliquer)</li>
              <li>Le remboursement des frais de taxi ou de location</li>
              <li>Et même le transport par avion payé!</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              Aillez une plus grande mainmise sur vos conditions de travail! Ceci inclut vos horaires et quarts de travail. Ainsi, dès votre embauche, vous pourrez nous indiquer vos préférences d’horaires et de quarts. Vous pourrez aussi les modifier par téléphone, ou via notre plateforme Employé.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              Un REER Collectif qui rapporte. Nous sommes un fier partenaire du fond de solidarité de la FTQ! Un REER au rendement supérieur qui vient avec des déductions d’impôt préférentielles!
            </p>
          </div>
        </div>
        {/* Qualifications requises */}
        <div className="container mx-auto mt-8">
            <h3 className="text-2xl font-bold mb-4">Qualifications requises</h3>
            <div className="p-4 bg-white rounded-lg shadow-md">
                <h4 className="text-lg font-bold mb-2">Formation</h4>
                <p>
                DEC en techniques de travail social
                </p>
                <p>
                Portfolio des connaissances récentes : PCI
                </p>
                <p>
                Formation sur l’approche Oméga (atout)</p>
                <p>
                RCR à jour
                </p>
                <p>
                Expérience dans le système public (atout)
                </p>
                <p>
                Maîtrise du français parlé et écrit
                </p>
            </div>
 <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
            </div>
      </div>
    </div>
  );
};

export default JobTechnicienTravailSocial;
