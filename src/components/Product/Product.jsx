/* eslint-disable react/prop-types */
// import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, addToCart }) => {

    return (
        <div className='product'>
            <img src={product?.img} alt="" />

            <div className='product-info'>
                <h6 className='product-name'>{product?.name}</h6>
                <p>Price: {product?.price} $</p>
                <p>Manufacturer: {product?.seller}</p>
                <p>Rating {product?.ratings}</p>
            </div>
            {/* rapper korta hoba */}
            <button onClick={() => addToCart(product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;