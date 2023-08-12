import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Loading from '../Components/Loading/Index'
import { useNavigate } from 'react-router'
import { useState } from 'react'

const ApplicationForm = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: ['', ''],
    city: '',
    province: '',
    postal_code: '',
    work_permit: '',
    position: '',
    resume: '',
    regions: [],
    schedule: [],
    resume_by_email: 'true'
  })
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let Address = [];

    if (name === 'address1') {
      Address = formData.address;
      Address[0] = value;
      setFormData((prevData) => ({ ...prevData, address: Address }));
      return;
    }

    if (name === 'address2') {
      Address = formData.address;
      Address[1] = value;
      setFormData((prevData) => ({ ...prevData, address: Address }));
      return;
    }

    if (name === 'resume') { // Handle the resume input
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      return;
    }

    // Handle other input fields
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === 'checkbox'
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }));
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    console.log('Form Values:', formData); // Log the formData to see if resume is populated

    try {
      const response = await axios.post('https://cautious-erin-pig.cyclic.app/apply', formData);
      console.log('API Response:', response.data);
      toast.success('Votre candidature a été envoyée avec succès');
    
   // reload window
   setTimeout(() => {
    navigate("/")
  }, 3000)
      // Handle the API response here
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here if any
      toast.error('Une erreur est survenue');
    }
  };

  const regions = [
    'Gaspésie',
    'Abitibi',
    'Montréal',
    'Outaouais',
    'Montérégie-Est',
    'Montérégie-Ouest',
    'Montérégie-Centre',
    'Îles-de-la-Madelaine',
    'Bas-Saint-Laurent',
    'Côte-Nord',
    'Laurentides',
    'Lanaudière',
    'Laval',
    'Mauricie-Centre-du-Québec',
    'Saguenay-Lac-Saint-Jean',
    'Capitale-Nationale',
    'Baie-James',
    'Chaudière-Appalaches',
  ]
  const schedules = [
    'Jour',
    'Soir',
    'Nuit',
    'Fin de semaine',
    'Temps partiel',
    'Temps plein',
  ]
  const jobs = [
    'Physiothérapeute',
    'Infirmier (ère)',
    'Infirmier(ère) auxiliaire',
    'Travailleur (euse) social',
    'Inhalothérapeute',
    'Ergothérapeute',
    'Adjoint(e) à la répartition',
   'Préposé(e) aux bénéficiaires'
  ]
  return (
    <>
      <HEADER />
      <ToastContainer />
      <div className="bg-gradient-to-b from-cyan-400 to-blue-200 min-h-screen flex flex-col items-center justify-center py-10">
        <div className="bg-white rounded-lg p-8 max-w-xl w-full">
          <h2 className="text-center text-3xl font-bold mb-4">
            Rejoignez l’équipe !
          </h2>
          <p className="text-center mb-8">
            Déposez rapidement votre candidature avec notre formulaire
            d'application rapide. Aucun téléversement requis!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Prénom*
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Prénom"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Nom*
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Nom"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Numéro de téléphone*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="(000) 000-0000"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Adresse courriel*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Exemple : info@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Adresse*
              </label>
              <input
                type="text"
                name="address1"
                index="0"
                value={formData.address[0]}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Adresse"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Adresse 2
              </label>
              <input
                type="text"
                name="address2"
                index="1"
                value={formData.address[1]}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Adresse 2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Ville*
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Ville"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Province*
              </label>
              <input
                type="text"
                name="province"
                value={formData.province}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Province"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Code Postal*
              </label>
              <input
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Code Postal"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Avez-vous le statut de résident permanent OU citoyen canadien OU
                un permis de travail au Canada ?
              </label>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="work_permit"
                  value="true"
                  checked={formData.work_permit === 'true'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-cyan-600"
                />
                <label className="ml-2 block text-gray-700">Oui</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="work_permit"
                  value="false"
                  checked={formData.work_permit === 'false'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-cyan-600"
                />
                <label className="ml-2 block text-gray-700">Non</label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Pour quel poste appliquez-vous ?
              </label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              >
                <option value="">Choisissez un poste</option>
                {jobs.map((job) => (
                  <option key={job} value={job}>
                    {job}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Quelle région vous intéresse ? Choisissez au minimum 3 régions.*
              </label>
              <div className="grid grid-cols-3 gap-4">
                {regions.map((region) => (
                  <div key={region} className="flex items-center">
                    <input
                      type="checkbox"
                      name="regions"
                      value={region}
                      checked={formData.regions.includes(region)}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-cyan-600"
                    />
                    <label className="ml-2 block text-gray-700">{region}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Quelle type d'horaire vous intéresse? Plusieurs choix possibles
              </label>
              <div className="grid grid-cols-3 gap-4">
                {schedules.map((schedule) => (
                  <div key={schedule} className="flex items-center">
                    <input
                      type="checkbox"
                      name="schedule"
                      value={schedule}
                      checked={formData.schedule.includes(schedule)}
                      onChange={handleChange}
                      className="form-checkbox h-5 w-5 text-cyan-600"
                    />
                    <label className="ml-2 block text-gray-700">
                      {schedule}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
              Veuillez envoyer votre CV par courriel à info@philsein.com
              </label>
              <div className='hidden'>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="resume_by_email"
                  value="true"
                  checked={formData.resume_by_email === 'true'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-cyan-600"
                />
                <label className="ml-2 block text-gray-700">Oui</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="resume_by_email"
                  value="false"
                  checked={formData.resume_by_email === 'false'}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-cyan-600"
                />
                <label className="ml-2 block text-gray-700">Non</label>
              </div>
              </div>
            </div>
            <div className="mb-4 hidden">
              <label className="block text-gray-700 font-semibold mb-2">
              Génial! Entrez l'URL du CV ici ⬇️ *
              </label>
              <input
            type="url"
            name="resume"
            id="resume" // Make sure this ID is unique within your document
            value={formData.resume} // Bind the value to formData.resume
            onChange={handleChange}
            className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500  "
          />
            </div>
            <button
              type="submit"
              className="btn-submit w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-700 hover:opacity-90 transition-colors duration-300"
            >
               {isLoading ? <Loading size="5" color='black' /> : 'Soumettre'}
              
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ApplicationForm
