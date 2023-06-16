import React, { useContext } from 'react';
import './CartButton.css';
import { CartContext } from './CartContext';

const CartButton = ({ onClick }) => {
  const { cartItems } = useContext(CartContext);

  const numberOfCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <button className="cart-btn-bottom" onClick={onClick}>
      <span className="cart-bottom">
        <span>Your Cart</span>
        <span>({numberOfCartItems})</span>
      </span>
    </button>
  );
};

export default CartButton;