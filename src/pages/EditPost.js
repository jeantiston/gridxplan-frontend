import React, { useState } from 'react';
import   { useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';

import styles from '../styles/editpost.module.css'

const EditPost = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    let { postId } = useParams();
    // console.log("hello: ", postId)

    const [imgDetails, setImgDetails] = useState({
        id: postId,
        imgUrl: "https://picsum.photos/300?random=" + postId.toString(),
        caption: 'lorem ipsum dolor',
        status: '',
        schedule: '',
        hashtags: ['#planner', '#planning', '#lovingit']
    })

    const [captionSubStyle, setCaptionSubStyle ] = useState(styles.sub)
    const [hashtagSubStyle, setHashtagSubStyle ] = useState(styles.sub)
    const [err, setErr] = useState(false)

    const handleCaption = (maxCount, input) => {
        // console.log("maxCount: ", maxCount)
        // console.log("input: ", input)

        setImgDetails({...imgDetails, caption: input})

        if (input.length > maxCount) {
            setCaptionSubStyle(`${styles.sub} ${styles.subErr}`)
        }
        else {
            setCaptionSubStyle(styles.sub)
        }
    }

    const handleHashtags = (maxCount, input) => {
        const hashtags = input.split(" ")
        const pattern = /#\w*/i

        setErr(false)

        for (let hashtag of hashtags) {
            if (!pattern.test(hashtag) && hashtag) {
                // console.log("hashtag: ", hashtag)
                setErr(true)
                break
            }
        }

        setImgDetails({...imgDetails, hashtags: hashtags})

        if (hashtags.length > maxCount) {
            setHashtagSubStyle(`${styles.sub} ${styles.subErr}`)
        }
        else {
            setHashtagSubStyle(styles.sub)
        }
    }

    return (
        <div >
            {/* <h1> Edit Post </h1> */}
            <form onSubmit={handleSubmit(onSubmit)} className={styles.editPost}>
                <div className={styles.postPhotoDetails} >
                    <div>
                        <img className={styles.img} src={ imgDetails.imgUrl } alt="for social media" />
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
                    <textarea 
                        name="caption"
                        value={ imgDetails.caption }
                        onChange={ e => handleCaption(2100, e.target.value) }
                        ref={register({maxLength: 2100})} 
                    />
                    <sub className={captionSubStyle}>{ imgDetails.caption.length }/2100</sub>

                    <textarea 
                        name="hashtags" 
                        value={ imgDetails.hashtags.join(" ") }
                        onChange={ e => handleHashtags(30, e.target.value) }
                        ref={register({maxLength: 2000, pattern: /#\w+/i})} 
                    />
                    <sub className={hashtagSubStyle}>{ imgDetails.hashtags.length }/30</sub>
                    { err && <sub className={styles.subErr}>Wrong hashtag format</sub> }
                </div>
            </form>
        </div>
    )
}

export default EditPost