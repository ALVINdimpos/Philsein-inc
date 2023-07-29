import { useState } from 'react'
import Cards from '../Components/Card/index'
import '../assets/Style/Recruitment.css'
const RecruitmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    companyEmail: '',
    companySize: '',
    phoneNumber: '',
    city: '',
    province: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit form logic here
    console.log(formData)
  }

  return (
    <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between">
      <div className="w-full max-w-md mb-4 md:mb-0">
        <h2 className="text-2xl font-bold text-center mb-4">
          Remplissez le formulaire pour obtenir le personnel dont vous avez
          besoin !
        </h2>
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 px-1 mb-4">
              <label htmlFor="firstName" className="block font-semibold mb-1">
                Prénom *
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Prénom"
                required
              />
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <label htmlFor="lastName" className="block font-semibold mb-1">
                Nom *
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Nom"
                required
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="companyName" className="block font-semibold mb-1">
              Nom de l'entreprise *
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="companyEmail" className="block font-semibold mb-1">
              Courriel de l'entreprise *
            </label>
            <input
              type="email"
              name="companyEmail"
              id="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="companySize" className="block font-semibold mb-1">
              Taille de l'entreprise
            </label>
            <select
              name="companySize"
              id="companySize"
              value={formData.companySize}
              onChange={handleChange}
              className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Sélectionnez une option</option>
              <option value="1-10 employés">1-10 employés</option>
              {/* Add more options if needed */}
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="phoneNumber" className="block font-semibold mb-1">
              Numéro de téléphone
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
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
            OBTENIR DU PERSONNEL QUALIFIÉ DÈS MAINTENANT
          </button>
        </form>
      </div>
      <Cards />
    </div>
  )
}

export default RecruitmentForm