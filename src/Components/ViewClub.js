import { authService, dbService } from 'fbase';
import React, { useEffect, useState } from 'react';
import GNB from './GNB';
import Header from './Header';
import Tweet from './TweetBox/Tweet';
import TweetFactory from './TweetBox/TweetFactory';

const ViewClub = ({ match }) => {
    const [ClubObj, setClubObj] = useState([]);
    const [tweets, setTweets] = useState([]);
    const [isMember,setIsMember] = useState(false);

    useEffect( ()=> {
        dbService.collection("club")
        .where("name","==",match.params.clubName)
        .onSnapshot((snapshot)=>{
            const clubArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setClubObj(clubArray[0]);
        });

        dbService.collection("tweets")
        .where("club","==",match.params.clubName)
        .orderBy("createdAt","desc")
        .onSnapshot((snapshot)=>{
            const tweetArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));
            setTweets(tweetArray);
            console.log(tweetArray);
        });
        

        // 로그인한 유저가 동아리의 멤버인지 판단
        dbService.collection("member")
        .where("club","==",match.params.clubName)
        .where("member","==",authService.currentUser.uid)
        .onSnapshot((snapshot)=>{
            const isMember = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));
            
            setIsMember(isMember);
        })

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
        <div>
            <GNB isLoggedIn={true}/>
            <Header />
            <div>
                <h1>{ClubObj.name}</h1>
                <img src={ClubObj.attachmentUrl} width="100px" height="100px"/>
                <p>{ClubObj.desc}</p>
                <h4>창립자:{ClubObj.creator}</h4>
            </div>

            { isMember[0] ? 
                // 멤버일 경우 게시글 작성폼
                <TweetFactory clubObj={ClubObj}/> : 
                // 멤버가 아닐시 가입버튼
                <form onSubmit={onSubmit}>
                        <input type="submit"/>
                </form>
            }
            {tweets.map(tweet => (
                <Tweet key={tweet.id} tweetObj={tweet} />
                ))}
        </div>
    );
}

export default ViewClub;


