import React, { useState } from 'react'
import img1 from '../assets/image-product-1-thumbnail.jpg'
import img2 from '../assets/image-product-2-thumbnail.jpg'
import img3 from '../assets/image-product-3-thumbnail.jpg'
import img4 from '../assets/image-product-4-thumbnail.jpg'
import './imageGallery.css'
import nextImgBtn from '../assets/icon-next.svg'
import prevImgBtn from '../assets/icon-previous.svg'
// import img5 from '../assets/image-product-1.jpg'

const ImageGalley2 = () => {


    const images2 = [
        { src: img1, alt: 'sneaker image 1' },
        { src: img2, alt: 'sneaker image 2' },
        { src: img3, alt: 'sneaker image 3' },
        { src: img4, alt: 'sneaker image 4' },
        // { src: img5, alt: 'sneaker image 5'}
    ]

    const [currentImageIndex, setCurrentImageIndex] = useState(0)


    const handleNextImage = () => {

        setCurrentImageIndex((prevIndex) =>

            prevIndex === images2.length - 1 ? 0 : prevIndex + 1)
        // console.warn('handleNext works', handleNextImage)


        // {console.log('image2.length', images2.length)}
    }
    const handlePrevImage = () => {

        setCurrentImageIndex((prevIndex) =>

            prevIndex === 0 ? images2.length - 1 : prevIndex - 1)
        // console.warn('handPrev works', handlePrevImage)
    }





    return (




        <div id='image-gall2-comp-div'>

            <div className='product-gallery' style={{ width: '100%' }}>

                <img src={images2[currentImageIndex].src}
                    alt={images2[currentImageIndex].alt}
                    className='product-image' />


                <div className='gallery-controls'>

                    <button onClick={handlePrevImage} style={{ outline: 'none' }}>
                        <img src={prevImgBtn} alt="" />
                    </button>



                    <button onClick={handleNextImage} style={{ outline: 'none' }}>
                        <img src={nextImgBtn} alt="" />
                    </button>

                    {console.log('')}
                </div>
            </div>

        </div>

    )
}

export default ImageGalley2
