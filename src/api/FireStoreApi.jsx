import { firestore } from '../firebaseConfig';
import { addDoc, collection, onSnapshot, query, orderBy } from 'firebase/firestore'

const dbRef = collection(firestore, "posts");

export const PostUpload = (data) => {
    addDoc(dbRef, data)
        .then(docRef => {
            return docRef;
        })
        .catch(error => {
            console.log(error)
            return error;
        })
}

const q = query(dbRef, orderBy("timeStamp", "desc"));
export const getPost = (setAllPost) => {
    onSnapshot(q, (response) => {
        setAllPost(response.docs.map((docs) => ({ ...docs.data(), id: docs.id })
        ));
    })
}

