import React, { useState } from 'react'
import './lightbox.css'

import imgProd1 from '../assets/image-product-1.jpg';
import imgProd2 from '../assets/image-product-2.jpg';
import imgProd3 from '../assets/image-product-3.jpg';
import imgProd4 from '../assets/image-product-4.jpg';


const Lightbox = ({ render, setRender, isOpen, onClose }) => {



    if (!isOpen) return null;





    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>&times;</span>
                <div className="main-image-lightbox">
                    <img src={render} alt="Selected Product" />
                </div>
                <div className="thumbnails-lightbox">

                </div>
                <div className='img'>
                    <img src={imgProd1} alt="Thumbnail 1" onClick={() => setRender(imgProd1)} />
                    <img src={imgProd2} alt="Thumbnail 2" onClick={() => setRender(imgProd2)} />
                    <img src={imgProd3} alt="Thumbnail 3" onClick={() => setRender(imgProd3)} />
                    <img src={imgProd4} alt="Thumbnail 4" onClick={() => setRender(imgProd4)} />
                </div>
            </div>
        </div>
    );
};

export default Lightbox
