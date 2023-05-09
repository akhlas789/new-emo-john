// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Category.css'
import logo from '../../assets/images/Logo.svg';

const Category = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='category'>
                <a href="/shop">Order Review</a>
                <a href="/order">Order</a>
                <a href="/manage">Manage Inventory</a>
                <a href="login">Login</a>
            </div>
        </nav>
    );
};

export default Category;