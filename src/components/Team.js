import React, {useState} from 'react';
// import ClipboardJS from 'clipboard';
// import $ from 'jquery';

import bannerBg from '../assets/images/banner-bg.png';

function Team() {
  // const [page, setPage] = useState(0);
  const [teamData, setTeamData] = useState([]);
  // const t = "1";
  // const _token = "IZ8DDwdrZxrMKXuG8pGDTRMd1f42PnR6Ev2ccgRD";

  // useEffect(() => {
  //   // Initialize clipboard.js for copy functionality
  //   const clipboard = new ClipboardJS('.team-code-copy');
  //   clipboard.on('success', function (e) {
  //     e.clearSelection();
  //     window.layui.layer.msg('Copy success', { icon: 16, time: 1000, shade: [0.5, '#393D49'] });
  //   });

  //   clipboard.on('error', function (e) {
  //     window.layui.layer.msg('Copy failed', { icon: 16, time: 1000, shade: [0.5, '#393D49'] });
  //   });

  //   // Handle the tab switching
  //   $('body').on('click', '.record-tab a', function () {
  //     $(this).addClass('active').siblings().removeClass('active');
  //   });

  //   // Dropload functionality for loading more data
  //   $('.team-main').dropload({
  //     scrollArea: window,
  //     domDown: {
  //       domClass: 'dropload-down',
  //       domRefresh: '<div class="dropload-refresh">↑ pull up to load more</div>',
  //       domLoad: '<div class="dropload-load"><span class="loading"></span>loading...</div>',
  //       domNoData: '<div class="dropload-nodata">none more</div>',
  //     },
  //     loadDownFn: function (me) {
  //       setPage((prevPage) => prevPage + 1);
  //       $.post("https://aaalab.club/team/record", { t, page, _token }, function (result) {
  //         if (result.code === 201) {
  //           window.layui.layer.msg('Login invalid', {
  //             icon: 16,
  //             time: 1000,
  //             shade: [0.5, '#393D49']
  //           }, function () {
  //             window.location.href = "https://aaalab.club/login?redirect=https%3A%2F%2Faaalab.club%2Fteam";
  //           });
  //           return false;
  //         }
  //         if (result.code === 200) {
  //           setTeamData((prevData) => [...prevData, ...result.data]);
  //           me.resetload();
  //         } else {
  //           me.lock();
  //           me.noData(true);
  //           me.resetload();
  //         }
  //       }, "json");
  //     },
  //   });
  // }, [page]);

  return (
    <div className="team-main">
      <div className="team-box">
        <img src={bannerBg} alt="Banner" />
        <div className="team-box-main">
          <div className="team-box-list">
            <div className="team-box-item">
              <h3>₹ 0</h3>
              <p>Total Income</p>
            </div>
            <div className="team-box-item">
              <h3>0</h3>
              <p>Total Valid</p>
            </div>
            <div className="team-box-item">
              <h3>0</h3>
              <p>Total Invite</p>
            </div>
          </div>
          <div className="team-code">
            <div className="team-code-item">
              <h3>Invitation Code</h3>
              <div className="team-code-copy" data-clipboard-text="#">
                <div className="team-code-input">1422ce3e</div>
                <div className="copy">COPY</div>
              </div>
            </div>
            <div className="team-code-item">
              <h3>Invitation Link</h3>
              <div className="team-code-copy" data-clipboard-text="#">
                <div className="team-code-input">https://aaalab.club/register?inviteCode=1422ce3e</div>
                <div className="copy">COPY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="record-tab">
        <a href="#" className="active">TEAM B</a>
        <a href="#">TEAM C</a>
        <a href="#">TEAM D</a>
      </div>
      <div className="teamList">
        <ul>
          <li>
            <h3>0</h3>
            <span>Valid</span>
          </li>
          <li>
            <h3>₹ 0</h3>
            <span>Income</span>
          </li>
          <li>
            <h3>0%</h3>
            <span>Profit</span>
          </li>
        </ul>
        <table>
          <thead>
            <tr>
              <td>Mobile Phone</td>
              <td>Referrer</td>
              <td>Max Order</td>
            </tr>
          </thead>
          <tbody>
            {teamData.map((item, index) => (
              <tr key={index}>
                <td>{item.mobile}</td>
                <td>{item.referrer}</td>
                <td>₹ {item.max}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Team;
