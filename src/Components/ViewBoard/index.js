import { authService, dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Tweet from '../TweetBox/Tweet';
import TweetFactory from '../TweetBox/TweetFactory';
import "./Ginfo_style.scss";
const ViewBoard = ({ match }) => {
    const [boardObj, setBoardObj] = useState([]);
    
    const [isMember,setIsMember] = useState(false);

    useEffect( ()=> {
        

    }, []);
    
    const onSubmit = async(e) => {
        e.preventDefault();
        const memberInfo = {
            club: ClubObj.name,
            member: authService.currentUser.uid
        }

        await dbService.collection("member").add(memberInfo);
        setIsMember({0: true});
    }

    return (
        
        <Layout>
            <div className="whole">
                <div className="section">
                    <input type="radio" name="slide" id="slide1"/>
                    <input type="radio" name="slide" id="slide2"/>
                    <input type="radio" name="slide" id="slide3"/>
                    <div className="slidewrap">
                        <ul className="slidelist">
                            <li>
                                <a>
                                    <label htmlFor="slide3" className="left"></label>
                                    <img src={BoardObj.attachmentUrl}/>
                                    <label htmlFor="slide2" className="right"></label>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <label htmlFor="slide1" className="left"></label>
                                    <img src="https://www.thepinx.co.kr/images/biotopia/bakery-07-large.jpg"/>
                                    <label htmlFor="slide3" className="right"></label>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <label htmlFor="slide2" className="left"></label>
                                    <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2004/2/11/0/fo1d52_chocolate_tart.jpg.rend.hgtvcom.616.462.suffix/1371584000788.jpeg"/>
                                    <label htmlFor="slide1" className="right"></label>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <section className="input_text">
                    <div className="cabbage">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/765/765618.svg"/>
                    </div>
                    <div className="textbox">
                        <h1>{ClubObj.name}</h1>
                        
                        <div className="name-area">
                            <i className="fas fa-map-marker-alt map">죽전동</i> 
                            { isMember[0] ? 
                                // 멤버일 경우 게시글 작성폼
                                <h4> 가입 완료 </h4> : 
                                // 멤버가 아닐시 가입버튼
                                <form onSubmit={onSubmit}>
                                        <input type="submit" value="가입하기"/>
                                </form>
                            }
                        </div>
                    </div>
                    <div className="int-area">
                        <textarea name="explain" value={ClubObj.desc} readOnly/>
                    </div>
                </section>
            </div>
            { isMember[0] ? 
                // 멤버일 경우 게시글 작성폼
                <TweetFactory clubObj={ClubObj}/> : 
                // 멤버가 아닐시 가입버튼
                <div></div>
            }
            {tweets.map(tweet => (
                <Tweet key={tweet.id} tweetObj={tweet} />
                ))}
        </Layout>
        
    );
}

export default ViewBoard;


