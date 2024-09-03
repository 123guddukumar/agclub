import React from 'react';
import logo from '../assets/images/logo.png';
import '../styles/css/layui.css';
import '../styles/css/reset.css';
import '../styles/css/style.css';
import '../styles/css/swiper-bundle.min.css';


const Header=()=>(<div className="top" > <a href="/index.html" className="topLeft" > <img src= {
        logo
    }

    alt="Logo" /> </a> <button type="button" className="lang" > <i className="layui-icon layui-icon-website" > English</i> </button> </div>);

export default Header;