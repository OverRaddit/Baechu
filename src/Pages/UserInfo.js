import React from 'react';
import Layout from "../Components/Layout";
import InfoBox from "../Components/InfoBox"

import "../Style/info.scss"

const UserInfo = () => {
  return (
    <Layout>
    <div className="UserInfo">
      <h2>HOME>회원정보수정</h2>
      <h1 className="normal__info">기본정보</h1>
      <div>
        <InfoBox title={"아이디"} desc={"(영문소문자/숫자, 4~16자 추천)"}/>
        <InfoBox title={"현재 비밀번호"} />
        <InfoBox title={"비밀번호"} />
        <InfoBox title={"비밀번호확인"} />
        <InfoBox title={"휴대전화"} option={"phone"}/>
        <InfoBox title={"주소"} option={"address"}/>
        <InfoBox title={"이메일"} />
      </div>
      <h1 className="additional__info">추가정보</h1>
      <div>
        <InfoBox title={"성별"} option={"gender"}/>
        <InfoBox title={"생년월일"} option={"birth"}/>
      </div>
    </div>
    </Layout>
  )
}

export default UserInfo;
