import { useState } from 'react'
import axios from 'axios'
import Cards from '../Components/Card/index'
import '../assets/Style/Recruitment.css'
import Loading from '../Components/Loading/Index'
import { ToastContainer, toast } from 'react-toastify'

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    want_to_hire: '',
    first_name: '',
    last_name: '',
    company_name: '',
    company_email: '',
    size_of_company: '',
    phone_number: '',
    city: '',
    province: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await axios.post(
        'https://cautious-erin-pig.cyclic.app/staff',
        formData
      )
      console.log('API Response:', response.data)
      toast.success('Votre message a été envoyé avec succès')
      setIsLoading(false) // Clear the form fields
      setFormData({
        want_to_hire: '',
        first_name: '',
        last_name: '',
        company_name: '',
        company_email: '',
        size_of_company: '',
        phone_number: '',
        city: '',
        province: '',
      }) // Clear the form fields
    } catch (error) {
      console.error('Error:', error)
      setIsLoading(false)
      // Handle errors here if any
    }
  }
  // Options for the select element
  const jobOptions = [
    "Personnel de l'entrepôt",
    'Chauffeur de camion',
    'Travailleurs agricoles',
    'Ouvriers du commerce',
    'Autres membres du personnel',
  ]

  return (
    <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full max-w-md mb-4 md:mb-0 ">
        <h2 className="text-2xl font-bold text-center mb-4">
          Remplissez le formulaire pour obtenir le personnel dont vous avez
          besoin !
        </h2>
        <form
          onSubmit={handleSubmit}
          className=" bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <div className="mb-2">
            <label htmlFor="first_name" className="block font-semibold mb-1">
              Je veux embaucher
            </label>
            <select
              name="want_to_hire"
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              value={formData.job}
              onChange={handleChange}
              required
            >
              <option value="">Select a job</option>
              {jobOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 px-1 mb-4">
              <label htmlFor="first_name" className="block font-semibold mb-1">
                Prénom *
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Prénom"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="last_name" className="block font-semibold mb-1">
                Nom *
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Nom"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="company_name" className="block font-semibold mb-1">
              Nom de l'entreprise *
            </label>
            <input
              type="text"
              name="company_name"
              id="company_name"
              value={formData.company_name}
              onChange={handleChange}
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="company_email" className="block font-semibold mb-1">
              Courriel de l'entreprise *
            </label>
            <input
              type="email"
              name="company_email"
              id="company_email"
              value={formData.company_email}
              onChange={handleChange}
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="size_of_company"
              className="block font-semibold mb-1"
            >
              Taille de l'entreprise
            </label>
            <select
              name="size_of_company"
              id="size_of_company"
              value={formData.size_of_company}
              onChange={handleChange}
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Sélectionnez une option</option>
              <option value="1-10 employés">1-10 employés</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="phone_number" className="block font-semibold mb-1">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              name="phone_number"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="city" className="block font-semibold mb-1">
                Ville *
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Ville"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="province" className="block font-semibold mb-1">
                Province *
              </label>
              <input
                type="text"
                name="province"
                id="province"
                value={formData.province}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Province"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="button max-w-sm mx-auto bg-gradient-to-r from-cyan-400 to-cyan-700 rounded-lg p-4"
          >
            {isLoading ? (
              <Loading size="5" color="black" />
            ) : (
              'OBTENIR DU PERSONNEL QUALIFIÉ DÈS MAINTENANT'
            )}
          </button>
        </form>
        <ToastContainer />
      </div>
      <Cards />
    </div>
  )
}

export default RecruitmentForm
