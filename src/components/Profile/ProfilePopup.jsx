import React from 'react'
import './ProfilePopup.scss'
import { Logout } from '../../api/AuthAPI'

const ProfilePopup = () => {
    return (
        <div className='popup-card'>
            <ul className='popup-options'>
                <li className='popup-option'><button on onClick={Logout}>Logout</button></li>
            </ul>
        </div>
    )
}

export default ProfilePopup