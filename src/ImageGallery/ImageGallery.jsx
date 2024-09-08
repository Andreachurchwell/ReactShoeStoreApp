import React, { useState } from 'react'
import './ImageGallery.css'



const ImageGallery = ({ images }) => {


  // const sneakerImages = [img1, img2, img3, img4]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)





  const handleNextImage = () => {
    // setCurrentImageIndex((prev) => prev === sneakerImages.length - 1 ? 0 : prev + 1)
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevImage = () => {
    // setCurrentImageIndex((prev) =>  prev === sneakerImages.length - 1 ? 0 : prev - 1)
    // setCurrentImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  return (

    <div className='photo-carousel'>
      {console.warn('currentImg', images)}
      {/* <button onClick={handlePrevImage} className='gallery-btn'></button> */}
      {/* <img src={images[currentImageIndex].src}
        alt={images[currentImageIndex].alt}
        className='product-image' /> */}
      <img src="./src/assets/image-product-1-thumbnail.jpg" alt="" />
      <img src="src/assets/image-product-2-thumbnail.jpg" alt="" />
      <img src="src/assets/image-product-3-thumbnail.jpg" alt="" />
      <img src="src/assets/image-product-4-thumbnail.jpg" alt="" />

      {/* <img src={images[currentImageIndex]} alt='product' /> */}
      <div className='gallery-btns'>
        <button onClick={handlePrevImage}>



          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
          </svg>
        </button>


        {/* <img src={images[currentImageIndex]} /> */}


        <button onClick={handleNextImage}><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" />
        </svg>
        </button>
      </div>
      <img src={currentImageIndex} />
      {/* {sneakerImages.map((image, index) => (
        <img key={index}
          src={image}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => setCurrentImageIndex(image)} />
      ))} */}

    </div>
  )
}

export default ImageGallery
