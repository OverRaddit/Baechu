import React from "react";
import Layout from 'Components/Layout';
import BoardCard from "Components/BoardCard";

import "../Style/board.scss"

const Board = () => {
  const [cardArr, setCardArr] = React.useState([]);
  const [likeArr, setLikeArr] = React.useState([]);
  const [standard, setStandard] = React.useState('');

  React.useEffect(() => {
    fetch('data/board.json').then(res => res.json()).then(res => setCardArr(res));
  },[]);

  const handleLike = ({card}) => {
      if(!likeArr.includes(card)) {
        const temp = card;
        temp.like = true;
        setLikeArr(prev => prev.concat(temp));
      }
  }

  const handleUnLike = ({id}) => {
    setLikeArr(prev => prev.filter(item => item.id !== id));
  }

  const handleChange = e => {
    setStandard(e.target.value);
  }

  console.log(likeArr)


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
