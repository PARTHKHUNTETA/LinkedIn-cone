

import React, { useState } from "react";
import LinkedInLogo from '../../assets/Images/LinkedInLogo.png'
import { useNavigate } from "react-router-dom";
import { RegisterAPI } from "../../api/AuthAPI";
import { toast } from 'react-toastify';
import "./RegisterComponent.scss";

const RegisterComponent = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({})
    const Register = () => {
        try {
            let res = RegisterAPI(credentials.email, credentials.password);
            toast.success("Account created");
            navigate("/home");
        }
        catch (err) {
            toast.error("cannot create your account");
        }
    };

    return (

        <div className="login-wrapper">
            <img src={LinkedInLogo} className="linkedinLogo" />

            <div className="login-wrapper-inner">
                <h1 className="heading">Make the most of your professional life</h1>

                <div className="auth-inputs">
                    <label>
                        Email or phone number
                        <input
                            onChange={(event) =>
                                setCredentials({ ...credentials, email: event.target.value })
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
                <label className="User-aggreement-checkbox"><input type="checkbox" />By clicking Agree & join you agrre to linkeIn User Agreement</label>
                <button onClick={Register} className="login-btn">
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
