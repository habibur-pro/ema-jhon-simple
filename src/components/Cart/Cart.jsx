import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // method 1 :
//     let totalPrice = 0
//    for(const product of cart){
//     const price = product.price;
//     totalPrice = totalPrice + price
//    }

// method 2 :
const cartReducer = (previous,current)=>previous + current.price
const totalPrice = cart.reduce(cartReducer,0)
   
return (
        <div className='cart'>
            <h3 className='cart-title'>Order summary</h3>
            <p>Selected Item:{cart.length} </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <h3>Grand Total: </h3>
        </div>
    );
};

export default Cart;