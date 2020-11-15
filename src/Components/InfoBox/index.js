import React from 'react';

import "./index.scss";

const InfoBox = ({title, desc, option}) => {
  return(
    <div className="InfoBox">
      <div className={option === "address" ? "InfoBox__title__address" : "InfoBox__title"}>{title}</div>
      {option === 'phone' && <div className="InfoBox__input__call"><input/> - <input/> - <input/></div>}
      {option === "address" &&
        <div className="InfoBox__input">
          <div className="InfoBox__input__address"><input/> - <button>우편번호</button></div>
          <input/><span>기본주소</span><br/>
          <input/><span>나머지 주소</span>
        </div>
      }
      {option === "gender" &&
      <div className="InfoBox__input">
        <label><input type="radio" />남성</label>
        <label><input type="radio" />여성</label>
      </div>
    }
      {option === "birth" && <div className="InfoBox__input"><input /><span>8자리 ex)20000524</span></div>}
      {option !== "phone" && option !== "address" && option !== "gender" &&
        <div className="InfoBox__input">
          <input/><span>{desc}</span>
        </div>
      }
    </div>
)}

export default InfoBox;