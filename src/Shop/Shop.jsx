/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../components/Product/Product';
import Cart from '../components/Cart/Cart';
import { addToDb, getShoppingCart } from '../assets/utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCard] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const saveCart = []
        const storeCart = getShoppingCart();
        // step1: get id of the added product
        for (const id in storeCart) {
            // step 2: get product form products by using id
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                //  step 3: add quantity
                const quantity = storeCart[id]
                addedProduct.quantity = quantity;
                // step 4: add the addedProduct to the save cart
                saveCart.push(addedProduct)
            }
        }
        // step 5: set the cart
        setCard(saveCart)
    }, [products])


    const addToCart = (product) => {
        // spred operator
        const newCard = [...cart, product]
        setCard(newCard)
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>

            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>

            <div className='cart-continer'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;