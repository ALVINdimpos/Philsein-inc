<<<<<<< HEAD
=======
import { Link } from 'react-router-dom'
>>>>>>> ft:add some pages
import health from '../assets/Images/health.jpeg'
import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
const Advantages = () => {
  return (
    <div>
      <HEADER />
      <div className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-5xl bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Découvrez nos avantages
          </h1>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-8">
            <div className="sm:w-1/3">
              <img
                className="w-full rounded-lg sm:w-auto sm:h-64 mx-auto mb-4"
                src={health}
                alt="Philsein inc"
              />
            </div>
            <div className="sm:w-2/3">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Un salaire compétitif
                </h2>
                <p className="text-gray-700">
                  En tant que pilier du système de santé, vous méritez d’être
                  compensé en conséquence. Maximisez donc vos revenus d’emplois
                  avec des salaires de 30 à 80% plus élevés que la moyenne
                  provinciale.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Une équipe qui travaille pour vous
                </h2>
                <p className="text-gray-700">
                  Profitez de la commodité d’avoir une équipe dédiée à vous
                  trouver les meilleurs mandats possibles, en fonction de vos
                  préférences d’emploi.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Une gestion humaine
                </h2>
                <p className="text-gray-700">
                  Au-delà des soins, il y a des humains! Profitez d'une équipe
                  de gestion centrée autour de cette mentalité. Bénéficiez de la
                  paix d’esprit qui vient avec une équipe d’expérience qui vous
                  guide à travers toutes les problématiques que vous pourriez
                  rencontrer sur le terrain.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Décidez de votre horaire en quelques clics !
                </h2>
                <p className="text-gray-700">
                  Modifiez vos disponibilités en tout temps directement sur
                  votre appareil mobile ou un ordinateur. Que ce soit en
                  journée, en soirée ou pendant la nuit, le Philsein inc saura
                  vous trouver des mandats adaptés à vos préférences.
                </p>
              </div>
              <div className="text-center">
<<<<<<< HEAD
                <button className="btn-apply mt-6 py-3 px-6 rounded-lg text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-700 hover:opacity-90 transition-colors duration-300">
                  Appliquez maintenant
                </button>
=======
                <Link to="/application" className="btn-apply mt-6 py-3 px-6 rounded-lg text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-700 hover:opacity-90 transition-colors duration-300">
                  Appliquez maintenant
                </Link>
>>>>>>> ft:add some pages
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Advantages
