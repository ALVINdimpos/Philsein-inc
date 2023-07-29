
import { useState, useRef, useEffect } from 'react';
import logo from '../../assets/Images/logo.svg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const handleMenuToggle = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleMenuToggle);
    return () => {
      document.removeEventListener('click', handleMenuToggle);
    };
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar flex items-center justify-between flex-wrap bg-blue-500 p-6">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12" />
          </Link>
        </div>
        <div
          className={`navbar-menu ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block md:flex md:items-center md:w-auto`}
          ref={menuRef}
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
            <div className="navbar-dropdown relative inline-block">
              <span
                onClick={handleMenuClick}
                className="block mt-4 md:inline-block md:mt-0 text-white mr-4 cursor-pointer"
              >
                Emplois et salaires <RiArrowDropDownLine />
              </span>
              <ul className="dropdown-menu absolute hidden md:inline-block bg-blue-500 text-white mt-2 p-2 rounded">
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
                {/* Add more job links */}
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
                {/* Add more job links */}
                {/* Add other job links */}
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
              to="/referral"
              smooth={true}
              duration={500}
              onClick={handleMenuClick}
              className="block mt-4 md:inline-block md:mt-0 text-white mr-4"
            >
              Programme de référence
            </Link>
            <div className="navbar-dropdown relative inline-block">
              <span
                onClick={handleMenuClick}
                className="block mt-4 md:inline-block md:mt-0 text-white mr-4 cursor-pointer"
              >
                À propos <RiArrowDropDownLine />
              </span>
              <ul className="dropdown-menu absolute hidden md:inline-block bg-blue-500 text-white mt-2 p-2 rounded">
                <li>
                  <Link
                    to="/history"
                    smooth={true}
                    duration={500}
                    onClick={handleMenuClick}
                  >
                    Histoire
                  </Link>
                </li>
                {/* Add more links */}
                {/* Add other links */}
              </ul>
            </div>
            <Link
              to="/contact"
              smooth={true}
              duration={500}
              onClick={handleMenuClick}
              className="block mt-4 md:inline-block md:mt-0 text-white mr-4"
            >
              Contact
            </Link>
            <Link
              to="blog"
              smooth={true}
              duration={500}
              onClick={handleMenuClick}
              className="block mt-4 md:inline-block md:mt-0 text-white mr-4"
            >
              Blog
            </Link>
          </div>
          <div className="md:block">
            <Link
              to="/login"
              className="btn bg-white text-blue-500 py-2 px-4 rounded-full"
            >
              Connexion
            </Link>
          </div>
        </div>
        <div
          className="menu-icon md:hidden"
          onClick={handleMenuClick}
        >
          <span></span>
          <span></span>
          <span></span>
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
//                 to="/job-nurse-auxiliary"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Infirmière auxiliaire
//               </Link>
//               <Link
//                 to="/job-physiotherapist"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Physiothérapeute
//               </Link>
//               <Link
//                 to="/job-social-worker"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Travailleur social
//               </Link>
//               <Link
//                 to="/job-occupational-therapist"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Ergothérapeute
//               </Link>
//               <Link
//                 to="/job-inhalotherapist"
//                 smooth={true}
//                 duration={500}
//                 onClick={handleMenuClick}
//               >
//                 Inhalothérapeute
//               </Link>
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
//           <Link
//             to="/contact"
//             smooth={true}
//             duration={500}
//             onClick={handleMenuClick}
//           >
//             Contact
//           </Link>
//           <Link
//             to="blog"
//             smooth={true}
//             duration={500}
//             onClick={handleMenuClick}
//           >
//             Blog
//           </Link>
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
