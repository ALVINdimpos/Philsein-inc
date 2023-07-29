import { useState } from 'react';
import logo from '../../assets/Images/logo.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import "./style.css"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="bg-blue-500 p-4 md:p-6 flex items-center justify-between">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleMenuClick}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.293 7.293L3.646 7.95 12 16.293l8.354-8.354-.647-.646L12 15.293 4.95 8.243l-.657.657zM12 2a1 1 0 0 0-1 1v17a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zM2 12a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zM3 18a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2H3z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:w-auto`}
        >
          <div className="text-sm md:flex-grow">
            <Link
              to="/"
              smooth={true}
              duration={500}
              onClick={handleMenuClick}
              className="block mt-4 md:inline-block md:mt-0 text-white mr-4"
            >
              Offres d'emplois courantes
            </Link>
            <div className="relative inline-block md:mt-0">
              <span
                onClick={handleMenuClick}
                className="block mt-4 md:inline-block md:mt-0 text-white mr-4 cursor-pointer"
              >
                Emplois et salaires <RiArrowDropDownLine />
              </span>
              <ul
                className={`${
                  isMenuOpen ? 'block' : 'hidden'
                } md:absolute md:right-0 md:mt-2 bg-blue-500 text-white p-2 rounded-md`}
              >
                <li>
                  <Link
                    to="/jobs"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuClick}
                  >
                    Tous nos emplois disponibles
                  </Link>
                </li>
                <li>
                <Link
                to="featured-jobs"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Emplois en vedette
              </Link>
                </li>
                <li>
              <Link
                to="featured-jobs"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Infirmière
              </Link>
                </li>
                <li>
                <Link
                to="/job-nurse-auxiliary"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Infirmière auxiliaire
              </Link>
                </li>
                <li>
                <Link
                to="/job-physiotherapist"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Physiothérapeute
              </Link>
                </li>
                <li>
                <Link
                to="/job-social-worker"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Travailleur social
              </Link>
                </li>
                <li>
                <Link
                to="/job-occupational-therapist"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Ergothérapeute
              </Link>
                </li>
                <li>
                <Link
                to="/job-inhalotherapist"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Inhalothérapeute
              </Link>
                </li>
                <li>
                <Link
                to="/job-inhalotherapist"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Inhalothérapeute
              </Link>
                </li>

              </ul>
            </div>
            <Link
              to="/application"
              smooth={true}
              duration={500}
              onClick={handleMenuClick}
              className="block mt-4 md:inline-block md:mt-0 text-white mr-4"
            >
              Application rapide
            </Link>
            <Link
            to="/contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
            {/* Add more links */}
          </div>
          <div className="md:block mt-4 md:mt-0">
            <Link
              to="/login"
              className="custom-button"
            >
              Connexion
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;


// import { useState, useRef, useEffect } from 'react'
// import logo from '../../assets/Images/logo.svg'
// import { RiArrowDropDownLine } from 'react-icons/ri'
// import { Link } from 'react-router-dom'

// const Navigation = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const menuRef = useRef()

//   const handleMenuToggle = (e) => {
//     if (!menuRef.current.contains(e.target)) {
//       setIsMenuOpen(false)
//     }
//   }

//   useEffect(() => {
//     document.addEventListener('click', handleMenuToggle)
//     return () => {
//       document.removeEventListener('click', handleMenuToggle)
//     }
//   }, [])

//   const handleMenuClick = () => {
//     setIsMenuOpen((prevState) => !prevState)
//   }

//   return (
//     <header className="header">
//       <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
//         <div className="navbar-logo">
//           <Link to="/">
//           <img src={logo} alt="Logo" />
//           </Link>
//         </div>
//         <div
//           className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}
//           ref={menuRef}
//         >
//           <Link
//             to="/"
//             smooth={true}
//             duration={500}
//             onClick={handleMenuClick}
//           >
//             Offres d'emplois courantes
//           </Link>
//           <div className="navbar-dropdown">
//             <span onClick={handleMenuClick}>
//               Emplois et salaires <RiArrowDropDownLine />
//             </span>
//             <ul className="dropdown-menu">
//               <Link
//                 to="/jobs"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Tous nos emplois disponibles
//               </Link>
//               {/* Add more job links */}
//               <Link
//                 to="featured-jobs"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Infirmière
//               </Link>
//               {/* Add more job links */}

//               <Link
//                 to="wage"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Fonctionnement de l'agence
//               </Link>
//               <Link
//                 to="wage"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Nos emplois en vedettes
//               </Link>

//               {/* Add wage link here */}
//             </ul>
//           </div>
//           <Link
//             to="/application"
//             smooth={true}
//             duration={500}
//             onClick={handleMenuClick}
//           >
//             Application rapide
//           </Link>
//           <Link
//             to="/referral"
//             smooth={true}
//             duration={500}
//             onClick={handleMenuClick}
//           >
//             Programme de référence
//           </Link>
//           <div className="navbar-dropdown">
//             <span onClick={handleMenuClick}>
//               À propos <RiArrowDropDownLine />
//             </span>
//             <ul className="dropdown-menu">
//               <Link
//                 to="/history"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Histoire
//               </Link>
//               {/* Add more job links */}
//               <Link
//                 to="/advantages"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Avantages
//               </Link>
//               {/* Add more job links */}
//               <Link
//                 to="/values"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Nos Valeurs
//               </Link>
//               <Link
//                 to="/faq"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 FAQ
//               </Link>
//             </ul>
//           </div>

//         </div>
//         <Link to="/login" className="btn" >
//           Connexion
//         </Link>
//         <div className="menu-icon" onClick={handleMenuClick}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navigation
