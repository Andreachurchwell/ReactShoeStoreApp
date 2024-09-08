import React from 'react'
import productData from '../assets/product.json'
import './cartDropdown.css'
import image from '../assets/image-product-1-thumbnail.jpg'
import trashBtn from '../assets/icon-delete.svg'

const CartDropdown = ({ quantity, setQuantity }) => {
    // console.log('productData', productData)


    const discountPrice = productData.product.price / 2
    const totalPrice = discountPrice.toFixed(2) * quantity





    const handleTrash = () => {
        console.log('handleTrash works')
        setQuantity(0)
    }

    const handleCheckout = () => {
        alert('THE END!!!!!!!!!!!!!!')
    }



    return (




        <div id='cart-dropdown-comp-div'>

            <div className="cart-dropdown">

                <h4>Cart</h4>

                {/* {console.log('quantity', quantity)} */}
                {quantity > 0 ? (
                    <>
                        <div className="cart-item">

                            <img src={image} alt="" id='i' />

                            <p className='style-info'>{productData.product.title}</p>

                            <p className='cart-info' style={{ gap: '2em' }}>

                                ${discountPrice.toFixed(2)} x {quantity} = ${totalPrice}

                            </p>

                            <button className='handle-trash-btn' onClick={handleTrash}>

                                <img src={trashBtn} alt="Trash" />

                            </button>

                        </div>

                        <button onClick={handleCheckout} className="checkout-button" style={{ backgroundColor: 'darkorange' }}>Checkout</button>

                    </>

                ) : (
                    <p className='empty'>Your cart is empty.</p>

                )}

            </div>

        </div>
    )
}

export default CartDropdown
