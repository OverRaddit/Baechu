import React, { useState } from 'react';
import GNB from "../Components/GNB";
import Header from "../Components/Header";
import InfoBox from "../Components/InfoBox";
import Layout from "../Components/Layout";
import "../Style/info.scss";
import "../Components/InfoBox/index.scss";
import { authService } from 'fbase';
const UserInfo = ({userObj}) => {
  const [displayName,SetDisplayName] = useState(authService.currentUser.displayName);
  const [attachment, setAttachment] = useState("");


  const onChange = (event) => {
    const {target: {name, value}} = event;
    if(name === "displayName"){
        SetDisplayName(value);
    } else if (name === "password"){
        //setPassword(value);
    }
  };

  const onFileChange = (event) => {
    const {
        target: {files},
    } = event;
    const File = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
        const{
            currentTarget: {result},
        } = finishedEvent;
        setAttachment(result);
    }
    reader.readAsDataURL(File);
}

  const onSubmit = async(event) => {
    event.preventDefault();
    const {target: {name, value}} = event;

    if(name === "displayName"){
      authService.currentUser.updateProfile({
        displayName: displayName,
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      });
      console.log(authService.currentUser.displayName);
    } else if(name === "attachment"){
      console.log("asdf");
      authService.currentUser.updateProfile({
        photoURL: attachment,
      });
    }

  }

  return (
    <Layout>
    <div className="UserInfo">
      
      <h2>HOME>회원정보수정</h2>
      <h1 className="normal__info">기본정보</h1>
      <div>
        <div className="InfoBox">
          <div className="InfoBox__title">
            닉네임
          </div>
          <form name="displayName" onSubmit={onSubmit} className="InfoBox__input">
            <input type="text" onChange={onChange} name="displayName" value={displayName}/><span></span>
            <input type="submit" value="적용" />
          </form>
        </div>
        <InfoBox title={"주소"} option={"address"} userObj={userObj}/>
      </div>
      {
        /*
        <InfoBox title={"현재 비밀번호"} />
        <InfoBox title={"비밀번호"} />
        <InfoBox title={"비밀번호확인"} />
        
        
        <InfoBox title={"휴대전화"} option={"phone"}/>
        <InfoBox title={"주소"} option={"address"} userObj={userObj}/>
      <div className="InfoBox">
          <div className="InfoBox__title">
            프로필 사진
          </div>
          <form name="attachment" onSubmit={onSubmit} className="InfoBox__input">
            <img src={attachment} width = "200px" height = "150px" onChange={onChange} name="attachment" value={attachment}/><span></span>
          
            <input type="file" accept="image/*" onChange={onFileChange} /><span></span>
            <input type="submit" value="적용" />
          </form>
        </div>


      <h1 className="additional__info">추가정보</h1>
      <div>
        <InfoBox title={"성별"} option={"gender"}/>
        <InfoBox title={"생년월일"} option={"birth"}/>
      </div>
      */
      }
    </div>
    </Layout>
  )
}

export default UserInfo;