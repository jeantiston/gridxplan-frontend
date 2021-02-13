import React from 'react'

import TopBar from '../components/TopBar'
import BottomMenu from '../components/BottomMenu'

const Nav = ({ children }) => {
    return (
        <div style={{
            minHeight: "100vh",
            minWidth: "100vw"
        }}>
            <TopBar />
                {children}
            <BottomMenu />
        </div>
    )
}

export default Nav