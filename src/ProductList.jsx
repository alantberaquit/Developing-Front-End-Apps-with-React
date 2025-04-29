import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Product data organized by categories
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
        },
        // Add more plants as needed...
      ],
    },
    // Add more categories...
  ];

  // Handle Add to Cart click
  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  // Handle Cart icon click
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  // Handle Continue Shopping button
  const handleContinueShopping = () => {
    setShowCart(false);
  };

  // Handle Plants link click (resets cart view)
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true);
    setShowCart(false);
  };

  // Navbar styling objects
  const styleObj = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
  };

  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };

  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery Logo" />
            <a href="#" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>

        <div style={styleObjUl}>
          <div>
            <a href="#" onClick={handlePlantsClick} style={styleA}>Plants</a>
          </div>
          <div>
            <a href="#" onClick={handleCartClick} style={styleA}>
              <h1 className="cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
                        fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <text x="90" y="155" fontFamily="Verdana" fontSize="90" fill="white">
                    {cart.numOfItems}
                  </text>
                </svg>
              </h1>
            </a>
          </div>
        </div>
      </div>

      {/* Product List or Cart View */}
      {!showCart ? (
        <div>
          {plantsArray.map((section, sectionIndex) => (
            <div className="product-grid" key={sectionIndex}>
              <h2 className="plant_heading">{section.category}</h2>
              <div className="product-list">
                {section.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <h3 className="product-title">{plant.name}</h3>
                    <img className="product-image" src={plant.image} alt={plant.name} />
                    <p className="product-price">{plant.cost}</p>
                    <p>{plant.description}</p>
                    {cart.items.some(item => item.name === plant.name) ? (
                      <button className="product-button added-to-cart">Added to Cart</button>
                    ) : (
                      <button className="product-button" onClick={() => handleAddToCart(plant)}>
                        Add to Cart
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
