import React from 'react';
import produce from 'immer';
import debounce from 'lodash/debounce';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import "./index.scss";
import { authService, dbService, storageService } from 'fbase';

const BoardCard = ({card, likeArr, likeList, handleLike, handleUnLike, index}) => {
  const [isLike, setIsLike] = React.useState(false);

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

  const onDeleteClick = async ({card}) => {
    const ok = window.confirm("정말로 이 게시글을 삭제하시겠어요?");
    console.log(ok);
    if(ok){
        await dbService.doc(`board/${card.id}`).delete();
        if(card.attachmentUrl)
          await storageService.refFromURL(card.attachmentUrl).delete();
    }
}

  return (
    <div className="BoardCard">
    {likeArr.includes(card)  ?
        <Icon name='heart' size="big" color="green" onClick={()=> handleUnLike({id: card.id})}/> :
          <Icon name='heart outline' size="big" color="green" onClick={()=> handleLike({card})}/>
    }

    {card.creatorId == authService.currentUser.uid  ?
        <Icon name='trash alternate' size="big" color="green" onClick={()=> onDeleteClick({card})}/> : <div></div>
    }
      <img src={card.attachmentUrl?card.attachmentUrl:"images/test1.png"} alt="이미지"/>
      <div className="BoardCard__text">{card.text}</div>
    </div>
  )
}
// likeList.includes(card)
/*
<Icon name='trash alternate' size="big" color="green" onClick={()=> handleLike({card})}/>
*/
export default BoardCard;