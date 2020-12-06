import { useState } from "react";
import React from 'react';
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from 'uuid';
import './group_style.scss';
import GNB from "Components/GNB";
import Header from "Components/Header";
import Layout from "Components/Layout";

const CreateClub = ( {userObj} ) => {
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [attachment,setAttachment] = useState();
    
    const onChange = (event) => {
        const {
            target: {name,value},
        } = event;
        if(name === "name"){
            setName(value);
        } else if(name === "desc"){
            setDesc(value);
        } 
    }

    const onSubmit = async(event) => {
        event.preventDefault();
        // 사진을 storage에 저장한다.
        const fileRef = storageService.ref().child(`ClubImage/${uuidv4()}`);
        const response = await fileRef.putString(attachment, "data_url");
        const attachmentUrl = await response.ref.getDownloadURL();
        // newClub document를 추가해준다.
        const newClub = {
            creator: userObj.userId,
            name,
            desc,
            attachmentUrl,
            lat: userObj.lat,
            lng: userObj.lng,
            createdAt: Date.now(),
          }
        await dbService.collection("club").add(newClub);
        document.location.href = "../"
    }
    const onFileChange = (event) =>{
        const {
            target: {files},
        } = event;
        const theFile = files[0];
        const reader = new FileReader();
        reader.onloadend = (finishedEvent) => {
            // 첨부된 파일의 url정보를 attachment 변수에 저장
            const {
                currentTarget: {result}
            } = finishedEvent;
            setAttachment(result);
        };
        reader.readAsDataURL(theFile);
    }
    const onClearAttachment = () => {
        setAttachment(null);
    }

    return (
    <Layout>
    <div>
        <br></br>
        <div className="all">
            <section className="input_text"> 
            <form onSubmit={onSubmit}>
                <h1>동아리 만들기</h1>
                <div className="cabbage">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/765/765618.svg"/>
                </div>
                {attachment &&
                    <div>
                        <img src={attachment} id='output' width="150px" height="150px"/>
                        <input type="button" onClick={onClearAttachment} value="사진 지우기"/>
                    </div>
                }
                <div className="name-area">
                    <label htmlFor="name"> 동아리 이름</label>
                    <input
                    name="name"
                    value={name} onChange={onChange}
                    type="text"
                    placeholder = "클럽명을 적어주세요!" maxLength={120}
                    autoComplete="off"
                    />
                </div>

                <div className="int-area">
                    <textarea
                    name="desc"
                    value={desc}
                    onChange={onChange}
                    type="text"
                    placeholder = "동아리에 대한 설명을 해주세요!"
                    maxLength={250}
                    />
                </div>
                
                <div className="name-area">
                    <label>동아리 이미지</label><i className="fas fa-map-marker-alt map"></i>
                    <input type="file" accept="image/*" onChange={onFileChange}/>
                </div>

                <div className="btn-area">
                    <input type="submit"/>
                </div>
            </form>
            </section>
        </div>
    </div>
    </Layout>
    );
}

export default CreateClub;