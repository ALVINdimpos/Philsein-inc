import { useState } from 'react'
import logo from '../../assets/Images/logo.svg'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import './style.css'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isEmploisMenuOpen, setIsEmploisMenuOpen] = useState(false)
  const [isAProposMenuOpen, setIsAProposMenuOpen] = useState(false)

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleEmploisMenuClick = () => {
    setIsEmploisMenuOpen(!isEmploisMenuOpen)
  }

  const handleAProposMenuClick = () => {
    setIsAProposMenuOpen(!isAProposMenuOpen)
  }

  return (
    <header className="header">
      <nav className="bg-gradient-to-r from-cyan to-blue p-4 md:p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-12 mt-[-16px]" />
          </Link>
        </div>

        <button
          onClick={handleMobileMenuClick}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
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

        <div className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="md:flex md:items-center md:w-auto">
            <NavItem to="/jobs" title="Offres d'emplois courantes" />
            <NavItem to="/referral" title="Programme de référence" />

            <li className="relative inline-block bg-gradient-to-r from-cyan to-blue md:mx-4">
              <span onClick={handleEmploisMenuClick} className="cursor-pointer">
                Emplois et salaires
                <RiArrowDropDownLine className="inline-block ml-1" />
              </span>
              <ul
                className={`${
                  isEmploisMenuOpen ? 'block' : 'hidden'
                } md:absolute md:right-0 mt-2 bg-cyan-500 text-white p-2 rounded-md hover:text-white`}
              >
                <NavItem to="/jobs" title="Tous nos emplois disponibles" />
                <NavItem to="/job-nurse" title="Infirmière" />
                <NavItem
                  to="/job-nurse-auxiliary"
                  title="Infirmière auxiliaire"
                />
                <NavItem
                  to="/job-prepose-aux-beneficiaires"
                  title="Préposé(e) aux bénéficiaires"
                />
                <NavItem to="/job-physiotherapist" title="Physiothérapeute" />
                <NavItem to="/job-social-worker" title="Travailleur social" />
                <NavItem
                  to="/job-occupational-therapist"
                  title="Ergothérapeute"
                />
                <NavItem to="/job-inhalotherapist" title="Inhalothérapeute" />
                <NavItem
                  to="/job-respiratory-therapist"
                  title="Thérapeute respiratoire"
                />
              </ul>
            </li>

            <li className="relative inline-block bg-gradient-to-r from-cyan to-blue md:mx-4">
              <span onClick={handleAProposMenuClick} className="cursor-pointer">
                À propos
                <RiArrowDropDownLine className="inline-block ml-1" />
              </span>
              <ul
                className={`${
                  isAProposMenuOpen ? 'block' : 'hidden'
                } md:absolute md:right-0 mt-2 bg-cyan-500 text-white p-2 rounded-md`}
              >
                <NavItem to="/history" title="Histoire" />
                <NavItem to="/advantages" title="Avantages" />
                <NavItem to="/faq" title="FAQ" />
              </ul>
            </li>
            <NavItem to="/recruitment" title="Autre domaines" />
            <NavItem to="/application" title="Application rapide" />
            <NavItem to="/contact" title="Contact" />
          </ul>

          <div className="md:block mt-4 md:mt-0">
            <Link to="/login" className="custom-button">
              Connexion
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

const NavItem = ({ to, title, onClick }) => {
  return (
    <li className="text-white md:mx-4">
      <Link to={to} smooth="true" duration={500} onClick={onClick}>
        {title}
      </Link>
    </li>
  )
}

export default Navigation
