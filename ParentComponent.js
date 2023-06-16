import React, { useState } from 'react';
import Cart from './Cart';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';

const ParentComponent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Header />
      <ProductList />
      <button onClick={openCart}>Open Cart</button>
      {isCartOpen && <Cart onClose={closeCart} />}
      <Footer />
    </div>
  );
};

export default ParentComponent;