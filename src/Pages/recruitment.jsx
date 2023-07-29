// Import the background image
import recruitmentBg from '../assets/Images/recruitment-bg.jpeg'
import RecruitmentForm from '../Components/RecruitmentForm'
import '../assets/Style/Recruitment.css'
import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
const Recruitment = () => {
  return (
    <div>
      <HEADER />
      <div
        className="heroSection relative bg-center bg-cover py-32"
        style={{ backgroundImage: `url(${recruitmentBg})` }}
      >
        {/* Pseudo-element for the overlay */}
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{ backdropFilter: 'blur(8px)' }}
        ></div>

        <div className="container mx-auto text-center text-white relative z-10">
          <h1 className=" Recruitment text-4xl font-bold mb-4">
            OBTENIR DU PERSONNEL ET DES TRAVAILLEURS QUALIFIÉS POUR VOTRE
            ENTREPRISE
          </h1>
          <p className="text-lg font-semibold">
            <strong>
              Des solutions de recrutement de travailleurs internationaux
              conçues pour vos besoins !
            </strong>
          </p>
        </div>
      </div>
      <RecruitmentForm />
      <Footer />
    </div>
  )
}

export default Recruitment
