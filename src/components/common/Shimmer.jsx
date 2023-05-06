import React from 'react'
import './Shimmer.scss'
function Shimmer() {
    return (
        <div className='shimmer-container'>
            {Array(10).fill("").map((e, i) => <div key={i} className='shimmer-box'></div>)}
        </div>
    )
}

export default Shimmer