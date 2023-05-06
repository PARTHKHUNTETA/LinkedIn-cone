

import React, { useState } from "react";
import LinkedInLogo from '../../assets/Images/LinkedInLogo.png'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import "./RegisterComponent.scss";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../firebaseConfig";
import { PostUserData } from "../../api/FireStoreApi";

const RegisterComponent = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({})
    const [isAgree, setIsAgree] = useState(false);

    let data = {
        name: credentials?.name ? credentials?.name : 'Dummy User',
        email: credentials?.email ? credentials?.email?.toLowerCase() : 'dummy@gmail.com'
    }

    const Register = () => {
        localStorage.setItem("userEmail", credentials?.email?.toLowerCase());
        createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredential) => {
                PostUserData(data)
            })
            .then(() => {
                toast.success("Account created");
                navigate("/home");
            })
            .catch((err) => {
                console.log(err)
                toast.error("Cannot create your account")
            })

    };

    return (

        <div className="login-wrapper">
            <img src={LinkedInLogo} className="linkedinLogo" />

            <div className="login-wrapper-inner">
                <h1 className="heading">Make the most of your professional life</h1>

                <div className="auth-inputs">
                    <label>
                        Name
                        <input
                            onChange={(event) =>
                                setCredentials({ ...credentials, name: event.target.value })
                            }
                            type="text"
                            className="common-input"
                            placeholder="Your Name"
                        />
                    </label>
                    <label>
                        Email or phone number
                        <input
                            onChange={(event) => {
                                setCredentials({ ...credentials, email: event.target.value })
                            }
                            }
                            type="email"
                            className="common-input"
                            placeholder="Email or Phone"
                        />
                    </label>
                    <label>
                        Password(6 or more characters)
                        <input
                            onChange={(event) =>
                                setCredentials({ ...credentials, password: event.target.value })
                            }
                            type="password"
                            className="common-input"
                            placeholder="Password"
                        />
                    </label>
                </div>
                <label className="User-aggreement-checkbox" >
                    <input
                        id="User-aggreement-checkbox"
                        onChange={(e) => setIsAgree(e.target.checked)}
                        type="checkbox" />
                    By clicking Agree & join you agree to linkedIn User Agreement
                </label>
                <button disabled={!isAgree} onClick={Register} className="login-btn">
                    Agree & join
                </button>

            </div>

            <hr className="hr-text" data-content="OR" />
            <div className="google-btn-container">
                <p className="go-to-signup">
                    Already on LinkedIn?{" "}
                    <span className="join-now" onClick={() => navigate("/")}>
                        Sign in
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegisterComponent;
