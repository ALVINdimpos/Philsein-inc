import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
import health from '../assets/Images/health.jpeg'

const History = () => {
  return (
    <div>
      <HEADER />
      <div className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-5xl bg-white p-8 rounded-lg shadow-xl flex flex-col sm:flex-row items-center">
          <div className="sm:w-1/2 sm:pr-8">
            <img
              className="w-full rounded-lg sm:w-auto sm:h-64 mx-auto mb-4"
              src={health}
              alt="Philsein inc"
            />
          </div>
          <div className="sm:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Histoire</h1>
            <p className="text-lg text-gray-700 mb-4">
              Le Philsein inc est né de la mission de ses fondateurs.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Celle d'être un réel soutien pour les établissements et les
              professionnels dans le domaine de la santé.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              C'est ainsi que ceux-ci se sont mis à la tâche de confectionner
              des systèmes capables d'autonomiser les professionnels dans le
              milieu de la santé, tout en facilitant les opérations des
              gestionnaires de ce même réseau.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Le résultat : Une agence de placement en santé, axée sur une
              gestion humaine et efficace et se positionnant comme{' '}
              <span className="font-bold text-blue-700">
                LE partenaire de choix
              </span>{' '}
              pour les établissements de santé.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Le Philsein inc se démarque par son expertise, qui lui permet de
              recruter les meilleurs talents pour ses partenaires et surtout de
              les déployer le plus rapidement possible sur le terrain. Pour ces
              talents en question, ils ont enfin accès à un partenaire avec leur
              bien-être à cœur et capable de leur donner plus de contrôle sur
              leur carrière.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default History
