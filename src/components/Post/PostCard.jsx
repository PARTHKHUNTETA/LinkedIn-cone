import React from 'react'
import './PostCard.scss'

function PostCard({ postData }) {
    return (
        <div className='posts-card'>
            <p className='timestamp'>{postData.timeStamp}</p>
            <p className='status'>{postData.status}</p>
        </div>
    )
}

export default PostCard