import React, {Fragment, useState, useRef} from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Link } from 'react-router-dom'

import ITEM_TYPE from '../data/types'
import styles from '../styles/gridgallery.module.css'

const GridImage = (props) => {
    const ref = useRef(null)
    
    return (
        <div>
            <Link to={"/edit/"+ props.id.toString()}>
                    <img className={styles.gridCell} src={"https://picsum.photos/300?random=" + props.id.toString()} alt="random picsum" />
            </Link>
        </div>
    )
}

export default GridImage