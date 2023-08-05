import { Link } from 'react-router-dom'
import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
const JobOccupationalTherapist = () => {
  return (
    <div>
      <HEADER />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            Emploi: Ergothérapeute
          </h1>
          <div className="p-4 bg-white rounded-lg shadow-md">
            <p>
              Êtes-vous un ergothérapeute à la recherche des meilleures
              perspectives d’emplois au Québec? Si oui, alors cette offre
              d’emploi est pour vous!
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Description de poste</h3>
            <h4 className="text-lg font-bold mb-2">Nature de l'emploi</h4>
            <p>
              En tant qu'ergothérapeute, vous serez responsable d'évaluer et de
              traiter les troubles fonctionnels des patients pour les aider à
              atteindre leurs objectifs de vie quotidienne.
            </p>
            <p>
              Vous travaillerez en étroite collaboration avec une équipe
              interdisciplinaire pour offrir des solutions individualisées aux
              besoins de chaque patient.
            </p>
            <h4 className="text-lg font-bold mt-2">Responsabilités</h4>
            <ul className="list-disc list-inside">
              <li>Évaluer les capacités fonctionnelles du client</li>
              <li>Élaborer et mettre en oeuvre un plan d’intervention</li>
              <li>
                Développer, rétablir ou maintenir les aptitudes ainsi que
                compenser les incapacités et adapter l’environnement dans le but
                d’optimiser l’autonomie du client ainsi que sa sécurité
              </li>
              <li>Jouer un rôle de conseiller auprès des intervenants</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>À partir de 65$ de l'heure</p>
            <p>Postes disponibles partout à travers le Québec.</p>
            <p>Horaire temps plein. Quarts de jours ou de soir disponibles</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Conditions de travail</h3>
            <h4 className="text-lg font-bold mb-2">Salaire</h4>
            <p>
              Pour le poste d'ergothérapeute, nos salaires varient
              principalement en fonction de la région d’emploi.
            </p>
            <p>
              Ainsi, en Abitibi et en Côte-Nord, nos salaires commencent à
              partir de 73$ de l'heure.
            </p>
            <h4 className="text-lg font-bold mt-2">Types d'horaires</h4>
            <p>Horaire à temps plein de 35 h par semaine</p>
            <h4 className="text-lg font-bold mt-2">Types de quarts</h4>
            <p>
              Nous vous laissons la possibilité de choisir entre des quarts de
              jour ou de soir.
            </p>
            <h4 className="text-lg font-bold mt-2">Lieu de travail</h4>
            <p>
              Au moment de la rédaction de cette offre (Avril 2023), nos
              demandes sont principalement en Abitibi et en Côte-Nord
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Nos Avantages</h3>
            <h4 className="text-lg font-bold mb-2">
              Remboursement des dépenses
            </h4>
            <p>
              Maximisez vos revenus d’emploi avec notre programme de
              remboursement des dépenses! Dans les régions sélectionnées, ce
              programme peut inclure:
            </p>
            <ul className="list-disc list-inside">
              <li>L'indemnité de logement</li>
              <li>
                Une allocation personnelle (perdiem) de 30$ à 80$ par jour
                travaillé.
              </li>
              <li>Le remboursement du temps de déplacement</li>
              <li>
                Le remboursement de 0,48$ par kilomètre parcouru (certaines
                conditions peuvent s’appliquer)
              </li>
              <li>Le remboursement des frais de taxi ou de location d’auto</li>
              <li>Et même le transport par avion payé!</li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>Flexibilités</p>
            <p>
              Ayez une plus grande mainmise sur vos conditions de travail! Ceci
              inclut vos horaires et quarts de travail, ainsi que votre
              environnement de travail.
            </p>
            <p>
              Ainsi, dès votre embauche, vous pourrez nous indiquer vos
              préférences d’horaires et de quarts. Vous pourrez aussi les
              modifier par téléphone, ou via notre plateforme employé.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <p>Un REER Collectif qui rapporte</p>
            <p>
              Nous sommes un fier partenaire du fond de solidarité de la FTQ! Un
              REER au rendement supérieur qui vient avec des déductions d’impôt
              préférentielle!
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Lien utile</h3>
            <ul className="list-disc list-inside">
              <li>Tous nos emplois disponibles</li>
              <li>À propos de nous</li>
              <li>
                Article: Comment trouver la meilleure agence de placement
                infirmier?
              </li>
            </ul>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <h3 className="text-xl font-bold mb-4">Qualifications requises</h3>
            <h4 className="text-lg font-bold mb-2">Formation</h4>
            <p>
              Avoir le statut de résident permanent OU celui de citoyen canadien
              OU un permis de travail au Canada.
            </p>
            <p>BAC ou Maîtrise en ergothérapie.</p>
            <p>Être membre de l’Ordre des ergothérapeutes du Québec.</p>
            <p>Maîtrise du français parlé et écrit.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md mt-8">
            <Link
              to="/application"
              className="btn text-white px-4 py-2 mt-4 rounded-lg"
            >
              APPLIQUER MAINTENANT
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default JobOccupationalTherapist
