import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faTag, faFileImage, faHashtag, faShareAlt } from '@fortawesome/free-solid-svg-icons'

import styles from '../styles/bottommenu.module.css'

const BottomMenu = () => {
    const menuMap = [
        {
            'name': 'schedule',
            'path': '/',
            'icon': faCalendarAlt
        },
        {   'name': 'status',
            'path': '/',
            'icon': faTag
        },
        {   'name': 'add image',
            'path': '/add',
            'icon': faFileImage
        },
        {   'name': 'hashtags',
            'path': '/hashtags',
            'icon': faHashtag
        },
        {   'name': 'share',
            'path': '/share',
            'icon': faShareAlt
        }
    ]

    const menuItems = menuMap.map( item => {
            return (
                <NavLink exact to={item.path} >
                    <div className={styles.menuItem} key={item.name}>
                        <FontAwesomeIcon icon={item.icon} size="2x" className={styles.icon} />
                        <sub className={styles.menuText}>{ item.name }</sub>
                    </div>
                </NavLink>
            )
        })
    

    return (
        <div className={styles.flex}>
            { menuItems }
        </div>
    )
}

export default BottomMenu