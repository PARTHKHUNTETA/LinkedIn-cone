import React, { useState } from "react";
import LinkedInLogo from '../../assets/Images/LinkedInLogo.png'
import { useNavigate } from "react-router-dom";
import { GoogleSignInAPI } from "../../api/AuthAPI";
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { auth } from "../../firebaseConfig";
import { toast } from 'react-toastify';
import "./LoginComponent.scss";

const LoginComponent = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({})
  const Login = () => {

    signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then((res) => {
        toast.success("Welcome to Linkedin!");
        localStorage.setItem("userEmail", res?.user?.email);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please Check your Credentials");
      })
  };

  const googleSignIn = () => {
    let res = GoogleSignInAPI()
  }
  return (

    <div className="login-wrapper">
      <img src={LinkedInLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>
        <button onClick={Login} className="login-btn">
          Sign in
        </button>
        <button onClick={googleSignIn} className="login-btn">
          Sign in with Google
        </button>

      </div>
      <hr className="hr-text" data-content="OR" />
      <div className="google-btn-container">
        <p className="go-to-signup">
          New to LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
            Join now
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;

