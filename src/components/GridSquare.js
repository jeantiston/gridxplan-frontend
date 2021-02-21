import React from 'react'

import styles from '../styles/gridsquare.module.css'

const GridSquare = ( {children} ) => {
    return (
        <div className={styles.square}>
            {/* <p>square</p> */}
            { children }
        </div>
    )
}

export default GridSquare