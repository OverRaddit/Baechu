import React, { useState } from "react";
import Layout from 'Components/Layout';
import BoardCard from "Components/BoardCard";

import "../Style/board.scss"
import { dbService } from "fbase";

const Board = ({userObj}) => {
  const [cardArr, setCardArr] = React.useState([]);
  const [likeArr, setLikeArr] = React.useState([]);
  const [standard, setStandard] = React.useState('');
  const [likeList, setLikeList] = useState([]);

  const getLikeList = () =>{
    // user가 좋아요표시한 게시글을 가져와 likeArr에 넣는다.
    dbService.collection("like")
    .where("userId","==",userObj.userId)
    .onSnapshot((snapshot=>{
      const likeArray = snapshot.docs.map((doc)=>({
        id: doc.id,
        like: true,
        ...doc.data(),
      }));
      // 이걸 바꿔야할듯
      var likeList = new Array();
      likeArray.map((like)=>{
        likeList.push(like.boardId);
      });
      setLikeList(likeList);

      dbService.collection("board")
      .orderBy("createdAt","desc")
      .onSnapshot((snapshot)=>{
      const boardArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(likeList);
      boardArray.map((board)=>{
        // 사용자의 좋아요글 리스트에 해당 글이 포함되지 않는다면 추가하라.
        if(likeList.includes(board.id)){
          setLikeArr(prev => prev.concat(board));
        }
      });
        setCardArr(boardArray);
        console.log(likeArr);
      });
    }));
  }

  React.useEffect(() => {
    getLikeList();
    
  },[]);

  const handleLike = async({card}) => {
      if(!likeList.includes(card)) {
        const temp = card;
        temp.like = true;
        setLikeList(prev => prev.concat(temp));

        // 좋아요 document를 생성한다.
        const likeData = {userId: userObj.userId, boardId: card.id}
        dbService.collection("like").add(likeData); 
      }
  }

  const handleUnLike = async({id}) => {
    setLikeArr(prev => prev.filter(item => item.id !== id));
    /*
    const likeData = await dbService
            .collection("like")
            .where("boardID","==",id)
            .where("userID","==",userObj.userId)
            .orderBy("createdAt")
            .get();
    likeData.docs.map((doc) => doc.data())
    await dbService.doc(`like/${nweetObj.id}`).delete();
    */
  }

  const handleChange = e => {
    setStandard(e.target.value);
  }



  return (
      <Layout>
      <div className="Board">
        <h1>우리동네취미</h1>
        <p>
          집 주변에서 소규모로 즐기는 취미활동
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
                likeList={likeList}
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
      </Layout>
  );
}

export default Board;