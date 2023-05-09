/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    let total = 0;
    let totalShipping = 0;
    let quantity = 0 ;
    for (const product of cart) {
        product.quantity = product.quantity || 1 ;
        total = total + product.price * product.quantity ;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity
    }
    const tax = total *7/100;
    const grandTotal = total + totalShipping + tax ;

    // const{cart} =props;
    return (
        <div className='cart'>
            <h3 >Order summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Shipping: {totalShipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;