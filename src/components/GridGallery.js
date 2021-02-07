import React, {useEffect, useState} from 'react'

import styles from '../styles/gridgallery.module.css'

const GridGallery = () => {
    const [gridItems, setGridItems] = useState([])
    useEffect(() => {
        let imgList = []
        for (let i = 0 ; i <= 15 ; i++) {
            imgList.push("https://picsum.photos/150?random=" + i.toString())
        }
        const items = imgList.map((img,i) => {
            return (
                <div key={i}>
                    <img className={styles.gridCell} src={img} alt={i} key={i} />
                </div>
            )
        })

        setGridItems(items)

    },[])




    return (
        <div className={styles.grid}>
            { gridItems }
        </div>
    )
}

export default GridGallery