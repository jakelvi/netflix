import React, { useState } from "react";
import "./AuthScreen.css";
import Auth from "./Auth";

function AuthScreen() {
  const [signUp, setSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true); // State to manage sign-in/sign-up

  const handleGetStarted = () => {
    setSignUp(true);
    setIsSignIn(false); // Set to sign-up mode
  };

  const handleSignIn = () => {
    setSignUp(true);
    setIsSignIn(true); // Set to sign-in mode
  };

  return (
    <div className="AuthScreen">
      <div className="AuthScreen_background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="AuthScreen_logo"
        />
        <button onClick={handleSignIn} className="AuthScreen_button">
          Sign In
        </button>
        <div className="AuthScreen_gradient" />
      </div>

      <div className="AuthScreen_body">
        {signUp ? (
          <Auth
            isSignIn={isSignIn}
            setIsSignIn={setIsSignIn}
            setSignUp={setSignUp}
          />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Click on Get Started button to start your
              membership
            </h3>
            <div className="AuthScreen_input">
              <button
                onClick={handleGetStarted}
                className="AuthScreen_getStarted"
              >
                GET STARTED
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthScreen;
