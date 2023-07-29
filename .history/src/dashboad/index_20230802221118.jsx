import logo from '../assets/Images/logo.svg'
const index = () => {
  return (
      <>
      <div>
          <div className="flex relative">
              {/* NAV */}
              <nav className="absolute md:relative w-64 transform -translate-x-full md:translate-x-0 h-screen overflow-y-scroll bg-black transition-all duration-300">
              <div className="flex flex-col justify-between h-full">
                  <div className="p-4">
                      {/* LOGO */}
                      <a className="flex items-center text-white space-x-4" >
                          <img src={logo} className="w-32 h-19 rounded-lg p-1"/>
                      </a>
                      {/* SEARCH BAR */}
                      <div className="border-gray-700 py-5 text-white border-b rounded">
                          <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                              </div>
                              <form  method="GET">
                                  <input type="search" className="w-full py-2 rounded pl-10 bg-gray-800 border-none focus:outline-none focus:ring-0" placeholder="Search" />
                              </form>
                          </div>
                          {/* SEARCH RESULT */}
                      </div>
                      {/* NAV LINKS */}
                      <div className="py-4 text-gray-400 space-y-1">
                          {/* BASIC LINK */}
                          <a href="#" className="block py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                              <span>Dashboard</span>
                          </a>
                          {/* DROPDOWN LINK */}
                          <div className="block" x-data="{open: false}">
                              <div className="flex items-center justify-between hover:bg-gray-800 hover:text-white cursor-pointer py-2.5 px-4 rounded">
                                  <div className="flex items-center space-x-2">
                                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                      <span>Content</span>
                                  </div>
                                  <svg x-show="open" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                                  <svg x-show="!open" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                              </div>
                              <div x-show="open" className="text-sm border-l-2 border-gray-800 mx-6 my-2.5 px-2.5 flex flex-col gap-y-1">
                                  <a href="#" className="block py-2 px-4 hover:bg-gray-800 hover:text-white rounded">
                                      Categories
                                  </a>
                                  <a href="#" className="block py-2 px-4 hover:bg-gray-800 hover:text-white rounded">
                                      Courses
                                  </a>
                                  <a href="#" className="block py-2 px-4 hover:bg-gray-800 hover:text-white rounded">
                                      Instruction
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* PROFILE */}
                  <div className="text-gray-200 border-gray-800 rounded flex items-center justify-between p-2">
                      <div className="flex items-center space-x-2">
                          {/* AVATAR IMAGE BY FIRST LETTER OF NAME */}
                          <img src="https://ui-avatars.com/api/?name=Habib+Mhamadi&size=128&background=ff4433&color=fff" className="w-7 w-7 rounded-full" alt="Profile" />
                          <h1>Habib Mhamadi</h1>
                      </div>
                      <a href="#" className="hover:bg-gray-800 hover:text-white p-2 rounded">
                          <form id="logoutForm" method="POST" />
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                      </a>
                  </div>
              </div>
          </nav>
          {/* END OF NAV */}
          {/* PAGE CONTENT */}
          <main className="flex-1 h-screen overflow-y-scroll overflow-x-hidden">
              <div className="md:hidden justify-between items-center bg-black text-white flex">
                  <h1 className="text-2xl font-bold px-4">Better Code</h1>
                  <button className="btn p-4 focus:outline-none hover:bg-gray-800">
                  <svg className="w-6 h-6 fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
         </div><section className="max-w-7xl mx-auto py-4 px-5">
              <div className="flex justify-between items-center border-b border-gray-300">
                  <h1 className="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
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
              {/* TABLE */}
              <div className="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                  <table className="min-w-max w-full table-auto">
                      <thead>
                          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                              <th className="py-3 px-6 text-left">Project</th>
                              <th className="py-3 px-6 text-left">Client</th>
                              <th className="py-3 px-6 text-center">Users</th>
                              <th className="py-3 px-6 text-center">Status</th>
                              <th className="py-3 px-6 text-center">Actions</th>
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
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                      </div>
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                          </svg>
                                      </div>
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                          </svg>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left">
                                  Vuejs
                              </td>
                              <td className="py-3 px-6 text-left">
                                  <div className="flex items-center">
                                      <div className="mr-2">
                                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/2.jpg" />
                                      </div>
                                      <span>Anita Rodriquez</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  665
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <div className="flex item-center justify-center">
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                      </div>
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
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
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left">
                                  Angular
                              </td>
                              <td className="py-3 px-6 text-left">
                                  <div className="flex items-center">
                                      <div className="mr-2">
                                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/3.jpg" />
                                      </div>
                                      <span>Taylan Bush</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  787
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <div className="flex item-center justify-center">
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                      </div>
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
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
                          <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left">
                                  Laravel
                              </td>
                              <td className="py-3 px-6 text-left">
                                  <div className="flex items-center">
                                      <div className="mr-2">
                                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/4.jpg" />
                                      </div>
                                      <span>Tarik Novak</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  873
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <div className="flex item-center justify-center">
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                      </div>
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
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
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left">
                                  GIT Project
                              </td>
                              <td className="py-3 px-6 text-left">
                                  <div className="flex items-center">
                                      <div className="mr-2">
                                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/5.jpg" />
                                      </div>
                                      <span>Oscar Howard</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  1294
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
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
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
                          <tr className="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left">
                                  JavaScript
                              </td>
                              <td className="py-3 px-6 text-left">
                                  <div className="flex items-center">
                                      <div className="mr-2">
                                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/6.jpg" />
                                      </div>
                                      <span>Melisa Moon</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  3763
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <div className="flex item-center justify-center">
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                      </div>
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
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
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                              <td className="py-3 px-6 text-left">
                                  Python3
                              </td>
                              <td className="py-3 px-6 text-left">
                                  <div className="flex items-center">
                                      <div className="mr-2">
                                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/women/7.jpg" />
                                      </div>
                                      <span>Cora Key</span>
                                  </div>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  509
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                              </td>
                              <td className="py-3 px-6 text-center">
                                  <div className="flex item-center justify-center">
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                          </svg>
                                      </div>
                                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
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
              {/* END OF TABLE */}
          </section>
      {/* END OF PAGE CONTENT */}
    </main>
  </div>
</div>
</>
    )
}


export default index