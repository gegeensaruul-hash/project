import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  return (
    <div>
      {!showProducts ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <button className="get-started-btn" onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;