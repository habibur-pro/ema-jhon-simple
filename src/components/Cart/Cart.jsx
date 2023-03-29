import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // method 1 :
    let totalPrice = 0
    let shippingTotal = 0
   for(const product of cart){
    const price = product.price;
    totalPrice = totalPrice + price
    shippingTotal = shippingTotal + product.shipping
   }

   const tax = totalPrice * 7 / 100; 
   const grandTotal = totalPrice + shippingTotal + tax

// method 2 :
// const cartReducer = (previous,current)=>previous + current.price
// const totalPrice = cart.reduce(cartReducer,0)
   
return (
        <div className='cart'>
            <h3 className='cart-title'>Order summary</h3>
            <p>Selected Item:{cart.length} </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingTotal}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Cart;