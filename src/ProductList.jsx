import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

const plants = [
  { name: 'Monstera', price: 15.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400', description: 'Tropical houseplant' },
  { name: 'Snake Plant', price: 12.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400', description: 'Easy to care for' },
  { name: 'Peace Lily', price: 10.99, image: 'https://images.unsplash.com/photo-1593691512429-cf42ab1b7a43?w=400', description: 'Beautiful white flowers' },
  { name: 'Pothos', price: 8.99, image: 'https://images.unsplash.com/photo-1598880940942-8cc1d2a9071d?w=400', description: 'Perfect for beginners' },
  { name: 'Spider Plant', price: 9.99, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400', description: 'Air purifying plant' },
  { name: 'Aloe Vera', price: 7.99, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400', description: 'Medicinal succulent' },
];

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1>Paradise Nursery 🌿</h1>
            <button onClick={() => setShowCart(true)} style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>
              🛒 Cart ({totalItems})
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
            {plants.map(plant => (
              <div key={plant.name} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center' }}>
                <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }} />
                <h3>{plant.name}</h3>
                <p>{plant.description}</p>
                <p><strong>${plant.price}</strong></p>
                <button onClick={() => dispatch(addItem(plant))} style={{ padding: '8px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;