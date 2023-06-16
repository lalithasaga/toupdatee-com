import React, { useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import { CartContext } from './CartContext';
import Modal from './Modal';

const Cart = (props) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const cartItemsList = cartItems.map((item, index) => (
    <CartItem item={item} removeFromCart={removeFromCart} key={index} />
  ));

  return (
    <Modal onClose={props.onClose}>
      <div className="CartPopup">
        <h3>Cart</h3>
        {cartItems.length > 0 ? (
          <div>{cartItemsList}</div>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="actions">
          <button className="button" onClick={props.onClose}>
            Close
          </button>
          <button className="button">Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;