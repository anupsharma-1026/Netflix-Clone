import React from 'react';
import './Login.css';
import Logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate =useNavigate();
    
    return (
        <>
            <header className="showcase">
                <div className="logo-1">
                    <img className="logoImg" src={Logo} alt="" onClick={()=>navigate("/app")} />
                </div>
                <div className="showcase-content">
                    <div className="formm">
                        <form>
                            <h2 className="signHeading">Sign In</h2>
                            <div className="info">
                                <input className="email" type="email" placeholder="Email or phone number" /> <br />
                                <input className="email" type="password" placeholder="Password" />
                            </div>
                            <div className="signbtn">
                                <button className="btn btnSign" type="submit">Sign In</button>
                            </div>
                            <div className="help">
                                <div>
                                    <input value="true" type="checkbox" style={{height:"18px",width:"18px"}} />
                                </div>
                                <label className='signColr'>Remember me</label>
                                <a href="https://www.netflix.com/dz-en/LoginHelp" className='signColr need'>Need Help ?</a>
                            </div>
                        </form>
                    </div>
                    {/* <div className="fcbk">
                        <a href="https://facebook.com">
                            <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
                        </a>
                        <p>Login with Facebook</p>
                    </div> */}
                    <div className="signup">
                        <p className='signColr'>New to Netflix ?</p>
                        <a href="#">Sign up now</a>
                    </div>
                    <div className="more">
                        <p className='signColr'>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a>
                        </p>
                    </div>
                </div>
            <footer>
                <div className="ftr-content">
                    <div className="contact">
                        <a>Quesions? <a href="tel:000-800-040-1843">000-800-040-1843
                    </a></a>
                    </div>
                    <div className="ftr">
                        <div>
                            <a href="#">FAQ</a><br/><br/>
                            <a href="#">Cookie Prefrences</a>
                        </div>
                        <div>
                            <a href="#">Help Center</a><br/><br/>
                            <a href="#">Corperate Information</a>
                        </div>
                        <div>
                            <a href="#">Terms of Use</a>
                        </div>
                        <div>
                            <a href="#">Privacy</a>
                        </div>
                    </div>
                    <select class="language">
                        <option value="">&#xF3EE; English</option>
                        <option value="">&#xF3EE; मराठी</option>
                        <option value="">&#xF3EE; हिन्दी</option>
                    </select>
                </div>
            </footer>
            </header>

        </>
    );
};

export default Login;