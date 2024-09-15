import './Footer.css';
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Footer = () => {
    
    return (
        <>
            <footer>
                <div className='footer-inner-container-main'>
                    <div className='footer-site-content'>
                        <h2>Travelo</h2>
                        <p>
                            Discover Your Next Adventure with Us!
                            Explore the world’s most breathtaking destinations with ease. Whether you're seeking a tranquil beach retreat, an exhilarating mountain hike, or a cultural city escape, we've got you covered. Our curated itineraries and personalized travel experiences ensure that every trip is memorable and tailored just for you. Pack your bags and let your journey begin with us—your gateway to unforgettable moments!
                        </p>
                        <p>Example Street, Example Country</p>
                        <p>+1234768</p>
                        <p>example@example.com</p>
                    </div>
                    <div className='footer-additional-links-container'>
                        <h2>Pages</h2>
                        <ul>
                            <li>
                                <NavLink to={'/'} className='nav-link'>Home</NavLink>
                            </li>
                            <li>
                            <NavLink className="nav-link" to={'/Blog'}>
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                            <NavLink className="nav-link" to={'/About'}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='nav-link' to={'/Register'}>Register</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-subscribe-container'>
                        <h2>Stay updated</h2>
                        <form className='form-container'>
                            <div className='input-container'>
                                <input type="text" placeholder='Email'/>
                            </div>
                            <input type="button" value={'SUBSCRIBE'} onClick={() => alert("congratulation")} className='btn btn-primary'/>
                        </form>
                    </div>
                </div>
                <div className='social-media-icons'>
                    <FaMeta />
                    <FaXTwitter />
                    <FaInstagramSquare />
                    <FaReddit />
                </div>
                <div className='horizontal-line'></div>
                <div className='copyright-container'>
                    <p>© <span className='fw-bold'>Travelo</span> All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
