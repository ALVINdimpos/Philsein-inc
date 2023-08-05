import '../assets/Style/login.css';
import { FcGoogle, FcCamera } from 'react-icons/fc';
import logi

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("Form Data:", formDataObject);
  };

  return (
    <div className="main">
      <div className="Container" id="Container">
        <div className="form-Container log-in-Container">
          <form action="#" onSubmit={handleSubmit}>
            <h1>Connexion</h1>
            <div className="social-Container">
              <a href="#" className="social">
                <FcGoogle />
              </a>
              <a href="#" className="social">
                <FcCamera />
              </a>
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
