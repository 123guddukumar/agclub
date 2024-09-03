import React from 'react';
import '../styles/css/reset.css';
import '../styles/css/style.css';
import '../styles/css/layui.css';
import '../styles/css/swiper-bundle.min.css';

// Import images from the assets folder
import logoImg from '../assets/images/logo.png';
import bannerBgImg from '../assets/images/banner-bg.png';
import m1Img from '../assets/images/m_1.png';
import m2Img from '../assets/images/m_2.png';
import m3Img from '../assets/images/m_3.png';
import m11Img from '../assets/images/m_11.png';
import m10Img from '../assets/images/m_10.png';
import m5Img from '../assets/images/m_5.png';
import m6Img from '../assets/images/m_6.png';
import m7Img from '../assets/images/m_7.png';
import m9Img from '../assets/images/m_9.png';
import m8Img from '../assets/images/m_8.png';
import s2Img from '../assets/images/s_2.png';
import s1Img from '../assets/images/s_1.png';
import f1gImg from '../assets/images/f_1g.png';
import f2Img from '../assets/images/f_2.png';
import f3Img from '../assets/images/f_3.png';
import f4Img from '../assets/images/f_4.png';
import f5Img from '../assets/images/f_5.png';

function Profile() {
  return (
    <div className="bgColor">
      <div className="top">
        <div className="top-tit">My</div>
      </div>
      <div className="my-main">
        <div className="my-top">
          <div className="my-top-left" id="avatar">
            <img src={logoImg} alt="Avatar" />
          </div>
          <div className="my-top-right">
            <h3>ID : 164773</h3>
            <p>+917324086918</p>
            <p>
              <i className="layui-icon layui-icon-star-fill"></i>
            </p>
          </div>
        </div>
        <div className="my-income-tab">
          <img src={bannerBgImg} alt="Banner" />
          <div className="my-income-list">
            {/* Income Items */}
            {['Withdraw Balance', 'Recharge Balance', 'Total Recharge', 'Total Withdraw', 'Total Assets', 'Total Income', 'Today Income', 'Team Income', 'TEAM B', 'TEAM C', 'TEAM D'].map((item, index) => (
              <div className="my-income-item" key={index}>
                <h3>₹ 0</h3>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-income-nav">
          <ul>
            <li>
              <a href="#">
                <img src={m1Img} alt="Record" />
                Record
              </a>
            </li>
            <li>
              <a href="#">
                <img src={m2Img} alt="Account" />
                Account
              </a>
            </li>
            <li>
              <a href="#">
                <img src={m3Img} alt="Order" />
                Order
              </a>
            </li>
          </ul>
        </div>
        <div className="my-top-nav">
          <ul>
            {[
              { img: m11Img, text: 'Deposit' },
              { img: m10Img, text: 'Contract' },
              { img: m5Img, text: 'Bonus' },
              { img: m6Img, text: 'About' },
              { img: m7Img, text: 'Password' },
              { img: m9Img, text: 'Service' },
              { img: m8Img, text: 'Download' },
            ].map((item, index) => (
              <li key={index}>
                <a href="#">
                  <img src={item.img} alt={item.text} />
                  <p>{item.text}</p>
                  <i className="layui-icon layui-icon-right" style={{ fontSize: '22px', color: '#333' }}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-top-out">
          <a href="/login/">Logout</a>
        </div>
      </div>
      <div className="z-service hide">
        <div className="service-box">
          <h3>CUSTOMER SERVICE</h3>
          <a href="https://wa.me/+918084661813" target="_blank" className="service-item" rel="noopener noreferrer">
            <img src={s2Img} alt="WHATSAPP SERVICE" />
            WHATSAPP SERVICE
            <span>GO</span>
          </a>
          <a href="https://t.me/ag" target="_blank" className="service-item" rel="noopener noreferrer">
            <img src={s1Img} alt="TELEGRAM SERVICE" />
            TELEGRAM SERVICE
            <span>GO</span>
          </a>
          <a href="https://t.me/agclub" target="_blank" className="service-item" rel="noopener noreferrer">
            <img src={s2Img} alt="OFFICIAL CHANNEL" />
            OFFICIAL CHANNEL
            <span>GO</span>
          </a>
          <button type="button" className="service-close">CLOSE</button>
        </div>
      </div>
      <div className="foot">
        <ul>
          <li className="cur">
            <a href="/index.html">
              <img src={f1gImg} alt="home" />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="/product/product_source/product.html">
              <img src={f2Img} alt="Product" />
              <p>Product</p>
            </a>
          </li>
          <li>
            <a href="/team/team_source/team.html">
              <img src={f3Img} alt="Team" />
              <p>Team</p>
            </a>
          </li>
          <li>
            <a href="/official/official_source/official.html">
              <img src={f4Img} alt="Official" />
              <p>Official</p>
            </a>
          </li>
          <li>
            <a href="/profile/profile_source/user.html">
              <img src={f5Img} alt="My" />
              <p>My</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
