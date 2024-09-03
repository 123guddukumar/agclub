import React from 'react';
import Swiper from 'swiper/bundle';
import '../styles/css/layui.css';
import '../styles/css/reset.css';
import '../styles/css/style.css';
import '../styles/css/swiper-bundle.min.css';

const Notice = () => {
  React.useEffect(() => {
    new Swiper('.swiper', {
      direction: 'vertical',
      loop: true,
      autoplay: { delay: 2000 },
    });
  }, []);

  return (
    <div className="home-notice">
      <i className="layui-icon layui-icon-speaker"></i>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">91****8668 10:50:39 Recharge ₹ 21880 success</div>
          <div className="swiper-slide">98****5151 10:50:39 Recharge ₹ 9780 success</div>
          {/* Add more slides as needed */}
        </div>
      </div>
    </div>
  );
};

export default Notice;
