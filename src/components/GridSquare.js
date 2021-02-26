import React from 'react'

import styles from '../styles/gridsquare.module.css'

const GridSquare = ( {children, pos} ) => {
    return (
        <div className={styles.square}>
            <sub>{ pos }</sub>
            { children }
        </div>
    )
}

export default GridSquare