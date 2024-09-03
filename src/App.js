import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/HomeLinks';
import Product from './components/Product';
import Team from './components/Team';
import Official from './components/Official';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/official" element={<Official />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* Include the footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
