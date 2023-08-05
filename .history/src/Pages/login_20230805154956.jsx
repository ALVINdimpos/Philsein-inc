import axios from 'axios';
import '../assets/Style/login.css';
import logo from '../assets/Images/logo.svg';

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await axios.post('http://localhost:3000/login', formDataObject);
      console.log('API Response:', response.data);
      // You can handle the API response here
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here if any
      // kagabaetienne04@gmail.com
      
    }
  };
  return (
    <div className="main">
      <div className="Container" id="Container">
        <div className="form-Container log-in-Container">
          <form action="#" onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className="social-Container">
             <img src={logo} alt="" />
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
              Connexion
            </button>
          </form>
        </div>
        <div className="overlay-Container">
          <div className="overlay">
            <div className="overlay-panel overlay-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
