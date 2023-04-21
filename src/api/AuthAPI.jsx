import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) => {
    try {
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch (err) {
        return err
    }
}

export const RegisterAPI = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            return user;
            // ...
        })
        .catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            return errorMessage;

        });
}

export const GoogleSignInAPI = () => {
    try {
        let googleprovider = new GoogleAuthProvider();
        let res = signInWithPopup(auth, googleprovider);
        return res;
    }
    catch (err) {
        return err
    }
}