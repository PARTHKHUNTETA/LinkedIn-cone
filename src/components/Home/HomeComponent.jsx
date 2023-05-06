import React from 'react'
import './HomeComponent.scss';
import PostStatus from '../Post/PostStatus';
function HomeComponent({ currentUser }) {
    return (
        <div className='home-wrapper'>
            <PostStatus currentUser={currentUser} />
        </div>
    )
}

export default HomeComponent