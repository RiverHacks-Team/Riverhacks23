import React from "react";
import logo from "../assets/pixel-art-tree-icon.png";
import "./LandingPage.css";
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LandingPage = ({ setUser }) => {
  const [landingPageLoginButtonExtended, setLandingPageLoginButtonExtended] =
    useState(false);
  const [landingPageSignupButtonExtended, setLandingPageSignupButtonExtended] =
    useState(false);

  const handleLoginSignupButtonClick = () => {
    if (landingPageLoginButtonExtended) {
      setLandingPageLoginButtonExtended(false);
    } else {
      setLandingPageLoginButtonExtended(true);
      setLandingPageSignupButtonExtended(false);
    }
  };
  const handleSignupButtonClick = () => {
    if (landingPageSignupButtonExtended) {
      setLandingPageSignupButtonExtended(false);
    } else {
      setLandingPageSignupButtonExtended(true);
      setLandingPageLoginButtonExtended(false);
    }
  };

  return (
    <div className="page">
      <header>
        
        <div className="websiteInfo" >
          <div className="websiteLogo">
            <img style={{ height: '300px', width:'280px'}} src={logo} alt='a gorgeous logo'/>
          </div>
        </div>
      </header>
      <div style={{backgroundColor:'#a2d5ac', height:'100px'}} className="loginContents">
        <div
        style={{fontFamily:'Jost',color:'white'}}>Taking care of yourself is an essential part of your college experience, and we're here to support you every step of the way!</div>
        <br></br>
        <div>
        <button onClick={handleLoginSignupButtonClick} className='btn landingPageButton'>Login</button>
        <button onClick={handleSignupButtonClick} className='btn landingPageButton'>Sign Up</button>
        {landingPageLoginButtonExtended && (
          <LoginComponent id='login-component-extended' setUser={setUser} />
        )}

        {landingPageSignupButtonExtended && (
          <SignupComponent id='signup-component-extended' setUser={setUser} />
        )}
        </div>
      </div>

      <footer>
        <a style={{fontFamily:'Jost', color:'white'}} href="mailto:webmaster@example.com"> Contact us!</a>
      </footer>
    </div>
  );
};

export default LandingPage;
