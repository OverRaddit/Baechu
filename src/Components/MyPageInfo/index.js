import React, { useState } from 'react';

import './index.scss';

import logo from "../../Images/profile.png"
import logo2 from "../../Images/board.png"
import { useHistory } from "react-router-dom";

const MyPageInfo = () => {
  let history = useHistory();
    return(
      <div className="MyPageInfo">
        <h1><u>MY PAGE</u></h1>
          <div className="MyPageInfo__box">
            <div className="MyPageInfo__box__img">
              <img src={logo} alt="프로필 관리" />
              <p>주소지 변경</p>
              <button onClick={()=> history.push("/userInfo")}>VIEW MORE</button>
            </div>
            <div className="MyPageInfo__box__img">
              <img src={logo2} alt="게시물 관리" />
              <button>VIEW MORE</button>
              <p>
                내가 쓴글 <br/>
                게시물 작성
              </p>
            </div>
          </div>
      </div>
    );
  }

export default MyPageInfo;
