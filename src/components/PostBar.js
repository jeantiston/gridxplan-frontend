import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faComment } from '@fortawesome/free-solid-svg-icons'

const PostBar = ({ children }) => {
    
    return (
        
        <div>
            <div>
                <div><p>Save</p></div>
                <div><FontAwesomeIcon icon={faTrash} size="lg" /></div>
            </div>
            { children }
            <div>
                <div><FontAwesomeIcon icon={faEdit} size="lg" /></div>
                <div><FontAwesomeIcon icon={faComment} size="lg" /></div>
            </div>
        </div>

        
    )
}

export default PostBar