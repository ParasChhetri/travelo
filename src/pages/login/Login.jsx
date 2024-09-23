import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className="login-main-container">
                <div className='login-form-container'>
                    <form>
                        <div>
                            <label>Username</label>
                            <input type="text" placeholder='username'/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="text" placeholder='password'/>
                        </div>
                        <div className='login-btn-container'>
                            <button type='button' className='btn btn-primary'>Login</button>
                        </div>
                    </form>
                    <p>Don't have account <span><NavLink to={'/Register'}>click here!</NavLink></span></p>
                </div>
            </div>
        </>
    );
}

export default Login;
