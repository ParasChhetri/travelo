import { NavLink } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <>
      <div className="register-main-container">
        <div className="register-form-container">
          <form>
            <div>
              <label>Username</label>
              <input type="text" placeholder="username" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" placeholder="email" />
            </div>
            <div>
              <label>Create password</label>
              <input type="text" placeholder="password" />
            </div>
            <div>
              <label>Confirm password</label>
              <input type="text" placeholder="password" />
            </div>
            <div className="register-btn-container">
              <button type="button" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <p>Already have a account <span><NavLink to={'/Login'}>Click here!</NavLink></span></p>
        </div>
      </div>
    </>
  );
};

export default Register;
