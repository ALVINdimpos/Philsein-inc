import Layout from './layout'
import  { useEffect, useState } from 'react';
import axios from 'axios';


export default function queries() {
    const [queries, setQueries] = useState([]);
    const conf={
        headers:{
            Authorization: `Bearer ${localStorage.getItem("token")}`
            }
    }

  useEffect(() => {
    // Fetch the data using axios GET request
    axios.get('http://localhost:3000/queries',conf)
      .then((response) => {
        // Handle the response data and update the state
        setQueries(response.data);
      })
      .catch((error) => {
        // Handle errors if any
        console.error('Error:', error);
      });
  }, []);
  console

  return (
    <Layout>
      <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">Messages</h1>
      </div>
      {/* STATISTICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Value</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">$13,500</h1>
                      <p className="text-xs bg-green-50 text-green-500 px-1 rounded">+4.5</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Users</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">819</h1>
                      <p className="text-xs bg-green-50 text-green-500 px-1 rounded">+7.4</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Orders</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">121</h1>
                      <p className="text-xs bg-red-50 text-red-500 px-1 rounded">-2.9</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Tickets</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">243</h1>
                      <p className="text-xs bg-green-50 text-green-500 px-1 rounded">+3.1</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
          </div>
      </div>
      {/* END OF STATISTICS */}
      <section>
        <div className="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
          <table className="min-w-max w-full table-auto">
              <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">First_name</th>
                      <th className="py-3 px-6 text-left">Last_name</th>
                      <th className="py-3 px-6 text-center">Email</th>
                      <th className="py-3 px-6 text-center">Message</th>
                      <th className="py-3 px-6 text-center">Date</th>
                      <th className="py-3 px-6 text-center">Action</th>
                  </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                          Reactjs
                      </td>
                      <td className="py-3 px-6 text-left">
                          <div className="flex items-center">
                              <div className="mr-2">
                                  <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                              </div>
                              <span>Eshal Rosas</span>
                          </div>
                      </td>
                      <td className="py-3 px-6 text-center">
                          22
                      </td>
                      <td className="py-3 px-6 text-center">
                          <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                      </td>
                      <td className="py-3 px-6 text-center">
                          <div className="flex item-center justify-center">
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                              </div>
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110  cursor-pointer">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                  </svg>
                              </div>
                              <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                              </div>
                          </div>
                      </td>
                  </tr>
              </tbody>
          </table>
        </div>
      </section>
    </Layout>
  )
}
