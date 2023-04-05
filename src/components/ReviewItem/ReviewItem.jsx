import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css'

const ReviewItem = ({ product, handelRemoveFromCart }) => {
    const { name, img, quantity, price, id } = product
    return (
        <div className='review-item'>
            <div className='item-details'>
                <img src={img} alt="" />
                <div className='item-info'>
                    <h3 className='product-title'>{name}</h3>
                    <p>Price: <span className='text-orange'>${price}</span></p>
                    <p>Quantity: <span className='text-orange'>{quantity}</span></p>
                </div>
            </div>
            <button onClick={() => handelRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashCan} />
            </button>
        </div>
    );
};

export default ReviewItem;