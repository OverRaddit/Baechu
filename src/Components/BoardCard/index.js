import React from 'react';
import produce from 'immer';
import debounce from 'lodash/debounce';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import "./index.scss";

const BoardCard = ({card, likeArr, handleLike, handleUnLike, index}) => {
  const [isLike, setIsLike] = React.useState(false);

  // debounce란?? 무조건 발동되는게 아니라 한번 발동되면 쿨타임이 존재하는 함수다.
  const infiniteScroll = debounce(() => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );

    // scrollTop은 소수점이 발생하여 올림 적용
    const scrollTop = Math.ceil(Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    ));

    const { clientHeight } = document.documentElement;
    // if (scrollTop + clientHeight + 50 > scrollHeight) ;
  }, 100);

  React.useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, []);

  return (
    <div className="BoardCard">
    {likeArr.includes(card)  ?
        <Icon name='heart' size="big" color="green" onClick={()=> handleUnLike({id: card.id})}/> :
        <Icon name='heart outline' size="big" color="green" onClick={()=> handleLike({card})}/>
    }
      <img src={card.attachmentUrl?card.attachmentUrl:"images/test1.png"} alt="이미지"/>
      <div className="BoardCard__text">{card.text}</div>
    </div>
  )
}

export default BoardCard;