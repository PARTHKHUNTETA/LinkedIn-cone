import React, { useEffect, useState } from 'react'
import HomeComponent from '../components/Home/HomeComponent'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Loader from '../components/common/Loader';
import { useNavigate } from 'react-router-dom';

function Home({ currentUser }) {
    const navigate = useNavigate();
    const [loading, setloading] = useState(true);
    useEffect(() => {
        onAuthStateChanged(auth, (res) => {
            if (!res?.accessToken) {
                navigate('/');
            }
            else {
                setloading(false);
            }
        })
    }, [])

    return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />
}

export default Home;