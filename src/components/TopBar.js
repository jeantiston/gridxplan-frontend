import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

import profilePhoto from '../assets/profile-photo.png'
import logo from '../assets/gridxplanner-logo.svg'

import TopBarStyles from '../styles/topbar.module.css'

const TopBar = () => {
    return (
        <div className={TopBarStyles.flex}>
            <div>
                <img className={TopBarStyles.profilePhoto} src={profilePhoto} alt="profile" />
            </div>
            <div>
                <img className={TopBarStyles.logo} src={logo} alt="GridXPlanner logo" />
            </div>
            <div>
                <FontAwesomeIcon icon={faCog} size="2x" />
            </div>
        </div>
    )
}

export default TopBar