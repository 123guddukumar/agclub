import React from 'react';

function Product() {
  return (
    <div className="huiBg">
      <div className="top">
        <div className="top-tit">Product</div>
      </div>
      <div className="product-main">
        <div className="record-tab">
          <a href="#" className="active">
            Computer Applications
          </a>
          <a href="#">Intelligence 5G</a>
        </div>
        <div className="product-list">
          <div className="product-item">
            <div className="product-img">
              <img src="https://files.aaatlab.store/20240827/c6af649184c30f45b5b031aec3d316bb.jpg" alt="" />
              <div className="product-name">
                <p>Snapdragon P</p>
                <h3>₹ 590</h3>
                <a href="#">Rental</a>
              </div>
            </div>
            <div className="product-text">
              <p>
                <img src="../assets/images/icon_6.png" alt="" /> The Profit Cycle Of This Profit Plan :<span>45 Day</span>
              </p>
              <p>
                <img src="../assets/images/icon_7.png" alt="" /> Daily Of Earnings :<span>₹ 30</span>
              </p>
              <p className="red">
                <img src="../assets/images/icon_8.png" alt="" /> Total Income Of This Plan :<span>₹ 1350</span>
              </p>
            </div>
            <div className="product-stock">
              <font style={{ marginLeft: '-5px', left: '62%' }}>62%</font>
              <span style={{ width: '62%' }}></span>
            </div>
          </div>

          {/* Repeat similar structure for other products */}

          <div className="product-item">
            <div className="product-img">
              <img src="https://files.aaatlab.store/20240815/e7d8e0945b7669ebfca62ac56e67136e.jpg" alt="" />
              <div className="product-name">
                <p>Snapdragon P-1</p>
                <h3>₹ 2580</h3>
                <a href="#">Rental</a>
              </div>
            </div>
            <div className="product-text">
              <p>
                <img src="../assets/images/icon_6.png" alt="" /> The Profit Cycle Of This Profit Plan :<span>48 Day</span>
              </p>
              <p>
                <img src="../assets/images/icon_7.png" alt="" /> Daily Of Earnings :<span>₹ 134</span>
              </p>
              <p className="red">
                <img src="../assets/images/icon_8.png" alt="" /> Total Income Of This Plan :<span>₹ 6432</span>
              </p>
            </div>
            <div className="product-stock">
              <font style={{ marginLeft: '-35px', left: '94%' }}>94%</font>
              <span style={{ width: '94%' }}></span>
            </div>
          </div>

          <div className="product-item">
            <div className="product-img">
              <img src="https://files.aaatlab.store/20240815/e7d8e0945b7669ebfca62ac56e67136e.jpg" alt="" />
              <div className="product-name">
                <p>Snapdragon P-1</p>
                <h3>₹ 2580</h3>
                <a href="#">Rental</a>
              </div>
            </div>
            <div className="product-text">
              <p>
                <img src="../assets/images/icon_6.png" alt="" /> The Profit Cycle Of This Profit Plan :<span>48 Day</span>
              </p>
              <p>
                <img src="../assets/images/icon_7.png" alt="" /> Daily Of Earnings :<span>₹ 134</span>
              </p>
              <p className="red">
                <img src="../assets/images/icon_8.png" alt="" /> Total Income Of This Plan :<span>₹ 6432</span>
              </p>
            </div>
            <div className="product-stock">
              <font style={{ marginLeft: '-35px', left: '74%' }}>74%</font>
              <span style={{ width: '94%' }}></span>
            </div>
          </div>



          <div className="product-item">
            <div className="product-img">
              <img src="https://files.aaatlab.store/20240815/e7d8e0945b7669ebfca62ac56e67136e.jpg" alt="" />
              <div className="product-name">
                <p>Snapdragon P-1</p>
                <h3>₹ 2580</h3>
                <a href="#">Rental</a>
              </div>
            </div>
            <div className="product-text">
              <p>
                <img src="../assets/images/icon_6.png" alt="" /> The Profit Cycle Of This Profit Plan :<span>48 Day</span>
              </p>
              <p>
                <img src="../assets/images/icon_7.png" alt="" /> Daily Of Earnings :<span>₹ 134</span>
              </p>
              <p className="red">
                <img src="../assets/images/icon_8.png" alt="" /> Total Income Of This Plan :<span>₹ 6432</span>
              </p>
            </div>
            <div className="product-stock">
              <font style={{ marginLeft: '-25px', left: '94%' }}>77%</font>
              <span style={{ width: '94%' }}></span>
            </div>
          </div>

        </div>
      </div>

      <div className="foot">
        <ul>
          <li className="cur">
            <a href="/index.html">
              <img src="../assets/images/f_1g.png" alt="home" />
              <p>Home</p>
            </a>
          </li>
          <li>
            <a href="/product/product_source/product.html">
              <img src=".../assets/images/f_2.png" alt="" />
              <p>Product</p>
            </a>
          </li>
          <li>
            <a href="/team/team_source/team.html">
              <img src=".../assets/images/f_3.png" alt="" />
              <p>Team</p>
            </a>
          </li>
          <li>
            <a href="/official/official_source/official.html">
              <img src=".../assets/images/f_4.png" alt="" />
              <p>Official</p>
            </a>
          </li>
          <li>
            <a href="/profile/profile_source/user.html">
              <img src=".../assets/images/f_5.png" alt="" />
              <p>My</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
