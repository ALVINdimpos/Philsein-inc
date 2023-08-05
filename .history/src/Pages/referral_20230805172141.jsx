import axios from 'axios';
import '../assets/Style/Referral.css';
import Footer from '../Layouts/Footer/index';
import HEADER from '../Layouts/Header/index';

const ReferralProgram = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await axios.post('http://localhost:3000/refer', formDataObject);
      console.log('API Response:', response.data);
      // You can handle the API response here
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here if any
    }
  };
  // Options for the radio buttons
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
          <h2 className="text-5xl font-bold text-center mb-12">
            Participez à notre programme de référence!
          </h2>
          <p className="text-lg mb-12 w-9/12 mx-auto">
            Tout le monde y gagne avec notre programme de référence! Voici
            comment cela fonctionne: si vous référez quelqu'un et que la
            personne complète 140h après son embauche, vous et cette personne
            recevrez chacun une prime de 250 $*.
          </p>
          <p className="text-lg mb-12 w-9/12  mx-auto">
            C'est un excellent moyen de partager les avantages de notre agence
            de placement avec vos amis et votre famille et d'être récompensé en
            retour. Alors n'attendez plus - commencez à référer dès aujourd’hui
            et commencez à gagner !
          </p>
          <p className="text-base font-semibold max-w-prose mx-auto">
            *plus de détails sur le programme dans votre dossier en ligne.
          </p>

          <form className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
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

                  />
                  <span className="ml-2 text-black">Oui</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="employeeStatus"
                    className="form-radio h-5 w-5 text-blue-500"
                    value="no"

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
          <form className="max-w-lg mx-auto mt-12 p-6 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
              Poste actuel de la personne référée?
              </label>
              <div className="mt-2 flex">
                

 
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="employeeStatus"
                    className="form-radio h-5 w-5 text-blue-500"
                    value="no"

                  />
                  <span className="ml-2 text-black">Auxiliaire en santé et services sociaux</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
              La personne référée est 
              </label>
              {/* select ,Please Select,Collègue de travail ,Ami(e),Inconnu(e)*/}
              <select
                className="form-select block w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                name="relationship"
              >
                <option value="">Veuillez sélectionner</option>
                <option value="Collègue de travail">Collègue de travail</option>
                <option value="Ami(e)">Ami(e)</option>
                <option value="Inconnu(e)">Inconnu(e)</option>
              </select>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReferralProgram;
