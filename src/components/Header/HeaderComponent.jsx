import React from 'react'
import './HeaderComponent.scss'
import LinkedInLogo from '../../assets/Images/LinkedInLogo.png'
import USERONE from '../../assets/Images/user2.png';
import { BsBriefcaseFill } from 'react-icons/bs';
import { AiOutlineMessage, AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';


function HeaderComponent() {
    return (
        <div className='topbar-main'>
            <img src={LinkedInLogo} alt='LinkedInLogo' className='linkedin-Logo' />
            <div className='header-icons'>
                <AiOutlineSearch size={35} className='header-icon' />
                <AiFillHome size={35} className='header-icon' />
                <FaUserFriends size={35} className='header-icon' />
                <BsBriefcaseFill size={35} className='header-icon' />
                <AiOutlineMessage size={35} className='header-icon' />
                <IoNotificationsOutline size={35} className='header-icon' />
            </div>
            <img src={USERONE} alt='usericon' className='user-icon' />
            <div class="vertical-line"></div>
            <div >
                <AiFillHome size={35} className='header-icon' />
                <AiFillHome size={35} className='header-icon' />
            </div>

        </div>
    )
}

export default HeaderComponent