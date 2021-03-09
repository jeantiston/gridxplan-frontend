import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PostBar from '../components/PostBar'
import EditPostForm from '../components/EditPostForm'


const EditPost = () => {

    let { postId } = useParams()
    
    const [imgDetails, setImgDetails] = useState({
        id: postId,
        imgUrl: "https://picsum.photos/300?random=" + postId.toString(),
        caption: 'lorem ipsum dolor',
        status: '',
        schedule: '',
        hashtags: ['#planner', '#planning', '#lovingit']
    })

    return (
        <div>
            <PostBar>
                <EditPostForm imgDetails={imgDetails} setImgDetails={setImgDetails} />
            </PostBar>

        </div>
    )
}

export default EditPost