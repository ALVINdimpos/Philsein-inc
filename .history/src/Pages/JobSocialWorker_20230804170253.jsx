import Header from '../Layouts/Header';
import Footer from '../Layouts/Footer/index'
const JobSocialWorker = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Emploi: Travailleur(euse) social(e)</h1>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p>
              Nous avons une offre d’emploi pour les travailleurs(euses) sociaux qui veulent développer leur carrière. Vous reconnaissez-vous? Alors nous aimerions vous rencontrer!
            </p>
            <Link   to="/application"className="btn text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER MAINTENANT</Link>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Description de poste</h3>
            <h4 className="text-lg font-bold mb-2">Nature de l'emploi</h4>
            <p>
              En tant que travailleur(euse) social, vous aurez à intervenir auprès d’individus, de couples, de familles, de groupes et de collectivités en vue de les aider à résoudre ou à prévenir des problèmes d’ordre personnel, familial ou social.
            </p>
            <h4 className="text-lg font-bold mt-2">Responsabilité</h4>
            <ul className="list-disc list-inside">
              <li>Évaluer le fonctionnement social du patient</li>
              <li>Déterminer un plan d’intervention et en assurer la mise en place</li>
              <li>Soutenir et rétablir le fonctionnement social du patient en tenant compte de son milieu dans le but de favoriser le développement optimal de l’être humain.</li>
              <li>Exercer des activités de conception, d’orientation, de consultation, d’actualisation, d’analyse et d’évaluation dans un ou plusieurs programmes sociaux</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              À partir de 60$ de l'heure
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
              Pour le poste de travailleur ou travailleuse social, nos salaires commencent à partir de 60$/h. Ceux-ci varient principalement en fonction de la région d’emploi.
            </p>
            <p>
              En effet, dans les grands centres comme Montréal, nos salaires sont de 60$/h.
            </p>
            <p>
              Cependant, en régions éloignées comme l’Abitibi et la Côte-Nord, nos salaires commencent à 68$/h.
            </p>
            <h4 className="text-lg font-bold mt-2">Types d'horaires</h4>
            <p>
              Ce poste comprend un horaire à temps plein, de 35h par semaine, du lundi au vendredi.
            </p>
            <h4 className="text-lg font-bold mt-2">Types de quarts</h4>
            <p>
              Avec nous, vous pourrez décider entre des quarts de jour ou de soir. Notre agence vous donne aussi la chance de définir vos disponibilités dès le début.
            </p>
            <p>
              Finalement, vous pourrez aussi modifier ces disponibilités au courant de votre parcours professionnel avec nous.
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
              <li>Une allocation personnelle (perdiem) de 30$ à 80$ par jour travaillé.</li>
              <li>Le remboursement du temps de déplacement</li>
              <li>Le remboursement de 0,48$ par kilomètre parcouru (certaines conditions peuvent s’appliquer)</li>
              <li>Le remboursement des frais de taxi ou de location d’auto</li>
              <li>Et même le transport par avion payé!</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              Flexibilités
            </p>
            <p>
              Aillez une plus grande mainmise sur vos conditions de travail! Ceci inclu vos horaires et quarts de travail, ainsi que votre environnement de travail.
            </p>
            <p>
              Ainsi, dès votre embauche, vous pourrez nous indiquer vos préférences d’horaires et de quarts. Vous pourrez aussi les modifier par téléphone, ou via notre plateforme employé.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>
              Un REER Collectif qui rapporte
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
      <Footer/>
    </div>
  );
};

export default JobSocialWorker;
