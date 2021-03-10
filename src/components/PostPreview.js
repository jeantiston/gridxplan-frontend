import React from 'react';

import styles from '../styles/editpost.module.css'

const EditPostForm = ({ imgDetails }) => {

    return (
        <div >
                <div className={styles.postPhotoDetails} >
                    <div>
                        <img className={styles.img} src={ imgDetails.imgUrl } alt="for social media" />
                    </div>
                    <div className={styles.postDetails}>
                        <h2>status</h2>
                        <p>{ imgDetails.status }</p>
                        
                        <h2>schedule</h2>
                        <p>{ imgDetails.schedule }</p>
                    </div>
                </div>
                <div className={styles.captionDetails}>
                    <p>{ imgDetails.caption }</p>

                    <p>{ imgDetails.hashtags.join(" ") }</p>
                    
                </div>

                {/* Comments Section */}

                <div>
                    <h2>Comments</h2>
                </div>

        </div>
    )
}

export default EditPostForm