import Layout from './layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

export default function CustomClearanceServices() {
  const [customClearanceServices, setCustomClearanceServices] = useState([])
  useEffect(() => {
    // Fetch the data using axios GET request
    axios
      .get('https://kagaba.live/customClearanceService')
      .then((response) => {
        // Handle the response data and update the state
        setCustomClearanceServices(response.data?.customclearanceservices)
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error:', error)
      })
  }, [])

  const handleDelete = (id) => {
    axios
      .delete(`https://kagaba.live/customClearanceService/${id}`)
      .then((response) => {
        toast.success('Votre message a été envoyé avec succès')
        // reload window
        setTimeout(() => {
          window.location.reload()
        }, 3000)
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error:', error)
      })
  }

  return (
    <Layout>
      <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">
          CUSTOMS CLEARANCE SERVICES
        </h1>
      </div>
      {/* STATISTICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
        <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
          <div className="space-y-2">
            <p className="text-xs text-gray-400 uppercase">Total</p>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold">
                {customClearanceServices.length}
              </h1>
            </div>
          </div>
          <svg
            className="w-12 h-12 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
      </div>
      {/* END OF STATISTICS */}
      <section>
        <div className="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">customsAuthority</th>
                <th className="py-3 px-6 text-center">valueOfCargoInUSD</th>
                <th className="py-3 px-6 text-left">goodsDescription</th>
                <th className="py-3 px-6 text-center">name</th>
                <th className="py-3 px-6 text-center">Mobile</th>
                <th className="py-3 px-6 text-center">uploadPackingList</th>
                <th className="py-3 px-6 text-center">Email</th>
                <th className="py-3 px-6 text-center">Remarks</th>
                <th className="py-3 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {customClearanceServices.map((query) => (
                <tr
                  key={query.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {query.customsAuthority}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {query.valueOfCargoInUSD}
                  </td>
                  <td className="py-3 px-6 text-center">
                    {query.goodsDescription}
                  </td>
                  <td className="py-3 px-6 text-center">{query.name}</td>
                  <td className="py-3 px-6 text-center">{query.mobile}</td>
                  <td className="py-3 px-6 text-center">
                    {query.uploadPackingList}
                  </td>
                  <td className="py-3 px-6 text-center">{query.email}</td>
                  <td className="py-3 px-6 text-center">{query.remarks}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(query.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ToastContainer />
      </section>
    </Layout>
  )
}
