import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb.js'

const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handelRemoveFromCart = id => {
        const remainCart = cart.filter(ct => ct.id !== id)
        setCart(remainCart)
        removeFromDb(id)

    }
    const removeShoppingCartHandler = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className='review-product-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveFromCart={handelRemoveFromCart}
                    />)
                }
            </div>
            <div className='review-container'>
                <Cart
                    cart={cart}
                    removeShoppingCartHandler={removeShoppingCartHandler}
                ></Cart>
            </div>
        </div>
    );
};

export default Order;