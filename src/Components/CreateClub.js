import { useState } from "react";
import React from 'react';
import { dbService, storageService } from "fbase";
import { v4 as uuidv4 } from 'uuid';

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
        reader.onload = (finishedEvent) => {
            // 첨부된 파일의 미리보기 이미지를 출력
            
            var dataURL = reader.result;
            var output = document.getElementById('output');
            output.src = dataURL;
            
            // progressevent => currentTarget => result
            console.log(finishedEvent);

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
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <img src={attachment} id='output' width="300px" height="300px"/>
                    <input type="button" onClick={onClearAttachment} value="사진 지우기"/>
                </div>
                <br/>
                <label>동아리 명</label>
                <input
                name="name"
                value={name} onChange={onChange}
                type="text"
                placeholder = "클럽명을 적어주세요!" maxLength={120}
                />
                <br></br>
                <label>동아리 설명</label>
                <textarea
                name="desc"
                value={desc}
                onChange={onChange}
                type="text"
                placeholder = "동아리에 대한 설명을 해주세요!"
                maxLength={250}
                />
                <br></br>

                <label>동아리 이미지</label>
                
                <input type="file" accept="image/*" onChange={onFileChange} />
                <br></br>

                <input type="submit"/>
            </form>
        </div>
    );
}

export default CreateClub;