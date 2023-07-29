import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-scroll'
import logo from '../../assets/Images/logo.svg'
import { RiArrowDropDownLine } from 'react-icons/ri'
import './style.css'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef()

  const handleMenuToggle = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleMenuToggle)
    return () => {
      document.removeEventListener('click', handleMenuToggle)
    }
  }, [])

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <header className="header">
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div
          className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}
          ref={menuRef}
        >
          <Link
            to="welcome"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Offres d'emplois courantes
          </Link>
          <div className="navbar-dropdown">
            <span onClick={handleMenuClick}>
              Emplois et salaires <RiArrowDropDownLine />
            </span>
            <ul className="dropdown-menu">
              <Link
                to="all-jobs"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Tous nos emplois disponibles
              </Link>
              {/* Add more job links */}
              <Link
                to="featured-jobs"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Infirmière
              </Link>
              {/* Add more job links */}
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Infirmière auxiliaire
              </Link>
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Physiothérapeute
              </Link>
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Travailleur social
              </Link>
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Ergothérapeute
              </Link>
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Inhalothérapeute
              </Link>
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Fonctionnement de l'agence
              </Link>
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Nos emplois en vedettes
              </Link>

              {/* Add wage link here */}
            </ul>
          </div>
          <Link
            to="quick-application"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Application rapide
          </Link>
          <Link
            to="referral-program"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Programme de référence
          </Link>
          <div className="navbar-dropdown">
            <span onClick={handleMenuClick}>
              À propos <RiArrowDropDownLine />
            </span>
            <ul className="dropdown-menu">
              <Link
                to="all-jobs"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Histoire
              </Link>
              {/* Add more job links */}
              <Link
                to="featured-jobs"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Avantages
              </Link>
              {/* Add more job links */}
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                Nos Valeurs
              </Link>
              <Link
                to="wage"
                smooth={true}
                duration={500}
                onClick={handleMenuClick}
              >
                FAQ
              </Link>
            </ul>
          </div>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Contact
          </Link>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            onClick={handleMenuClick}
          >
            Blog
          </Link>
        </div>
        <Link className="btn" to="/login">
          Connexion
        </Link>
        <div className="menu-icon" onClick={handleMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
