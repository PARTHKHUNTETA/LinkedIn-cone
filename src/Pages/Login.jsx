import React, { useEffect, useState } from "react";
import LoginComponent from "../components/Login/LoginComponent";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";

const Login = () => {
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate('/home');
      }
      else {
        setloading(false)
      }
    })
  }, [])

  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
