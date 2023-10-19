import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'

const OurValues = () => {
  const valuesData = [
    {
      title: 'Innovation',
      description:
        'Repenser de manière ingénieuse la gestion du personnel de la santé est au cœur de ce qui propulse le ssein santé.',
    },
    {
      title: 'Professionnalisme',
      description:
        'Que ce soit envers nos partenaires ou envers nos professionnels, les collaborateurs du ssein santé profitent d’une équipe à la hauteur de leurs attentes en termes de professionnalisme. Nous nous distinguons entre autres, grâce à notre ponctualité, notre réactivité et une courtoisie hors pair.',
    },
    {
      title: 'Bienveillance',
      description:
        'Plusieurs équipes travaillant étroitement ensemble pour le bien-être de nos professionnels de la santé, tout en étant un soutien pour le système de la santé. C’est comme cela que nous démontrons notre bienveillance, qui est une valeur clé chez le ssein santé.',
    },
    {
      title: 'Transparence',
      description:
        'Que vous soyez un partenaire, ou un professionnel de la santé, profitez d’une équipe intègre et professionnelle qui cheminera avec vous en toute transparence, à chaque étape de votre cheminement de carrière … tel que vous le méritez.',
    },
  ]

  return (
    <>
      <HEADER />
      <div className="bg-gradient-to-r from-cyan-400 via-teal-500 to-blue-600 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Nos valeurs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {valuesData.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h2>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default OurValues
