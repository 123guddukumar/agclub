import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/f_1g.png';
import productIcon from '../assets/images/f_2.png';
import teamIcon from '../assets/images/f_3.png';
import officialIcon from '../assets/images/f_4.png';
import myIcon from '../assets/images/f_5.png';
import '../styles/css/layui.css';
import '../styles/css/reset.css';
import '../styles/css/style.css';
import '../styles/css/swiper-bundle.min.css';

const Footer = () => (
  <div className="foot">
    <ul>
      <li className="cur"><Link to="/"><img src={homeIcon} alt="Home" /><p>Home</p></Link></li>
      <li><Link to="/product"><img src={productIcon} alt="Product" /><p>Product</p></Link></li>
      <li><Link to="/team"><img src={teamIcon} alt="Team" /><p>Team</p></Link></li>
      <li><Link to="/official"><img src={officialIcon} alt="Official" /><p>Official</p></Link></li>
      <li><Link to="/profile"><img src={myIcon} alt="My" /><p>My</p></Link></li>
    </ul>
  </div>
);

export default Footer;
