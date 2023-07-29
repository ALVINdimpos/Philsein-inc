import { Link } from 'react-router-dom';
import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
const jobsData = [
  {
    title: 'Infirmier(ère)',
    rate: 'À partir de 60$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nFlexibles. Possibilité de moduler son horaire selon ses disponibilités',
    
  },
  {
    title: 'Infirmier(ère) auxiliaire',
    rate: 'À partir de 45$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nFlexibles. Possibilité de moduler son horaire selon ses disponibilités',
  },
  {
    title: 'Ergothérapeute',
    rate: 'À partir de 65$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nHoraire temps plein. Quarts de jours ou de soir disponibles',
  },
  {
    title: 'Travailleur(euse) social(e)',
    rate: 'À partir de 60$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nHoraire temps plein. Quarts de jours ou de soir disponibles',
  },
  {
    title: 'Physiothérapeute',
    rate: 'À partir de 65$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nHoraire temps plein. Quarts de jours ou de soir disponibles',
  },
  {
    title: 'Inhalothérapeute',
    rate: 'À partir de 58$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nHoraire temps plein. Quarts de jours ou de soir disponibles',
  },
  {
    title: 'Préposé(e) aux bénéficiaires',
    rate: 'À partir de 36$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nFlexible. Possibilité de moduler son horaire selon ses disponibilités',
  },
  {
    title: 'Technicien(enne) en travail social',
    rate: 'À partir de 50$ de l\'heure',
    description: 'Postes disponibles partout à travers le Québec.\n\nFlexibles. Possibilité de moduler son horaire selon ses disponibilités',
  },
];

const AllJobsPage = () => {
  return (
    <div>

        <HEADER />
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Tous nos emplois disponibles</h1>
        <div className="flex flex-wrap justify-center -mx-4">
          {jobsData.map((job, index) => (
            <div key={index} className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.rate}</p>
                <p className="text-gray-600">{job.description}</p>
                <Link  to="/application" className="btn bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg">APPLIQUER</Link>
                <button onClick={} className="bg-gray-300 text-gray-700 px-4 py-2 mt-2 rounded-lg">EN SAVOIR PLUS</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default AllJobsPage;
