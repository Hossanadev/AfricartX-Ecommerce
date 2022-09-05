import React from 'react';
import Products from './Products';
import Signup from './Signup';
import Cart from './Cart';
import { Routes, Route } from 'react-router-dom';

const Routing = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleClearCart}) => {

  return (

    <div>

                <Routes>
                    <Route path="/" element={<Products productItems={productItems} handleAddProduct={handleAddProduct} />} />
                </Routes>

                <Routes>
                    <Route path="/sign-up" element={<Signup />} />
                </Routes>

                <Routes>
                    <Route path="/cart" element={<Cart cartItems={cartItems}
                                        handleAddProduct={handleAddProduct}
                                        handleClearCart={handleClearCart} 
                                        handleRemoveProduct={handleRemoveProduct}/>} />
                </Routes>

    </div>

  )

}

export default Routing;