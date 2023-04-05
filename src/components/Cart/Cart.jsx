import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Cart = ({ cart, removeShoppingCartHandler, children }) => {
    // method 1 :
    let totalPrice = 0
    let shippingTotal = 0
    let quantity = 0
    for (const product of cart) {
        product.quantity = product.quantity || 1
        const price = product.price;
        totalPrice = totalPrice + price * product.quantity
        shippingTotal = shippingTotal + product.shipping
        quantity = quantity + product.quantity

    }

    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + shippingTotal + tax

    // method 2 :
    // const cartReducer = (previous,current)=>previous + current.price
    // const totalPrice = cart.reduce(cartReducer,0)

    return (
        <div className='cart'>
            <h3 className='cart-title'>Order summary</h3>
            <p>Selected Item:{quantity} </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingTotal}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            <button className='btn-cart-clear' onClick={removeShoppingCartHandler}>
                <span>Clear Cart</span>
                <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
            </button>
            {children}
        </div>
    );
};

export default Cart;