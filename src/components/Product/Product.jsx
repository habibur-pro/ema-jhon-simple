import React, { useEffect, useState } from 'react'
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { img: image, name, price, seller, ratings } = props.product
    return (
        <div className='product-card'>
            <img src={image} alt="" />
            <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button
                onClick={() => (props.handlerAdToCart(props.product))}
                className='btn-addCart'
            >
                Add to cart
                <span style={{ marginLeft: '10px' }}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </span>
            </button>
        </div>
    )
}
export default Product