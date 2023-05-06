import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const LoginAPI = (email, password) => {
    try {
        let response = signInWithEmailAndPassword(auth, email, password);
        return response;
    }
    catch (err) {
        console.log(err);
        return err
    }
}

export const RegisterAPI = (email, password) => {
    try {
        const userCredential = createUserWithEmailAndPassword(auth, email, password)
        return userCredential.user
    }
    catch (error) {
        const errorMessage = error.message;
        return errorMessage;
    }


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

export const Logout = () => {
    try {
        signOut(auth);
        localStorage.removeItem("userEmail");
    }
    catch (err) {
        console.log(err);
        return err
    }
}
