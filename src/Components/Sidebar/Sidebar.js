import React from 'react';
import "./Sidebar.scss";
import imgfile from './profile.png';

const Sidebar = () => {

    return (
    <div className="all">
        <input type="checkbox" id="check"/>
        <header>
            <label for="check">
                <i className="fas fa-bars" id="sidebar_btn"></i>
            </label>
            <div className="left_area">
                <h3>배추터</h3>
            </div>
            <div className="right_area">
                <a href="#" className="logout_btn">Logout</a>
            </div>
        </header>
        <div className="sidebar">
            <center>
                <img src={imgfile} className="profile_image" alt="userpic" />
                <h4>user_name</h4>
            </center>
            <a href="#"><i className="fas fa-home"></i><span>HOME</span></a>
            <a href="#"><i className="fas fa-user-circle"></i><span>마이페이지</span></a>
            <a href="#"><i className="fas fa-comments"></i><span>내 채팅</span></a>
            <a href="#"><i className="fas fa-headset"></i><span>고객센터</span></a>
            <a href="#"><i className="fas fa-sliders-h"></i><span>Settings</span></a>
        </div>
        <div className="content"></div>
    </div>
    );
}

export default Sidebar;