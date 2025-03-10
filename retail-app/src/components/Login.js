import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // ✅ Import CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      alert('Login successful!');
      navigate('/dashboard'); // Replace with actual dashboard route
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p><a href="/signup">Don't have an account? Sign up</a></p>
    </div>
  );
};

export default Login;