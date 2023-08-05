import { useState } from 'react';
import axios from 'axios';
import '../assets/Style/Referral.css';
import Footer from '../Layouts/Footer/index';
import HEADER from '../Layouts/Header/index';

const ReferralProgram = () => {
  const [formData1, setFormData1] = useState({
    employeeStatus: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [formData2, setFormData2] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    employeeStatus: '',
    relationship: '',
  });

  const [showSecondForm, setShowSecondForm] = useState(false);

  const handleChange1 = (event) => {
    const { name, value } = event.target;
    setFormData1((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange2 = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData2((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? (checked ? [...prevData[name], value] : prevData[name].filter((item) => item !== value)) : value,
    }));
  };

  const handleNextPage = (event) => {
    event.preventDefault();
    // You can perform any validation here before proceeding to the next form
    // For example, check if all required fields are filled
    setShowSecondForm(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const mergedFormData = { ...formData1, ...formData2 };

    try {
      const response = await axios.post('http://localhost:3000/refer', mergedFormData);
      console.log('API Response:', response.data);
      // You can handle the API response here
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here if any
    }
  };

  const employeeStatusOptions = [
    'Infirmier(ère)',
    'Préposé(e) aux bénéficiaire',
    'Infirmier(ère) auxiliaire',
    'Travailleur(euse) sociale',
    'Technicien(enne) en laboratoire',
    'Auxiliaire en santé et services sociaux',
  ];

  return (
    <>
      <HEADER />
      <div className="Referral min-h-screen flex flex-col justify-center items-center text-white">
        <div className="container px-6 py-12 mx-auto">
          {!showSecondForm && (
            <form className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md" onSubmit={handleNextPage}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Êtes-vous présentement un employé du Philsein inc?
                </label>
                <div className="mt-2 flex">
                  <label className="inline-flex items-center mr-4">
                    <input
                      type="radio"
                      name="employeeStatus"
                      className="form-radio h-5 w-5 text-blue-500"
                      value="yes"
                      onChange={handleChange1}
                    />
                    <span className="ml-2 text-black">Oui</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="employeeStatus"
                      className="form-radio h-5 w-5 text-blue-500"
                      value="no"
                      onChange={handleChange1}
                    />
                    <span className="ml-2 text-black">Non</span>
                  </label>
                </div>
              </div>

              <div className="mb-4 flex">
                <div className="flex-1 mr-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Prénom*
                  </label>
                  <input
                    type="text"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Prénom"
                    name="firstName"
                    onChange={handleChange1}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom*
                  </label>
                  <input
                    type="text"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Nom"
                    name="lastName"
                    onChange={handleChange1}
                  />
                </div>
              </div>

              <div className="mb-4 flex">
                <div className="flex-1 mr-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Adresse courriel*
                  </label>
                  <input
                    type="email"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="exemple@exemple.com"
                    name="email"
                    onChange={handleChange1}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Numéro de téléphone*
                  </label>
                  <input
                    type="tel"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="(000) 000-0000"
                    name="phone"
                    onChange={handleChange1}
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn block w-full py-4 px-6  text-white font-bold text-xl rounded cursor-pointer"
                >
                  Prochaine page
                </button>
              </div>
            </form>
          )}

          {showSecondForm && (
            <form className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
              <p className="text-base font-semibold max-w-prose mx-auto text-black mb-4">
                Information sur la personne référée
              </p>
              <div className="mb-4 flex">
                <div className="flex-1 mr-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Prénom*
                  </label>
                  <input
                    type="text"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Prénom"
                    name="firstName"
                    onChange={handleChange2}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Nom*
                  </label>
                  <input
                    type="text"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Nom"
                    name="lastName"
                    onChange={handleChange2}
                  />
                </div>
              </div>
              <div className="mb-4 flex">
                <div className="flex-1 mr-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Adresse courriel*
                  </label>
                  <input
                    type="email"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="exemple@exemple.com"
                    name="email"
                    onChange={handleChange2}
                  />
                </div>
                <div className="flex-1 ml-2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Numéro de téléphone*
                  </label>
                  <input
                    type="tel"
                    className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="(000) 000-0000"
                    name="phone"
                    onChange={handleChange2}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Poste actuel de la personne référée?</label>
                <div className="flex flex-col">
                  {employeeStatusOptions.map((option) => (
                    <label className="block items-center" key={option}>
                      <input
                        type="radio"
                        name="employeeStatus"
                        className="form-radio h-4 w-4 text-blue-500"
                        value={option}
                        onChange={handleChange2}
                      />
                      <span className="ml-2 text-black">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  La personne référée est
                </label>
                <select
                  className="form-select block w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                  name="relationship"
                  onChange={handleChange2}
                >
                  <option value="">Veuillez sélectionner</option>
                  <option value="Collègue de travail">Collègue de travail</option>
                  <option value="Ami(e)">Ami(e)</option>
                  <option value="Inconnu(e)">Inconnu(e)</option>
                </select>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn block w-full py-4 px-6  text-white font-bold text-xl rounded cursor-pointer"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  className="btn block w-full py-4 px-6  text-white font-bold text-xl rounded cursor-pointer"
                >
                  Soumettre
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReferralProgram;
