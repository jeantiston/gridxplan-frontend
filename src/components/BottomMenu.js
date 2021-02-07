import React from 'react'
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
            'path': '/',
            'icon': faFileImage
        },
        {   'name': 'hashtags',
            'path': '/',
            'icon': faHashtag
        },
        {   'name': 'share',
            'path': '/',
            'icon': faShareAlt
        }
    ]

    const menuItems = menuMap.map( item => {
            return (
                <div className={styles.menuItem} key={item.name}>
                    <FontAwesomeIcon icon={item.icon} size="2x" className={styles.icon}/>
                    <sub className={styles.menuText}>{ item.name }</sub>
                </div>
            )
        })
    

    return (
        <div className={styles.flex}>
            { menuItems }
        </div>
    )
}

export default BottomMenu