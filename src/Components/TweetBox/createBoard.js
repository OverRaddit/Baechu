import { authService,dbService,storageService } from 'fbase';
import {v4 as uuidv4} from "uuid";
import React, { useState } from 'react';
import './posting_style.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Layout from 'Components/Layout';

const CreateBoard= () => {
    const userObj = authService.currentUser;
    const [board, setBoard] = useState("");
    const [attachment, setAttachment] = useState("");

    // 닉네임 존재시 출력, 없을 시 이메일을 이름으로;
    const userName = authService.currentUser.displayName ?
        authService.currentUser.displayName:
        authService.currentUser.email;
    const userPhotoURL = authService.currentUser.photoURL;
    
    const onSubmit = async(event) => {
        // 사진이나 트윗 모두 비어있다면 작동x
        if(board === "" && attachment === "")
            return;
        event.preventDefault();
        let attachmentUrl = "";
        if(attachment !== ""){
            // 사진을 storage에 업로드, response에서 업로드된 url을 찾아 attachmentUrl에 저장
            const attachmentRef = storageService.ref().child(`${userObj.userId}/${uuidv4()}`);
            const response = await attachmentRef.putString(attachment,"data_url");
            attachmentUrl = await response.ref.getDownloadURL();
        }

        const boardObj = {
            text: board,
            createdAt: Date.now(),
            creatorId: userObj.uid,
            attachmentUrl,
            like: [],
        }
        await dbService.collection("board").add(boardObj);
        setBoard("");
        setAttachment("");
    }

    const onChange = (event) => {
        const {
            target : {value}
        } = event;
        setBoard(value);
    }
    
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
    const onClearAttachment = () => setAttachment("");
    
    return(
        <Layout>
        <div className="whole">
        <form onSubmit={onSubmit}>
            <section className="input_text">
                <h1>게시물 작성</h1>
                <div className="cabbage">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/765/765618.svg"/>
                </div>
                
                <div className="profile">
                    { userPhotoURL ? (
                        <img src={userPhotoURL} alt="userphotoURL" width="100px" height="100px"/>
                    ) : (
                        <a href="#">
                        <i className="fas fa-user-circle profile fa-3x"/>
                    </a>
                    )}
                    
                    
                </div>

                <div className="user_name">
                    <h3>{userName}</h3>
                </div>
                
                <div>
                    <textarea 
                        placeholder="당신의 멋진 취미는 무엇인가요?"
                        value={board}
                        onChange={onChange}
                        type="text"
                    />
                    
                </div>
                
                <label htmlFor="attach-file" className="factoryInput__label">
                    <span>Add Photo</span>
                    <i className="fas fa-images images fa-lg"></i>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                />

                {attachment && (
                    <div className="factoryForm__attachment">
                        <img
                        src={attachment}
                        style={{
                            backgroundImage: attachment,
                        }}
                        width = "200px" height = "150px"
                        />
                        <div className="factoryForm__clear" onClick={onClearAttachment}>
                            <span>Remove</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                )}

                <div className="btn-area">
                    <input type="submit" value="게시"/>
                </div>
            </section>
        </form>
        </div>
        </Layout>
    );
}

/*
<Layout>
        <div className="all">
        <form onSubmit={onSubmit} className="all">
            <section className="input_text">
                <h1>게시물 작성</h1>
                <div className="cabbage">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/765/765618.svg"/>
                </div>
                
                <div className="profile">
                    { userPhotoURL ? (
                        <img src={userPhotoURL} alt="userphotoURL" width="100px" height="100px"/>
                    ) : (
                        <a href="#">
                        <i className="fas fa-user-circle profile fa-3x"/>
                    </a>
                    )}
                    
                    
                </div>

                <div className="user_name">
                    <h3>{userName}</h3>
                </div>
                
                <div>
                    <textarea 
                        placeholder="당신의 멋진 취미는 무엇인가요?"
                        value={board}
                        onChange={onChange}
                        type="text"
                    />
                    
                </div>
                
                <label htmlFor="attach-file" className="factoryInput__label">
                    <span>Add Photo</span>
                    <i className="fas fa-images images fa-lg"></i>
                </label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={onFileChange}
                />

                {attachment && (
                    <div className="factoryForm__attachment">
                        <img
                        src={attachment}
                        style={{
                            backgroundImage: attachment,
                        }}
                        width = "200px" height = "150px"
                        />
                        <div className="factoryForm__clear" onClick={onClearAttachment}>
                            <span>Remove</span>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                )}

                <div className="btn-area">
                    <input type="submit" value="게시"/>
                </div>
            </section>
        </form>
        </div>
        </Layout>
*/

export default CreateBoard;