import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/Style/login.css';
import logo from '../assets/Images/logo.svg';
import Loading from '../Components/Loading/Index';
import { useState } from 'react';
import { ToastContainer,toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Updated initialization

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value
    })

    try {
      const response = await axios.post(
        'https://cautious-erin-pig.cyclic.app/users/login',
        formDataObject
      );
      console.log('API Response:', response.data);
      setIsLoading(false);
      toast.success('Connexion réussie');

      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000)
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false); // Handle errors here
      toast.error('Email ou mot de passe incorrect');
    }
  };

  return (
    <div className="main">
      <div className="Container" id="Container">
        <div className="form-Container log-in-Container">
          <form action="#" onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className="social-Container">
             <Link to="/">
              <img src={logo} alt="" />
              </Link>
            </div>
            <span>ou utilisez votre compte</span>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <a href="#">Mot de passe oublié?</a>
            <button type="submit" className="button">
              {isLoading ? <Loading size="5" color='black' /> : 'Connexion'}
            </button>
          </form>
        </div>
        <div className="overlay-Container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      <ToastContainer/>
      </div>

    </div>
  );
};

export default Login;
