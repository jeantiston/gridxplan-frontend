import React from 'react';
import   { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';

import styles from '../styles/editpost.module.css'

const EditPost = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    let { postId } = useParams();
    console.log("hello: ", postId)
    return (
        <div >
            {/* <h1> Edit Post </h1> */}
            <form onSubmit={handleSubmit(onSubmit)} className={styles.editPost}>
                <div className={styles.postPhotoDetails} >
                    <div>
                        <img className={styles.img} src="https://picsum.photos/300?random=454" alt="for social media" />
                    </div>
                    <div className={styles.postDetails}>
                        <h2>status</h2>
                        <select name="status" ref={register}>
                            <option value="need captions">need captions</option>
                            <option value="need hashtags"> need hashtags</option>
                            <option value="revise"> revise</option>
                            <option value="approved"> approved</option>
                            <option value="scheduled"> scheduled</option>
                            <option value="posted"> posted</option>
                        </select>
                        <h2>schedule</h2>
                        <input type="datetime-local" placeholder="schedule" name="schedule" ref={register} />
                    </div>
                </div>
                <div className={styles.captionDetails}>
                    <textarea name="caption" ref={register({maxLength: 2100})} />
                    <sub className={styles.sub}>0/2100</sub>
                    <textarea name="hashtags" ref={register({maxLength: 2000, pattern: /#\w+/i})} />
                    <sub className={styles.sub}>30 hashtags left</sub>
                </div>
            </form>
        </div>
    )
}

export default EditPost