import React, { useEffect, useState } from "react";
//import Layout from "Components/Layout";
import BoardCard from "Components/BoardCard";

import "../Style/board.scss"
import { dbService } from "fbase";
const { kakao } = window;

const Board = ({userObj}) => {
  const [cardArr, setCardArr] = React.useState([]);
  const [likeIdArr, setLikeIdArr] = React.useState([]);
  const [likeArr, setLikeArr] = React.useState([]);
  const [standard, setStandard] = React.useState('');

  /*
  React.useEffect(() => {
    fetch('data/board.json').then(res => res.json()).then(res => setCardArr(res));
  },[]);
  */
  

  useEffect( ()=>{
    dbService.collection("board")
    .orderBy("createdAt","desc")
    .onSnapshot((snapshot)=>{
      const boardArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCardArr(boardArray);
    });
  },[]);

    //likeArr를 초기화
    dbService.collection("like")
    .where("userId","==",userObj.userId)
    .onSnapshot((snapshot=>{
      const likeArray = snapshot.docs.map((doc)=>({
        id: doc.id,
        like: true,
        ...doc.data(),
      }));
      setLikeIdArr(likeArray);
    }))


  const handleLike = async({card}) => {
      if(!likeArr.includes(card)) {
        //??? 왜 temp를 굳이 선언했을까??
        
        const temp = card;
        temp.like = true;
        setLikeArr(prev => prev.concat(temp));
        
        //card.like = true;
        //setLikeArr(prev => prev.concat(card));
        
        // 하트 누르면 업데이트 잘됨(좋아요 명단에 추가하는걸로 수정해야하지만) 근데 좋아요 눌러도 하트가 안채워짐, 이상하게 2번째 눌러야 하트가 채워진다
        // 근데 2번 눌렀기때문에 좋아요된 게시글을 보면 똑같은 글이 2번 표시된다. 으아아아
        /*
        var newArr = card.like.push(userObj.userId);
        await dbService.doc(`board/${card.id}`).update({
          text: "좋아요",
          like: prev => prev.concat(4),
        })
        */
        const likeData = {userId: userObj.userId, boardId: card.id}
        dbService.collection("like").add(likeData);
      }
  }

  const handleUnLike = ({id}) => {
    // 현재 카드의 id를 가지고 있는 녀석을 LikeArr에서 제거한다.
    setLikeArr(prev => prev.filter(item => item.id !== id));
  }

  const handleChange = e => {
    setStandard(e.target.value);
  }

  return (

      <div className="Board">
        <h1>LEISURE COMMUNITY</h1>
        <p>
          사람을 통해 배우는 취미 연구소
        </p>
        <div className="Board__inner">
          <select value={standard} onChange={handleChange}>
            <option value="">-정렬방식-</option>
            <option value="최근순">최근순</option>
            <option value="좋아요">좋아요</option>
          </select>
          <div className="Board__inner__Cards">
            {standard === '좋아요' ?
            likeArr.map((item,i) =>
            <BoardCard
                key={i}
                card={item}
                likeArr={likeArr}
                handleLike={handleLike}
                handleUnLike={handleUnLike}
                />)
            :(cardArr || []).map((item, i) =>
              <BoardCard
                key={i}
                card={item}
                likeArr={likeArr}
                handleLike={handleLike}
                handleUnLike={handleUnLike}
                />
              )}
          </div>
        </div>
      </div>
      
  );
}

export default Board;