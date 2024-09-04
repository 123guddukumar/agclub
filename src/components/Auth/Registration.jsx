import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/Auth.css';


function Registration({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    password: '',
    invitationCode: '',
    otp: '',
  });

  // Update form data state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle sending OTP
  const handleSendOtp = (e) => {
    e.preventDefault();
    // Logic to send OTP to the provided phone number
    console.log('Sending OTP to', formData.phone);
    // Add OTP sending logic here (API call, etc.)
  };

  // Handle registration form submission
  const handleRegister = (e) => {
    e.preventDefault();
    // Logic to handle user registration
    console.log('Registering with', formData);
    // Add registration logic here (API call, etc.)
    setIsAuthenticated(true); // Set authenticated to true upon successful registration
    navigate('/home'); // Redirect to home after registration
  };

  return (
  <div className="container">
      <div className="auth-container registration-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
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
        <input
          type="text"
          name="invitationCode"
          placeholder="Enter invitation code"
          value={formData.invitationCode}
          onChange={handleChange}
        />
        <input
          type="text"
          name="otp"
          placeholder="Enter OTP"
          value={formData.otp}
          onChange={handleChange}
          required
        />

        <button type="button" onClick={handleSendOtp}>
          Send OTP
        </button>

        <button type="submit">Register</button>
      </form>

      {/* Link to navigate to the login page if the user already has an account */}
      <p>
        Already have an account? <button onClick={() => navigate('/login')}>Login</button>
      </p>
    </div>
  </div>
  );
}

export default Registration;
