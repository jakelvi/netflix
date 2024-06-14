import React, { useRef } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { toast } from "react-toastify";

function Auth({ isSignIn, setIsSignIn, setSignUp }) {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const toggleAuthMode = () => {
    setIsSignIn(!isSignIn);
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (isSignIn) {
      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
          toast.success("Successfully signed in!");
          navigate("/home");
        })
        .catch((error) => toast.error(error.message));
    } else {
      auth
        .createUserWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
          toast.success("Successfully signed up!");
          navigate("/home");
        })
        .catch((error) => toast.error(error.message));
    }
  };

  return (
    <div className="signInScreen">
      <form onSubmit={handleAuth}>
        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <h4>
          <span className="gray">
            {isSignIn ? "New to the site?" : "Already a member?"}
          </span>
          <span className="link" onClick={toggleAuthMode}>
            {isSignIn ? "Sign Up now." : "Sign In now."}
          </span>
        </h4>
        <button onClick={() => setSignUp(false)} className="backButton">
          Back
        </button>
      </form>
    </div>
  );
}

export default Auth;
