import React from 'react'
import './HomeComponent.scss';
import PostStatus from '../Post/PostStatus';
function HomeComponent() {
    return (
        <div className='home-wrapper'>
            <PostStatus />
        </div>
    )
}

export default HomeComponent