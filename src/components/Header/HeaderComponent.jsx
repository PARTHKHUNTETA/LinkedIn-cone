import React, { useState } from 'react'
import './HeaderComponent.scss'
import LinkedInLogo from '../../assets/Images/LinkedInLogo.png'
import USERONE from '../../assets/Images/user2.png';
import { Link, useNavigate } from "react-router-dom";
import { BsBriefcaseFill } from 'react-icons/bs';
import { AiOutlineMessage, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';
import ProfilePopup from '../Profile/ProfilePopup';


function HeaderComponent() {
    const navigate = useNavigate();
    const [showPopUp, setShowPopUp] = useState(false);
    const goToRoute = (specifiedRoute) => {
        navigate(specifiedRoute)
    }

    return (
        <div className='topbar-main'>
            <Link to='/'><img src={LinkedInLogo} alt='LinkedInLogo' className='linkedin-Logo' /></Link>
            <div className='header-icons'>
                <AiOutlineSearch size={35} className='header-icon' />
                <AiFillHome size={35} className='header-icon' onClick={() => goToRoute("/home")} />
                <FaUserFriends size={35} className='header-icon' onClick={() => goToRoute("/profile")} />
                <BsBriefcaseFill size={35} className='header-icon' onClick={() => goToRoute()} />
                <AiOutlineMessage size={35} className='header-icon' onClick={() => goToRoute()} />
                <IoNotificationsOutline size={35} className='header-icon' onClick={() => goToRoute()} />
            </div>
            <img src={USERONE} alt='usericon' className='user-icon' onClick={() => setShowPopUp(!showPopUp)} />
            {showPopUp && <ProfilePopup />}
            {/* <div className="vertical-line"></div> */}
            {/* <div >
                <AiFillHome size={35} className='header-icon' />
                <AiFillHome size={35} className='header-icon' />
            </div> */}

        </div>
    )
}

export default HeaderComponent