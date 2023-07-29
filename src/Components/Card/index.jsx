import {
  FaUserFriends,
  FaClipboardCheck,
  FaChartLine,
  FaUserTie,
} from 'react-icons/fa'

const Index = () => {
  return (
    <div className="flex flex-col">
      <div className="card-container w-full max-w-md">
        <div className="card bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="card-header">
            <div className="card-header-icon">
              <FaUserFriends size={30} />
            </div>
          </div>
          <div className="card-body">
            <p className="card-body-text text-center text-lg font-semibold">
              DES TRAVAILLEURS ÉTRANGERS QUALIFIÉS, INSTRUITS ET EXPÉRIMENTÉS
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="card-header">
            <div className="card-header-icon">
              <FaClipboardCheck size={30} />
            </div>
          </div>
          <div className="card-body">
            <p className="card-body-text text-center text-lg font-semibold">
              GESTION ET SUIVI DU PROCESSUS D'IMMIGRATION DES CANDIDATS
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="card-header">
            <div className="card-header-icon">
              <FaChartLine size={30} />
            </div>
          </div>
          <div className="card-body">
            <p className="card-body-text text-center text-lg font-semibold">
              RÉDUIRE OU ÉLIMINER LES PÉNURIES DE MAIN-D'ŒUVRE !
            </p>
          </div>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-4 mb-4">
          <div className="card-header">
            <div className="card-header-icon">
              <FaUserTie size={30} />
            </div>
          </div>
          <div className="card-body">
            <p className="card-body-text text-center text-lg font-semibold">
              RECRUTER À DIFFÉRENTS POSTES ET DANS DIFFÉRENTS SECTEURS
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
