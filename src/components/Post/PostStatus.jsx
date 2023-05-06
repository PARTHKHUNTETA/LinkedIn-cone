import React, { useMemo, useState } from 'react';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { BiVideo } from 'react-icons/bi';
import { BsCalendarEvent } from 'react-icons/bs';
import { RiArticleLine } from 'react-icons/ri';
import ModalComponent from '../Modal/Modal';
import { PostUpload, getPost } from '../../api/FireStoreApi';
import { toast } from 'react-toastify';
import './PostStatus.scss'
import PostCard from './PostCard';
import Shimmer from '../common/Shimmer';
import { getCurrentTimeStamp } from '../../utils/useMoment';

export default function PostStatus() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState('');
    const [allPost, setAllPost] = useState([])
    let data = {
        status: status,
        timeStamp: getCurrentTimeStamp('LLL'),
        email: localStorage.getItem("userEmail")
    }
    const sendStatus = () => {
        try {
            PostUpload(data);
            setStatus('')
            setIsModalOpen(false)
            toast.success("Document has been added successfully!");
        }
        catch (err) {
            console.log(err);
            toast.error("Error occured during uploading a document");
        }
    }
    useMemo(() => {
        getPost(setAllPost);
    }, [])
    return (
        <div className='post-status-main'>
            <div className='post-status'>
                <div className='Post-writing'>
                    <img src="https://media.licdn.com/dms/image/D4D03AQHhG36jwkNziQ/profile-displayphoto-shrink_100_100/0/1680548671616?e=1688601600&v=beta&t=EGREaewEh3pyW7nMZOOvHi0rbAqsDM__a6ZFzaSD3hg" alt='usericon' className='user-icon' />
                    <button className="open-post-model" onClick={() => setIsModalOpen(true)}>Start a Post</button>
                    <ModalComponent sendStatus={sendStatus}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        setStatus={setStatus}
                        status={status} />
                </div>
                <div className='Post-ammenities'>
                    <div className="Post-ammenities-list">
                        <HiOutlinePhotograph />
                        <span>Photo</span>
                    </div>
                    <div className="Post-ammenities-list">
                        <BiVideo />
                        <span>Video</span>
                    </div>
                    <div className="Post-ammenities-list">
                        <BsCalendarEvent />
                        <span>Event</span>
                    </div>
                    <div className="Post-ammenities-list">
                        <RiArticleLine />
                        <span>Write article</span>
                    </div>
                </div>
            </div>
            {allPost.length > 0 ?
                <>{allPost.map(post =>
                    <PostCard key={post.id} postData={post} />)}
                </> :
                <Shimmer />
            }
        </div>
    )
}
