import React from 'react';

import "./index.scss";

const InfoBox = ({title, desc, option}) => {
  return(
    <div className="InfoBox">
<<<<<<< HEAD
      <div className={option === 'address' ? "InfoBox__title__address" : "InfoBox__title"}>{title}</div>
      {option === 'phone' && <div className="InfoBox__input__call"><input/> - <input/> - <input/></div>}
      {option === "address" &&
        <div className="InfoBox__input">
          <div className="InfoBox__input__address"> <button>지도보기</button></div>
          <input/><span>기본주소</span><br/>
          <input/><span>상세주소</span>
=======
      <div className={option === "address" ? "InfoBox__title__address" : "InfoBox__title"}>{title}</div>
      {option === 'phone' && <div className="InfoBox__input__call"><input/> - <input/> - <input/></div>}
      {option === "address" &&
        <div className="InfoBox__input">
          <div className="InfoBox__input__address"><input/> - <button>우편번호</button></div>
          <input/><span>기본주소</span><br/>
          <input/><span>나머지 주소</span>
>>>>>>> 91f7ecdafccb937c30100e6863d7e81ac7ad589a
        </div>
      }
      {option === "gender" &&
      <div className="InfoBox__input">
        <label><input type="radio" />남성</label>
        <label><input type="radio" />여성</label>
      </div>
    }
      {option === "birth" && <div className="InfoBox__input"><input /><span>8자리 ex)20000524</span></div>}
<<<<<<< HEAD
      {option !== "phone" && option !== "address" && option !== "gender" && option !== 'birth' &&
=======
      {option !== "phone" && option !== "address" && option !== "gender" &&
>>>>>>> 91f7ecdafccb937c30100e6863d7e81ac7ad589a
        <div className="InfoBox__input">
          <input/><span>{desc}</span>
        </div>
      }
    </div>
)}

<<<<<<< HEAD
export default InfoBox;
=======
export default InfoBox;
>>>>>>> 91f7ecdafccb937c30100e6863d7e81ac7ad589a
