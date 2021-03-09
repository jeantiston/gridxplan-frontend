import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faComment } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/postbar.module.css'

const PostBar = ({ children }) => {

    const location = useLocation()
    const [, path, id] = location.pathname.split("/")

    const isActive = (currentPath) => {
        console.log(children)
        // console.log(location)
        // console.log(location.pathname.split("/")[1])
        if (path === currentPath) {
            return styles.active
        }
    }
    
    return (
        
        <div>
            <div className={styles.flex}>
                <div><p>Save</p></div>
                <div><FontAwesomeIcon icon={faTrash} size="lg" /></div>
            </div>
            
            { children }

            <div className={styles.flexBottom} >
                <NavLink exact to={"/edit/" + id.toString()} activeClassName={styles.active} >
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faEdit} size="lg" className={ [styles.icon, isActive("edit")].join(" ") } />
                        <sub className={[styles.menuText, isActive("edit")].join(" ")}>edit</sub>
                    </div>
                </NavLink>

                <NavLink exact to={"/preview/" + id.toString()} activeClassName={styles.active} >
                    <div className={styles.menuItem}>
                        <FontAwesomeIcon icon={faComment} size="lg" className={ [styles.icon, isActive("preview")].join(" ") } />
                        <sub className={[styles.menuText, isActive("preview")].join(" ")}>comments</sub>
                    </div>
                </NavLink>
            </div>
        </div>

        
    )
}

export default PostBar