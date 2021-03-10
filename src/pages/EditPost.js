import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import PostBar from '../components/PostBar'
import EditPostForm from '../components/EditPostForm'
import PostPreview from '../components/PostPreview'


const EditPost = () => {

    let { postId } = useParams()
    
    const [imgDetails, setImgDetails] = useState({
        id: postId,
        imgUrl: "https://picsum.photos/300?random=" + postId.toString(),
        caption: 'lorem ipsum dolor',
        status: 'in progress',
        schedule: 'Jan 1, 2021 - 8:00pm',
        hashtags: ['#planner', '#planning', '#lovingit']
    })

    return (
        <div>
            <PostBar>
                {/* <EditPostForm imgDetails={imgDetails} setImgDetails={setImgDetails} /> */}
                <PostPreview imgDetails={imgDetails} />
            </PostBar>

        </div>
    )
}

export default EditPost