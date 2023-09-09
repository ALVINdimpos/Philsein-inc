import logo from '../assets/Images/logo.svg'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaServicestack } from 'react-icons/fa';

const layout = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const menuClass = isOpen ? 'block' : 'hidden';

    return (
        <>
            <div>
                <div className="flex relative">
                    {/* NAV */}
                    <nav className="absolute md:relative w-64 transform -translate-x-full md:translate-x-0 h-screen overflow-y-scroll bg-black transition-all duration-300">
                        <div className="flex flex-col justify-between h-full">
                            <div className="p-4">
                                {/* LOGO */}
                                <Link className="flex items-center text-white space-x-4 mb-10" >
                                    <img src={logo} className="w-32 h-19 rounded-lg p-1" />
                                </Link>
                                {/* NAV LINKS */}
                                <div className="py-4 text-gray-400 space-y-1">
                                    {/* BASIC LINK */}
                                    <Link to="/dashboard" className="py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                        <span>Dashboard</span>
                                    </Link>
                                    <Link to="/dashboard/apps" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-application"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19,20H3V19H2V3H3V2H19V3H20V19H19ZM18,6V4H4V6ZM18,18V8H4V18Z"></path></g></svg>
                                        <span>Applications</span>
                                    </Link>
                                    <Link to="/dashboard/referrals" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" fill=" currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke="currentColor" strokeWidth={2}></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5,22a4,4,0,0,0,3.858-3h6.284a4.043,4.043,0,1,0,2.789-4.837L14.816,8.836a4,4,0,1,0-5.63,0L6.078,14.166A3.961,3.961,0,0,0,5,14a4,4,0,0,0,0,8Zm14-6a2,2,0,1,1-2,2A2,2,0,0,1,19,16ZM12,4a2,2,0,1,1-2,2A2,2,0,0,1,12,4ZM10.922,9.834A3.961,3.961,0,0,0,12,10a3.909,3.909,0,0,0,1.082-.168l3.112,5.323A4,4,0,0,0,15.142,17H8.858a3.994,3.994,0,0,0-1.044-1.838ZM5,16a2,2,0,1,1-2,2A2,2,0,0,1,5,16Z"></path></g></svg>
                                        <span>Referrals</span>
                                    </Link>
                                    <Link to="/dashboard/staff-apps" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 44.75 44.75" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="_x32__137_"> <g> <path d="M33.285,19.991c-0.003-0.039-0.004-0.078-0.008-0.116c-0.033-1.48-0.291-2.676-1.455-3.169 c-1.23-0.521-2.314-0.528-3.109-0.219c-0.052,0.021-0.188,0.2-0.24,0.233c-0.053,0.033-0.332-0.06-0.437-0.035 c-1.745,0.249-2.321,1.893-2.194,3.175c0.417,0.728,0.549,1.646,0.588,2.595c0.65,1.134,1.766,2.005,3.098,2.005 c1.779,0,3.188-1.502,3.627-3.137c0.168-0.019,0.307-0.146,0.32-0.32l0.055-0.646C33.544,20.188,33.438,20.043,33.285,19.991z M29.525,23.96c-1.836,0-3.209-1.945-3.209-3.686c0-0.082,0.007-0.162,0.013-0.242c0.765-0.28,2.235-0.865,2.396-1.173 c0.668,0.694,3.028,1.084,4.065,1.215c0.005,0.066,0.011,0.133,0.011,0.2C32.799,21.979,31.369,23.96,29.525,23.96z"></path> <path d="M9.641,20.342l0.055,0.646c0.016,0.182,0.166,0.313,0.344,0.323c0.429,1.639,1.814,3.148,3.569,3.148 c1.377,0,2.525-0.902,3.181-2.065c-0.014-0.813,0.2-1.648,0.664-2.339c-0.029-0.021-0.05-0.052-0.085-0.064 c-0.003-0.039-0.004-0.078-0.008-0.116c-0.033-1.48-0.291-2.676-1.455-3.169c-1.23-0.521-2.314-0.528-3.109-0.219 c-0.052,0.021-0.187,0.2-0.24,0.233c-0.053,0.033-0.332-0.06-0.437-0.035c-1.745,0.249-2.321,1.894-2.194,3.176 c-0.004,0.036-0.006,0.072-0.009,0.108C9.746,20.01,9.625,20.165,9.641,20.342z M10.411,20.033 c0.765-0.28,2.235-0.865,2.395-1.173c0.668,0.694,3.029,1.084,4.066,1.215c0.005,0.066,0.011,0.133,0.011,0.2 c0,1.704-1.43,3.686-3.273,3.686c-1.837,0-3.209-1.945-3.209-3.686C10.399,20.192,10.405,20.112,10.411,20.033z"></path> <path d="M19.021,8.686c0.261,0.997,1.103,1.915,2.171,1.915c1.083,0,1.938-0.914,2.207-1.908 c0.103-0.012,0.187-0.089,0.195-0.195l0.033-0.393c0.01-0.103-0.057-0.191-0.148-0.223c-0.002-0.023-0.002-0.047-0.004-0.07 c-0.021-0.9-0.178-1.627-0.886-1.928c-0.749-0.317-1.408-0.322-1.892-0.133c-0.032,0.013-0.114,0.122-0.146,0.142 c-0.032,0.02-0.202-0.036-0.266-0.021c-1.061,0.151-1.411,1.151-1.334,1.932c-0.003,0.021-0.004,0.044-0.006,0.066 c-0.103,0.025-0.176,0.119-0.167,0.227l0.034,0.393C18.821,8.601,18.913,8.681,19.021,8.686z M19.247,7.908 c0.465-0.17,1.359-0.526,1.457-0.714c0.406,0.422,1.842,0.66,2.473,0.739c0.003,0.041,0.007,0.081,0.007,0.122 c0,1.036-0.871,2.241-1.992,2.241c-1.118,0-1.952-1.183-1.952-2.241C19.24,8.005,19.243,7.957,19.247,7.908z"></path> <path d="M14.169,8.614c-1.474,0.21-1.96,1.599-1.853,2.683c-0.003,0.03-0.005,0.061-0.008,0.091 c-0.143,0.035-0.245,0.165-0.231,0.315l0.047,0.546c0.013,0.154,0.14,0.265,0.29,0.272c0.363,1.384,1.532,2.659,3.015,2.659 c1.503,0,2.692-1.269,3.064-2.649c0.141-0.016,0.258-0.124,0.271-0.271l0.046-0.545c0.012-0.143-0.078-0.265-0.206-0.31 c-0.003-0.032-0.003-0.065-0.007-0.098c-0.028-1.25-0.246-2.26-1.229-2.677c-1.039-0.44-1.955-0.446-2.626-0.185 c-0.044,0.018-0.158,0.169-0.203,0.197C14.494,8.67,14.259,8.592,14.169,8.614z M14.75,10.451 c0.564,0.586,2.558,0.916,3.434,1.026c0.004,0.056,0.009,0.112,0.009,0.169c0,1.439-1.208,3.112-2.765,3.112 c-1.552,0-2.71-1.643-2.71-3.112c0-0.069,0.005-0.137,0.01-0.204C13.374,11.206,14.615,10.71,14.75,10.451z"></path> <path d="M23.964,12.521c0.363,1.384,1.532,2.659,3.015,2.659c1.504,0,2.692-1.269,3.064-2.649 c0.098-0.011,0.168-0.075,0.216-0.156l0.074-0.008c0.017-0.002,0.047-0.013,0.05-0.043l0.047-0.544 c0.002-0.037-0.035-0.051-0.039-0.052l-0.031-0.011c0.012-0.143-0.078-0.265-0.207-0.31c-0.002-0.032-0.002-0.065-0.006-0.098 c-0.028-1.25-0.246-2.26-1.229-2.677c-1.039-0.44-1.955-0.446-2.626-0.185c-0.044,0.018-0.158,0.169-0.203,0.197 c-0.044,0.027-0.279-0.05-0.369-0.029c-1.474,0.21-1.96,1.599-1.853,2.683c-0.003,0.03-0.005,0.061-0.009,0.091 c-0.143,0.035-0.244,0.165-0.23,0.315l0.047,0.546C23.688,12.402,23.814,12.515,23.964,12.521z M24.277,11.441 c0.646-0.236,1.888-0.731,2.022-0.991c0.563,0.586,2.558,0.916,3.435,1.026c0.004,0.056,0.009,0.112,0.009,0.169 c0,1.439-1.208,3.112-2.765,3.112c-1.553,0-2.711-1.643-2.711-3.112C24.27,11.577,24.273,11.508,24.277,11.441z"></path> <path d="M18.695,12.731c-0.173,0.561-0.49,1.111-0.907,1.572l3.395,0.002v-0.006l3.467-0.002 c-0.407-0.459-0.717-1.008-0.887-1.567c-0.187-0.076-0.32-0.249-0.338-0.459l-0.047-0.546c-0.018-0.201,0.076-0.388,0.236-0.498 c-0.018-0.192-0.01-0.39,0.011-0.588c-0.202-0.208-0.438-0.355-0.723-0.396c-0.056-0.009-0.111,0.004-0.147,0.019l-0.894,1.209 l-0.679-0.541l-0.004,0.003v0.003l-0.001-0.001L20.5,11.477l-0.894-1.209c-0.036-0.014-0.091-0.027-0.146-0.018 c-0.256,0.036-0.471,0.161-0.66,0.335c0.024,0.223,0.04,0.448,0.046,0.671c0.146,0.112,0.229,0.292,0.213,0.481l-0.046,0.544 C18.995,12.483,18.872,12.65,18.695,12.731z"></path> <path d="M33.085,21.764c-0.262,0.669-0.694,1.294-1.246,1.756C32.398,23.052,32.83,22.424,33.085,21.764z"></path> <path d="M12.402,16.458c0.019,0.003,0.037,0.007,0.054,0.01c0.007-0.008,0.014-0.016,0.022-0.025 c0.089-0.098,0.147-0.159,0.226-0.19c0.45-0.175,0.959-0.242,1.5-0.212l-0.978-1.323c-0.05-0.02-0.126-0.037-0.203-0.025 c-0.917,0.129-1.495,1.018-1.862,2.051c0.271-0.142,0.569-0.257,0.922-0.308l0.081-0.007 C12.23,16.431,12.319,16.444,12.402,16.458z"></path> <path d="M16.695,23.382l0.068,0.795c0.019,0.225,0.204,0.388,0.423,0.398c0.528,2.016,2.232,3.875,4.392,3.875 c2.191,0,3.923-1.85,4.464-3.861c0.206-0.023,0.376-0.18,0.396-0.395l0.067-0.794c0.019-0.207-0.112-0.386-0.301-0.45 c-0.004-0.047-0.005-0.096-0.011-0.143c-0.039-1.821-0.356-3.293-1.791-3.9c-1.513-0.641-2.847-0.65-3.825-0.27 c-0.064,0.025-0.23,0.246-0.295,0.287c-0.065,0.04-0.408-0.073-0.538-0.042c-2.147,0.306-2.856,2.33-2.7,3.908 c-0.004,0.044-0.008,0.088-0.011,0.133C16.824,22.974,16.675,23.163,16.695,23.382z M17.643,23.001 c0.94-0.344,2.75-1.064,2.946-1.443c0.823,0.854,3.728,1.334,5.003,1.494c0.006,0.082,0.014,0.164,0.014,0.246 c0,2.098-1.76,4.535-4.028,4.535c-2.261,0-3.949-2.394-3.949-4.535C17.628,23.198,17.636,23.1,17.643,23.001z"></path> <path d="M16.359,16.39l-0.942-0.751l-0.006,0.005v0.005l-0.001-0.001l-0.604,0.481c0.392,0.073,0.791,0.176,1.196,0.348 c1.344,0.569,1.57,1.998,1.605,3.335c0.476-0.594,1.158-1.043,2.1-1.178l0.091-0.008c0.079,0,0.185,0.017,0.284,0.035 c0.018,0.003,0.034,0.006,0.051,0.009c-0.245-1.585-0.849-3.776-2.331-3.985c-0.078-0.012-0.154,0.005-0.204,0.026L16.359,16.39z "></path> <path d="M29.354,14.685c-0.078-0.012-0.153,0.005-0.203,0.026l-1.241,1.68l-0.942-0.751l-0.006,0.005v0.005l-0.001-0.001 l-0.942,0.751l-1.242-1.68c-0.049-0.02-0.125-0.037-0.202-0.025c-1.321,0.186-1.946,1.949-2.239,3.453 c0.691,0.042,1.425,0.217,2.166,0.53c0.463,0.196,0.812,0.474,1.083,0.808c-0.009-1.34,0.704-2.802,2.417-3.047l0.081-0.007 c0.065,0,0.155,0.014,0.239,0.029c0.019,0.003,0.037,0.007,0.054,0.01c0.007-0.008,0.015-0.016,0.022-0.025 c0.088-0.098,0.146-0.159,0.226-0.19c0.683-0.266,1.503-0.29,2.364-0.083C30.619,15.395,30.098,14.79,29.354,14.685z"></path> <path d="M21.559,35.933l7.115-0.006c0,0-0.217-7.719-3.635-8.2c-0.113-0.019-0.225,0.008-0.296,0.037l-1.809,2.446l-1.373-1.094 l-0.008,0.006v0.008l-0.002-0.002l-1.373,1.095l-1.809-2.448c-0.072-0.029-0.183-0.054-0.296-0.037 c-3.418,0.48-3.635,8.201-3.635,8.201l7.12,0.004L21.559,35.933L21.559,35.933z"></path> <path d="M29.51,30.542l5.782-0.004c0,0-0.176-6.273-2.954-6.666c-0.092-0.014-0.182,0.006-0.24,0.03l-1.471,1.989l-1.115-0.891 l-0.007,0.006v0.007l-0.001-0.002l-1.115,0.89l-1.47-1.988c-0.05-0.021-0.128-0.029-0.205-0.025l-0.028,0.328 c-0.021,0.268-0.195,0.488-0.441,0.58c-0.352,1.178-1.133,2.338-2.197,3.086c-0.037,0.183-0.068,0.361-0.098,0.535l0.635-0.858 l0.064-0.026c0.072-0.029,0.244-0.082,0.429-0.053c1.424,0.201,2.317,1.527,2.883,3.07l1.55,0.002V30.542z"></path> <path d="M7.807,30.548l5.786,0.002v-0.01h1.567c0.567-1.535,1.459-2.851,2.878-3.049c0.168-0.025,0.352,0.022,0.423,0.051 l0.066,0.026l0.622,0.841c-0.033-0.201-0.07-0.406-0.114-0.617c-0.989-0.75-1.717-1.865-2.05-3.002 c-0.26-0.084-0.448-0.312-0.472-0.592l-0.026-0.308c-0.023-0.004-0.042-0.015-0.066-0.019c-0.092-0.015-0.182,0.006-0.241,0.029 l-1.47,1.989l-1.115-0.89l-0.007,0.006v0.006l-0.001-0.002l-1.115,0.89l-1.47-1.989c-0.059-0.022-0.149-0.043-0.241-0.029 C7.983,24.273,7.807,30.548,7.807,30.548z"></path> <path d="M37.445,4.883l2.582-3.898l-9.471,1.197l2.92,8.694l2.287-3.452c3.682,3.526,5.986,8.475,5.986,13.964 c0,10.685-8.691,19.375-19.375,19.375C11.691,40.764,3,32.073,3,21.389C3,13.463,7.787,6.645,14.617,3.646L12.36,1.39 C5.039,5.072,0,12.65,0,21.39c0,12.337,10.038,22.375,22.375,22.375S44.75,33.727,44.75,21.39 C44.75,14.855,41.927,8.978,37.445,4.883z"></path> </g> </g> </g> </g></svg>
                                        <span>Staff Applications</span>
                                    </Link>
                                    <Link to="/dashboard/queries" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="cls-1" d="M41.47,7.28H6.53a2,2,0,0,0-2,1.88V31.41a2,2,0,0,0,2,1.88H9.14v7.43l8.26-7.43H41.47a2,2,0,0,0,2-1.88V9.16A2,2,0,0,0,41.47,7.28ZM14.25,17A3.25,3.25,0,1,1,11,20.29,3.24,3.24,0,0,1,14.25,17ZM24,23.54a3.25,3.25,0,1,1,3.25-3.25A3.26,3.26,0,0,1,24,23.54Zm9.75,0A3.25,3.25,0,1,1,37,20.29,3.26,3.26,0,0,1,33.75,23.54Z"></path></g></svg>
                                        <span>Queries</span>
                                    </Link>
                                    <Link to="/dashboard/blogs" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg fill="currentColor" className="w-6 h-6" version="1.1" id="XMLID_225_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="blog"> <g> <path d="M5,23c-2.2,0-4-1.8-4-4v-8h2v4.5C3.6,15.2,4.3,15,5,15c2.2,0,4,1.8,4,4S7.2,23,5,23z M5,17c-1.1,0-2,0.9-2,2s0.9,2,2,2 s2-0.9,2-2S6.1,17,5,17z M24,19h-2C22,9.6,14.4,2,5,2V0C15.5,0,24,8.5,24,19z M19,19h-2c0-6.6-5.4-12-12-12V5 C12.7,5,19,11.3,19,19z M14,19h-2c0-3.9-3.1-7-7-7v-2C10,10,14,14,14,19z"></path> </g> </g> </g></svg>
                                        <span>Blogs</span>
                                    </Link>
                                    <Link to="" className="py-2.5 px-4 flex items-center space-x-2 text-white hover:text-white rounded">
                                        <svg
                                            fill="currentColor"
                                            className="w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-6.5c-.28 0-.5.22-.5.5V16a.5.5 0 0 0 1 0v-1.5c0-.28-.22-.5-.5-.5zm-4.65-3.85l.79-.79a.5.5 0 0 0 0-.71L9.29 6.21a.5.5 0 0 0-.71 0L7.79 7l2.79 2.79c.19.2.51.2.71 0zm8.85 0a.5.5 0 0 0 0-.71l-.79-.79-.79.79a.5.5 0 0 0 0 .71L16.21 12l-.79.79a.5.5 0 0 0 0 .71l.79.79.79-.79a.5.5 0 0 0 0-.71l-.79-.79zm-4.2-3.65l-2.79-2.79a.5.5 0 0 0-.71 0L7.21 9l-.79-.79a.5.5 0 0 0-.71 0L4.21 9l-.79.79a.5.5 0 0 0 0 .71l2.79 2.79.79-.79a.5.5 0 0 0 0-.71l-.79-.79 2.79-2.79a.5.5 0 0 0 0-.71z"
                                            ></path>
                                        </svg>
                                        <span>Philsein Cargo</span>
                                    </Link>
                                    <div className="relative inline-block">
                                        <button
                                            onClick={toggleDropdown}
                                            className=" py-2.5 px-3.5 flex items-center  space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded"
                                        >
                                            <FaServicestack/>
                                            <span>Specialized Services</span>
                                            <svg
                                                className={`w-4 h-4 arrow-down ${isOpen ? 'transform rotate-180' : ''}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 15l5-5H5l5 5z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                        <div
                                            className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${menuClass}`}
                                        >
                                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                                                {/* <Link to="/dashboard/transport/project-forwarding" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem"> Project Forwarding</Link> */}
                                                <Link to="/dashboard/transport/custom-clearance-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Custom Clearance Services</Link>
                                                <Link to="/dashboard/transport/cargo-packaging-and-lashing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Cargo Packaging and Lashing</Link>
                                                <Link to="/dashboard/transport/cargo-escort-services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100" role="menuitem">Cargo Escort Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <Link to="/dashboard/transport/queries" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="cls-1" d="M41.47,7.28H6.53a2,2,0,0,0-2,1.88V31.41a2,2,0,0,0,2,1.88H9.14v7.43l8.26-7.43H41.47a2,2,0,0,0,2-1.88V9.16A2,2,0,0,0,41.47,7.28ZM14.25,17A3.25,3.25,0,1,1,11,20.29,3.24,3.24,0,0,1,14.25,17ZM24,23.54a3.25,3.25,0,1,1,3.25-3.25A3.26,3.26,0,0,1,24,23.54Zm9.75,0A3.25,3.25,0,1,1,37,20.29,3.26,3.26,0,0,1,33.75,23.54Z"></path></g></svg>
                                        <span>Queries</span>
                                    </Link>
                                    <Link to="/dashboard/transport/requested-quote" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="cls-1" d="M41.47,7.28H6.53a2,2,0,0,0-2,1.88V31.41a2,2,0,0,0,2,1.88H9.14v7.43l8.26-7.43H41.47a2,2,0,0,0,2-1.88V9.16A2,2,0,0,0,41.47,7.28ZM14.25,17A3.25,3.25,0,1,1,11,20.29,3.24,3.24,0,0,1,14.25,17ZM24,23.54a3.25,3.25,0,1,1,3.25-3.25A3.26,3.26,0,0,1,24,23.54Zm9.75,0A3.25,3.25,0,1,1,37,20.29,3.26,3.26,0,0,1,33.75,23.54Z"></path></g></svg>
                                        <span>Requested Quotes</span>
                                    </Link>
                                    <Link to="/dashboard/transport/requested-quick-quote" className=" py-2.5 px-4 flex items-center space-x-2 bg-gray-800 text-white hover:bg-gray-800 hover:text-white rounded">
                                        <svg className="w-6 h-6" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path className="cls-1" d="M41.47,7.28H6.53a2,2,0,0,0-2,1.88V31.41a2,2,0,0,0,2,1.88H9.14v7.43l8.26-7.43H41.47a2,2,0,0,0,2-1.88V9.16A2,2,0,0,0,41.47,7.28ZM14.25,17A3.25,3.25,0,1,1,11,20.29,3.24,3.24,0,0,1,14.25,17ZM24,23.54a3.25,3.25,0,1,1,3.25-3.25A3.26,3.26,0,0,1,24,23.54Zm9.75,0A3.25,3.25,0,1,1,37,20.29,3.26,3.26,0,0,1,33.75,23.54Z"></path></g></svg>
                                        <span>Requested Quick Quotes</span>
                                    </Link>
                                </div>
                            </div>
                            {/* PROFILE */}
                            <div className="text-gray-200 border-gray-800 rounded flex items-center justify-between p-2">
                                <div className="flex items-center space-x-4">
                                    <h1>ADMIN</h1>
                                </div>
                                <Link to="/" className="hover:bg-gray-800 hover:text-white p-2 rounded">
                                    <form id="logoutForm" method="POST" />
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                                </Link>
                            </div>
                        </div>
                    </nav>
                    {/* END OF NAV */}
                    {/* PAGE CONTENT */}
                    <main className="flex-1 h-screen overflow-y-scroll overflow-x-hidden">
                        <div className="md:hidden justify-between items-center bg-black text-white flex">
                            <h1 className="text-2xl font-bold px-4">Philsein inc</h1>
                            <button className="btn p-4 focus:outline-none hover:bg-gray-800">
                                <img src={logo} className="w-32 h-19 rounded-lg p-1" />
                            </button>
                        </div>
                        <section className="max-w-7xl mx-auto py-4 px-5 mb-14">
                            <ToastContainer />
                            {props.children}
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}


export default layout