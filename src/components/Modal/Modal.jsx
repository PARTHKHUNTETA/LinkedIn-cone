import React from 'react';
import { Button, Modal } from 'antd';
import './Modal.scss'
const ModalComponent = ({ isModalOpen, setIsModalOpen, setStatus, status, sendStatus }) => {
    return (
        <>
            <Modal
                title="Write a Post"
                centered
                open={isModalOpen}
                onOk={() => setIsModalOpen(false)}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="submit"
                        type="primary"
                        onClick={sendStatus}
                        disabled={status.length > 0 ? false : true} >
                        Post
                    </Button>
                ]}
            >
                <input className="modal-input"
                    type="text"
                    placeholder='What do you want to talk about'
                    value={status}
                    onChange={(e) => setStatus(e.target.value)} />

            </Modal>
        </>
    );
};

export default ModalComponent;