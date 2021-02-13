import React from 'react'

import TopBar from '../components/TopBar'
import BottomMenu from '../components/BottomMenu'

const Nav = ({ children }) => {
    return (
        <div>
            <TopBar />
                {children}
            <BottomMenu />
        </div>
    )
}

export default Nav