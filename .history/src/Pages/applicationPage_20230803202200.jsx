// ApplicationForm.js
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import Footer from '../Layouts/Footer/index'
import HEADER from '../Layouts/Header/index'
const ApplicationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    status: '',
    position: '',
    regions: [],
    schedule: [],
    hasCV: '',
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Prénom est requis'),
    lastName: Yup.string().required('Nom est requis'),
    phone: Yup.string().required('Numéro de téléphone est requis'),
    email: Yup.string()
      .email('Adresse Courriel invalide')
      .required('Adresse Courriel est requis'),
    address: Yup.string().required('Adresse est requise'),
    city: Yup.string().required('Ville est requise'),
    province: Yup.string().required('Province est requise'),
    postalCode: Yup.string().required('Code postal est requis'),
    status: Yup.string().required('Statut est requis'),
    position: Yup.string().required('Poste est requis'),
    regions: Yup.array()
      .min(3, 'Choisissez au minimum 3 régions')
      .required('Régions sont requises'),
    schedule: Yup.array()
      .min(1, 'Choisissez au moins un horaire')
      .required("Type d'horaire est requis"),
    hasCV: Yup.string().required('Veuillez sélectionner une option'),
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const handleSubmit = async (values) => {
      console.log("ffffff",values)
  }
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
  ]
  return (
    <>
      <HEADER />
      <div className="bg-gradient-to-b from-cyan-400 to-blue-700 min-h-screen flex flex-col items-center justify-center py-10">
        <div className="bg-white rounded-lg p-8 max-w-xl w-full">
          <h2 className="text-center text-3xl font-bold mb-4">
            Rejoignez l’équipe !
          </h2>
          <p className="text-center mb-8">
            Déposez rapidement votre candidature avec notre formulaire
            d'application rapide. Aucun téléversement requis!
          </p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div className="mb-4 flex">
                  <div className="flex-1 mr-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Prénom*
                    </label>
                    <Field
                      type="text"
                      name="firstName"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Prénom"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex-1 ml-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Nom*
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Nom"
                    />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div
                  className="
                    mb-4 flex
                    border rounded p-3
                    border-gray-300
                    shadow
                    focus:border-transparent
                    hover:bg-gray-100

                
                "
                >
                  <div className="flex-1 mr-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Adresse courriel*
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="
                            Exemple :
                            info@example.com "
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex-1 ml-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Numéro de téléphone*
                    </label>
                    <Field
                      type="tel"
                      name="phone"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="(000) 000-0000"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4 flex">
                  <div className="flex-1 mr-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Adresse*
                    </label>
                    <Field
                      type="text"
                      name="address"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Adresse"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex-1 ml-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Adresse 2
                    </label>
                    <Field
                      type="text"
                      name="address2"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Adresse 2"
                    />
                    <ErrorMessage
                      name="address2"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                {/* Ville, Province et Code Postal */}
                <div className="mb-4 flex">
                  <div className="flex-1 mr-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Ville*
                    </label>
                    <Field
                      type="text"
                      name="city"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Ville"
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex-1 ml-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Province*
                    </label>
                    <Field
                      type="text"
                      name="province"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Province"
                    />
                    <ErrorMessage
                      name="province"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="mb-4 flex">
                  <div className="flex-1 mr-2">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Code Postal*
                    </label>
                    <Field
                      type="text"
                      name="postalCode"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      placeholder="Code Postal"
                    />
                    <ErrorMessage
                      name="postalCode"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Avez-vous le statut de résident permanent OU citoyen
                    canadien OU un permis de travail au Canada ?
                  </label>
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      name="status"
                      value="true"
                      className="form-radio h-5 w-5 text-cyan-600"
                    />
                    <label className="ml-2 block text-gray-700">Oui</label>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      name="status"
                      value="false"
                      className="form-radio h-5 w-5 text-cyan-600"
                    />
                    <label className="ml-2 block text-gray-700">Non</label>
                  </div>
                  <ErrorMessage
                    name="status"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* select */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Pour quel poste appliquez-vous ?
                  </label>
                  <Field
                    as="select"
                    name="job"
                    className="form-select w-full h-10"
                  >
                    <option value="">Choisissez un poste</option>
                    {jobs.map((job) => (
                      <option key={job} value={job}>
                        {job}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="job"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quelle région vous intéresse ? Choisissez au minimum 3
                    régions.*
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {regions.map((region) => (
                      <div key={region} className="flex items-center">
                        <Field
                          type="checkbox"
                          name="regions"
                          value={region}
                          className="form-checkbox h-5 w-5 text-cyan-600"
                        />
                        <label className="ml-2 block text-gray-700">
                          {region}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <ErrorMessage
                      name="regions"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Quelle type d'horaire vous intéresse? Plusieurs choix
                    possibles
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {schedules.map((schedule) => (
                      <div key={schedule} className="flex items-center">
                        <Field
                          type="checkbox"
                          name="schedule"
                          value={schedule}
                          className="form-checkbox h-5 w-5 text-cyan-600"
                        />
                        <label className="ml-2 block text-gray-700">
                          {schedule}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center">
                    <ErrorMessage
                      name="schedule"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Avez-vous votre CV sur votre appareil actuel ?
                  </label>
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      name="cv"
                      value="true"
                      className="form-radio h-5 w-5 text-cyan-600"
                    />
                    <label className="ml-2 block text-gray-700">Oui</label>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="radio"
                      name="cv"
                      value="false"
                      className="form-radio h-5 w-5 text-cyan-600"
                    />
                    <label className="ml-2 block text-gray-700">Non</label>
                  </div>
                  <ErrorMessage
                    name="cv"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Génial! déposez-le ici ⬇️ *
                  </label>
                  <div className="flex items-center">
                    <Field
                      type="file"
                      name="file"
                      className="form-input w-full h-10 px-3 border rounded-lg focus:outline-none focus:border-blue-500"
                      onChange={(event) =>
                        setSelectedFile(event.currentTarget.files[0])
                      }
                    />
                    <ErrorMessage
                      name="file"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-submit w-full py-3 rounded-lg text-white font-bold bg-gradient-to-r from-cyan-400 to-blue-700 hover:opacity-90 transition-colors duration-300"
                  onClick={ handleSubmit}
                >
                  Soumettre
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ApplicationForm
