import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart 🛒</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: '15px', borderBottom: '1px solid #eee', padding: '15px 0' }}>
            <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
            <p><strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
            <button onClick={() => dispatch(removeItem(item.name))} style={{ color: 'red', cursor: 'pointer' }}>Remove</button>
          </div>
        ))
      )}
      <h3>Total: ${totalCost.toFixed(2)}</h3>
      <button onClick={onContinueShopping} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;