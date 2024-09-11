import React, { useState } from 'react'
import './productPage.css'
import Header from '../Header/Header'
// import ImageGallery from '../ImageGallery/ImageGallery'
import ProductBody from '../ProductBody/ProductBody'

import ImageGalley2 from '../ImageGallery/ImageGalley2'
import CartDropdown from '../CartDropdown/CartDropdown'

import Lightbox from '../Lightbox/Lightbox'
// import ImageGallery3 from '../ImageGallery/ImageGallery3'


const ProductPage = () => {
  const [quantity, setQuantity] = useState(0)

  const [isCartVis, setIsCartVis] = useState(false)



  const addToCart = () => {
  
    setIsCartVis(true)

  }

  const toggleCartVis = () => {
    setIsCartVis(!isCartVis)
   
  }




  return (
    <div id='product-page-comp-div'>
      <div id='product-page'>

        <Header toggleCartVis={toggleCartVis} quantity={quantity} />

        {console.log('quan', quantity)}
        <ImageGalley2 />
        {/* <ImageGallery3 /> */}
        <Lightbox />
        <ProductBody addToCart={addToCart} quantity={quantity} setQuantity={setQuantity} />
        {isCartVis && <CartDropdown quantity={quantity} setQuantity={setQuantity} />}
      </div>


    </div>

  )

}

export default ProductPage
