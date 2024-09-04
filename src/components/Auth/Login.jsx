import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Auth.css';

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  // Update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login validation logic here
    console.log('Logging in with', formData);

    // Example: Mock authentication check
    if (formData.phone === '1234567890' && formData.password === 'password') {
      setIsAuthenticated(true); // Set authenticated to true upon successful login
      navigate('/home'); // Redirect to home after login
    } else {
      alert('Invalid phone number or password. Please try again.');
    }
  };

  return (
<div className="container">
<div className="auth-container login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      {/* Link to navigate back to the registration page if the user doesn't have an account */}
      <p>
        Don't have an account? <button onClick={() => navigate('/register')}>Register</button>
      </p>
    </div>
</div>
  );
}

export default Login;
