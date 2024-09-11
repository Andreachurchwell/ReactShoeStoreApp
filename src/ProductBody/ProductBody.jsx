import React, { useState } from 'react'
import './ProductBody.css'
import productData from '../assets/product.json'
import minusIcon from '../assets/icon-minus.svg'
import plusIcon from '../assets/icon-plus.svg'
import cartIcon from '../assets/icon-cart.svg'
import CartDropdown from '../CartDropdown/CartDropdown'
import ImageGallery3 from '../ImageGallery/ImageGallery3'
import whiteIcon from '../assets/whiteIcon.svg'




const ProductBody = ({ setQuantity, quantity, cartItems }) => {


  const discountPrice = productData.product.price / 2
  const [isCartVis, setIsCartVis] = useState(false)






  const handlePlusIcon = () => {

    setQuantity(quantity + 1)

  }

  const handleMinusIcon = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

 

  const handleAddToCart = () => {
    setQuantity(quantity)
  };

  const toggleCartVis = () => {
    setIsCartVis((prev) => !prev);
  };


  return (

    <>




      <div id='product-body-comp-div'>

        <ImageGallery3 />

        <div id='productBodyContainer'>

          {/* {console.log('productData', productData)} */}
          <p style={{ color: 'orange', margin: '2%', fontWeight: 'bold' }}>SNEAKER COMPANY</p>
          <h2>{productData.product.title}</h2>
          <p>{productData.product.description}</p>
          <div className='saleoff-background'>

            <p style={{ fontWeight: 'bolder' }}>${discountPrice.toFixed(2)}</p>
            <p style={{ color: 'orange' }}>{productData.product.saleOff}%</p>

            <p style={{ textDecoration: 'line-through', color: 'grey' }}>${productData.product.price.toFixed(2)}</p>
          </div>




          <div className='quanity-container'>

            <button className='minus-btn' onClick={handleMinusIcon} >
              <img src={minusIcon} alt="" />
            </button>

            <span>
              <p style={{ fontWeight: 'bold', fontSize: '15px' }}>
                {quantity}
              </p>
            </span>
            <button className='plus-btn' onClick={handlePlusIcon}>

              <img src={plusIcon} alt="" />
            </button>




            <div className='add-to-cart'>

              <button className='add-to-cart-btn' onClick={handleAddToCart}>
                <img src={whiteIcon} alt="" style={{ width: '15px', marginRight: '4px' }} className='cartIcon' onClick={toggleCartVis} />
                <span className='addToCart'>Add To Cart</span>
              </button>

            </div>
          </div>


        </div>


        {isCartVis && (
          <CartDropdown onClose={toggleCartVis} cartItems={cartItems} quantity={quantity} setQuantity={setQuantity} />
        )}
      </div>

    </>


  )
}






export default ProductBody
