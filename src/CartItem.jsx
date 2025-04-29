import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Helper to parse item cost (removes '$' symbol)
  const parseItemCostToInteger = (itemCost) => {
    return parseInt(itemCost.replace('$', ''), 10);
  };

  // Calculate total amount in cart
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const itemCost = parseItemCostToInteger(item.cost);
      return total + itemCost * item.quantity;
    }, 0);
  };

  // Handle incrementing item quantity
  const handleIncrement = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    dispatch(updateQuantity(updatedItem));
  };

  // Handle decrementing item quantity
  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item));
    } else {
      const updatedItem = { ...item, quantity: item.quantity - 1 };
      dispatch(updateQuantity(updatedItem));
    }
  };

  // Handle removing item from cart
  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  // Calculate total cost for a single cart item
  const calculateTotalCost = (item) => {
    const itemCost = parseItemCostToInteger(item.cost);
    return item.quantity * itemCost;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>

      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />

            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>

              <div className="cart-item-quantity">
                <button
                  className="cart-item-button"
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button"
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>

              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Shopping and Checkout Buttons */}
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={onContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          onClick={() => alert('Checkout functionality coming soon!')}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
