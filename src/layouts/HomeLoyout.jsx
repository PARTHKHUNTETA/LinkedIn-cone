import React, { useMemo, useState } from 'react'
import Home from '../Pages/Home'
import { getCurrentUser } from '../api/FireStoreApi'
import HeaderComponent from '../components/Header/HeaderComponent'
function HomeLoyout() {
    const [currentUser, setCurrentUser] = useState({});
    useMemo(() => getCurrentUser(setCurrentUser), [])
    return (
        <div>
            <HeaderComponent />
            <Home currentUser={currentUser} />
        </div>
    )
}

export default HomeLoyout