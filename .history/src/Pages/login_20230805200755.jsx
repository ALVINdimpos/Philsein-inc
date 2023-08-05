import axios from 'axios'
import { useHistory } from 'react-router'; 
import '../assets/Style/login.css'
import logo from '../assets/Images/logo.svg'

const Login = () => {
  const history = useHistory(); // Create a history object

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    try {
      const response = await axios.post(
        'http://localhost:3000/users/login',
        formDataObject
      );
      console.log('API Response:', response.data);

      // Store the token in local storage
      localStorage.setItem('token', response.data.token);

      // Navigate to the dashboard page
      history.push('/dashboard');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here if any
      // kagabaetienne04@gmail.com
      //test123
    }
  };

  // ... (your other code)
}
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
  )
}

export default Login
