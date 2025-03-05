import { useState } from "react";


const LOGIN_ID = "user123"; 

export default function App() {
  const [inputId, setInputId] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (inputId === LOGIN_ID) {
      setError("Login successful!");
    } else {
      setError("Invalid login ID. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter Login ID"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}






