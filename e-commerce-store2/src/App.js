import React, { useState, createContext, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./styles.css";

// Create a Cart Context
const CartContext = createContext();

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) navigate("/products");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const ProductsPage = () => {
  const { cart, addToCart } = useContext(CartContext);
  const products = [
    { id: 1, name: "Mobile", price: 500, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Watch", price: 100, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Laptop", price: 1000, img: "https://via.placeholder.com/150" }
  ];

  return (
    <div className="products-container">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart ({cart.length})</Link>
    </div>
  );
};

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : 
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}
      <Link to="/payment">Proceed to Payment</Link>
    </div>
  );
};

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <h2>Payment</h2>
      <p>Payment Gateway Coming Soon!</p>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;







