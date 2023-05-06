import { firestore } from '../firebaseConfig';
import { addDoc, collection, onSnapshot, query, orderBy, where } from 'firebase/firestore'

const postRef = collection(firestore, "posts");
const userRef = collection(firestore, "users");


export const PostUpload = (data) => {
    addDoc(postRef, data)
        .then(docRef => {
            return docRef;
        })
        .catch(error => {
            console.log(error)
            return error;
        })
}



export const getPost = (setAllPost) => {
    let q = query(postRef, orderBy("timeStamp", "desc"));
    onSnapshot(q, (response) => {
        setAllPost(response.docs.map((docs) => ({ ...docs.data(), id: docs.id })
        ).filter((item) => (item.userEmail === localStorage.getItem("userEmail"))));
    })
}

export const PostUserData = (data) => {
    addDoc(userRef, data)
        .then(docRef => {
            return docRef;
        })
        .catch(error => {
            console.log(error)
            return error;
        })
}


export const getCurrentUser = (setCurrentUser) => {
    let w = query(userRef, where("email", "==", localStorage.getItem("userEmail")));
    onSnapshot(w, (response) => {
        setCurrentUser(response.docs.map((docs) => {
            return {
                ...docs.data(),
                userId: docs.id
            }
        }));
    })
}

