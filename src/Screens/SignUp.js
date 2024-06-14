import React, { useRef } from "react";
import "./Register-Login.css";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
        navigate("/home"); // Navigate to home page after successful registration
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
        <h4>
          <span className="gray">Already a member?</span>
          <Link className="link" to="/signIn">
            Sign In now.
          </Link>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
