import React from 'react'
import { Space, Spin } from 'antd';

function Loader() {
    return (
        <div className='loader'>
            <Space size="middle">
                <Spin tip="Loading...." size="large" />
            </Space>
        </div>
    )
}

export default Loader