import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import GridImage from '../components/GridImage'
import GridSquare from '../components/GridSquare'
import styles from '../styles/gridgallery.module.css'

const GridGallery = () => {
    const [gridItems, setGridItems] = useState([])
    useEffect(() => {
        let imgList = []
        for (let i = 0 ; i <= 15 ; i++) {
            imgList.push("https://picsum.photos/300?random=" + i.toString())
        }
        const items = imgList.map((img,i) => {
            return (
                <Link to={"/edit/"+ i.toString()} key={i}>
                    <img className={styles.gridCell} src={img} alt={i} key={i} />
                </Link>
            )
        })

        setGridItems(items)

    },[])




    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.grid}>
                <GridSquare pos="1">
                    {/* <p>image</p> */}
                    <GridImage id="123" />
                </GridSquare>
                { gridItems }
            </div>
        </DndProvider>
    )
}

export default GridGallery