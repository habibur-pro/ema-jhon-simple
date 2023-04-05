import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Order.css'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

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
                >
                    <Link to='/checkout'>
                        <button className='btn-review'>
                            <span>Proceed Checkout</span>
                            <FontAwesomeIcon className='checkout-icon' icon={faCreditCard} />
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;