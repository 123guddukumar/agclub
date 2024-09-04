import React, { useEffect } from 'react';
import '../styles/css/reset.css';
import '../styles/css/style.css';
import '../styles/css/layui.css';
import '../styles/css/swiper-bundle.min.css';
import Swiper from 'swiper/bundle';

import iconWithdraw from '../assets/images/icon_4.png';
import iconRecharge from '../assets/images/icon_5.png';
import bannerBg from '../assets/images/banner-bg.png';

function Home() {
    useEffect(() => {
        new Swiper('.swiper', {
            slidesPerView: 1, // Show only one slide
            spaceBetween: 0, // No space between slides
            pagination: {
                el: '.swiper-pagination', // Element for pagination dots (optional)
                clickable: true, // Allows clicking on pagination dots (optional)
            },
        });
    }, []);

    return (
         <div className="home-main">
            <div className="swiper home-banner">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="https://files.aaatlab.store/20240525/8eed0f6533f7925d83b7d63d801852fa.jpeg" alt="Banner Image" />
                    </div>
                </div>
                <div className="swiper-pagination"></div> {/* Optional pagination */}
            </div>

            <div className="home-link">
                <div className="home-link-item">
                    <a href="#">
                        <img src={iconWithdraw} alt="" />
                        Withdraw
                    </a>
                </div>
                <div className="home-link-item">
                    <a href="#">
                        <img src={iconRecharge} alt="" />
                        Recharge
                    </a>
                </div>
            </div>

            <div className="home-statis">
                <img src={bannerBg} alt="Background" />
                <div className="home-statis-mask">
                    <div className="home-statis-tit">
                        MY WALLET
                    </div>
                    <div className="home-statis-con">
                        <div className="home-statis-item">
                            <h3>₹ 0</h3>
                            <p>Withdraw Wallet</p>
                        </div>
                        <div className="home-statis-item">
                            <h3>₹ 0</h3>
                            <p>Recharge Wallet</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-task">
                <div className="home-task-tit">
                    <span>Subsidies</span>
                </div>
                <div className="home-task-list">
                    <div className="home-task-item">
                        <div className="home-task-name">Government Subsidies</div>
                        <ul>
                            <li>
                                <h3>0 / 1</h3>
                                <span>Valid Invite</span>
                            </li>
                            <li>
                                <h3>₹ 50</h3>
                                <span>Bonus Amount</span>
                            </li>
                        </ul>
                        <button type="button" className="disabled">GOT BONUS</button>
                    </div>

                    <div className="home-task-item">
                        <div className="home-task-name">Government Subsidies</div>
                        <ul>
                            <li>
                                <h3>0 / 2</h3>
                                <span>Valid Invite</span>
                            </li>
                            <li>
                                <h3>₹ 100</h3>
                                <span>Bonus Amount</span>
                            </li>
                        </ul>
                        <button type="button" className="disabled">GOT BONUS</button>
                    </div>

                    <div className="home-task-item">
                        <div className="home-task-name">Government Subsidies</div>
                        <ul>
                            <li>
                                <h3>0 / 3</h3>
                                <span>Valid Invite</span>
                            </li>
                            <li>
                                <h3>₹ 150</h3>
                                <span>Bonus Amount</span>
                            </li>
                        </ul>
                        <button type="button" className="disabled">GOT BONUS</button>
                    </div>
                    {/* Repeat similar blocks for other subsidies */}
                </div>
            </div>

            <div className="home-events">
                <div className="home-events-tit">
                    <span>Hot Events</span>
                </div>
                <div className="home-events-list">
                    <a href="#" className="home-events-item">
                        <img src="https://files.aaatlab.store/20240316/f9d5230c3073e67590b0a7f268e539e4.jpg" alt="Event 1" />
                        <p>Snapdragon series product revenue introduction</p>
                    </a>
                    <a href="#" className="home-events-item">
                        <img src="https://files.aaatlab.store/20240316/626cb82e8613816bf722b792b0a2fbb1.jpg" alt="Event 2" />
                        <p>How to create your team and earn huge rewards!</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
