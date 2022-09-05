import React, { useState } from 'react';
import data from './Components/Data';
import Header from './Components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Components/Routing';
import Footer from './Components/Footer';

const App = () => {

  const {productItems} = data;

  const [cartItems, setCartItems] = useState ([]);

  const handleAddProduct = (product) => {
      const productExist = cartItems.find((item) => item.id === product.id);

      if (productExist) {
        setCartItems (cartItems.map((item) => item.id === product.id ?
        {...productExist, quantity: productExist.quantity + 1}: item)
        );
      }
        else {
          setCartItems ([...cartItems, {...product, quantity: 1}])
      }
  }

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);

    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === product.id ? 
      {...product, quantity: productExist.quantity -1 } : item
      ));
    }
  }

  const handleClearCart = () => {
    setCartItems([]);
  }

  return (

    <div className="App">

        <Router>

          <Header cartItems={cartItems}/>
          <Routing productItems={productItems}
                   cartItems={cartItems}
                   handleAddProduct={handleAddProduct}
                   handleRemoveProduct={handleRemoveProduct}
                   handleClearCart={handleClearCart}
          />
          <Footer />
        </Router>

    </div>

  );

}

export default App;