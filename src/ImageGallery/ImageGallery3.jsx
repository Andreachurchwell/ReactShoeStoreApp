import React, { useState } from 'react'
import './imageGallery.css'

import imgProd1 from '../assets/image-product-1.jpg'
import imgProd1thumb from '../assets/image-product-1-thumbnail.jpg'

import imgProd2 from '../assets/image-product-2.jpg'
import imgProd2thumb from '../assets/image-product-2-thumbnail.jpg'

import imgProd3 from '../assets/image-product-3.jpg'
import imgProd3thumb from '../assets/image-product-3-thumbnail.jpg'

import imgProd4 from '../assets/image-product-4.jpg'
import imgProd4thumb from '../assets/image-product-4-thumbnail.jpg'
import Lightbox from '../Lightbox/Lightbox'



const ImageGallery3 = () => {

    const [render, setRender] = useState(imgProd1)
    const [lightboxOpen, setLightboxOpen] = useState(false)

    const openLightbox = () => setLightboxOpen(true);
    const closeLightbox = () => setLightboxOpen(false);


    return (



        <div id='imageG3'>

            {/* <div className='main-image'>
                <img src={render} alt="" />
                </div> */}
            {/* <div className='thumbnails'>
                <button onClick={() => setRender(imgProd1thumb)}></button>
                <button onClick={() => setRender(imgProd2thumb)}></button>
                <button onClick={() => setRender(imgProd3thumb)}></button>
                <button onClick={() => setRender(imgProd4thumb)}></button>
                
                </div>  */}
            {/* <div id='imageG3'> */}
            {/* Main image */}
            <div className="main-image" onClick={openLightbox}>
                <img src={render} alt="Selected Product" />
            </div>

            {/* Thumbnails */}
            <div className="thumbnails">
                <img
                    src={imgProd1thumb}
                    alt="Thumbnail 1"
                    onClick={() => setRender(imgProd1)}
                />
                <img
                    src={imgProd2thumb}
                    alt="Thumbnail 2"
                    onClick={() => setRender(imgProd2)}
                />
                <img
                    src={imgProd3thumb}
                    alt="Thumbnail 3"
                    onClick={() => setRender(imgProd3)}
                />
                <img
                    src={imgProd4thumb}
                    alt="Thumbnail 4"
                    onClick={() => setRender(imgProd4)}
                />
                <Lightbox render={render}
                    setRender={setRender}
                    isOpen={lightboxOpen}
                    onClose={closeLightbox} />
            </div>
            {/* </div> */}

        </div>

    )
}

export default ImageGallery3
