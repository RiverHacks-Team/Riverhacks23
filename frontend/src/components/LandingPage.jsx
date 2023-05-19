import React from "react";
import logo from "../assets/mindfulU_logo.png";
import "./LandingPage.css";
import SignupComponent from "./SignupComponent";
import LoginComponent from "./LoginComponent";
import { useState } from "react";

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
    <div>
      <header>
        <title>mindfulU</title>

        <img
          src={logo}
          alt='a gorgeous logo'
          style={{ width: "200px", height: "auto", margin: "10px", marginBottom: '30px' }}
        />
      </header>
      <div>
        <div> Taking care of yourself is an essential part of your college experience, and we're here to support you every step of the way!</div>
        <button
          onClick={handleLoginSignupButtonClick}
          className='landingPageButton'
        >
          Login
        </button>
        <button onClick={handleSignupButtonClick} className='landingPageButton'>
          Sign Up
        </button>
        {landingPageLoginButtonExtended && (
          <LoginComponent id='login-component-extended' setUser={setUser} />
        )}

        {landingPageSignupButtonExtended && (
          <SignupComponent id='signup-component-extended' setUser={setUser} />
        )}
      </div>

      <footer>
        <div> Contact us!</div>
      </footer>
    </div>
  );
};

export default LandingPage;
