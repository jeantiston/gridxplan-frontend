import React, {useState, useCallback} from 'react'
// import { Link } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import update from 'immutability-helper'

import GridImage from '../components/GridImage'
// import GridSquare from '../components/GridSquare'
import styles from '../styles/gridgallery.module.css'

const GridGallery = () => {
    const [images, setImages] = useState([
        {
            id: 1,
            url: "https://picsum.photos/id/1/300"
        },
        {
            id: 2,
            url: "https://picsum.photos/id/2/300"
        },
        {
            id: 3,
            url: "https://picsum.photos/id/3/300"
        },
        {
            id: 4,
            url: "https://picsum.photos/id/4/300"
        },
        {
            id: 5,
            url: "https://picsum.photos/id/5/300"
        },
        {
            id: 6,
            url: "https://picsum.photos/id/6/300"
        },
        {
            id: 7,
            url: "https://picsum.photos/id/7/300"
        },
    ]);

    // const [gridItems, setGridItems] = useState([])
    // useEffect(() => {
    //     let imgList = []
    //     for (let i = 0 ; i <= 15 ; i++) {
    //         imgList.push("https://picsum.photos/300?random=" + i.toString())
    //     }
    //     const items = imgList.map((img,i) => {
    //         return (
    //             <Link to={"/edit/"+ i.toString()} key={i}>
    //                 <img className={styles.gridCell} src={img} alt={i} key={i} />
    //             </Link>
    //         )
    //     })

    //     setGridItems(items)

    // },[])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = images[dragIndex];
        setImages(update(images, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragCard],
            ],
        }));
    }, [images]);

    const renderCard = (image, index) => {
        return (
                <GridImage key={image.id} index={index} id={image.id} moveCard={moveCard} />
            );
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.grid}>
                {/* <GridSquare pos="1"> */}
                    {/* <p>image</p> */}
                {/* <GridImage id="123" /> */}
                {/* </GridSquare> */}
                {/* { gridItems } */}
                { images.map((card, i) => renderCard(card, i)) }
            </div>
        </DndProvider>
    )
}

export default GridGallery