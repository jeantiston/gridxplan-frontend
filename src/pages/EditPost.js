import React from 'react';
import   { useParams } from "react-router-dom";

const EditPost = () => {
    let { postId } = useParams();
    console.log("hello: ", postId)
    return (
        <div>
            <h1> Edit Post</h1>
            <h1> Edit Post sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h1>
            {/* <h1> Edit Post</h1>
            <h1> Edit Post</h1>
            <h1> Edit Post</h1>
            <h1> Edit Post</h1>
            <h1> Edit Post</h1>
            <h1> Edit Post</h1>
            <h1> Edit Post</h1>
            <h1> Edit Post</h1>
            <h1> Edit Post</h1> */}
            {/* <h2> { postId } </h2> */}
        </div>
    )
}

export default EditPost