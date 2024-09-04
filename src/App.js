import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import Team from './components/Team';
import Official from './components/Official';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Registration from './components/Auth/Registration';
import Login from './components/Auth/Login';
import PrivateRoute from './components/Auth/PrivateRoute';
import { AuthProvider } from './components/Auth/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/" element={<PrivateRoute element={<Home />} />} />
            <Route path="/product" element={<PrivateRoute element={<Product />} />} />
            <Route path="/team" element={<PrivateRoute element={<Team />} />} />
            <Route path="/official" element={<PrivateRoute element={<Official />} />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
