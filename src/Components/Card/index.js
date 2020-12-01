import React from 'react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import "./index.scss";

const Card = ({item}) => {

    const {name, images} = item;

    return (
        <div className="Card">
            <div className="Card__header">
                <span>{name}</span>
                <span>전체보기 <Icon name="angle right" /></span>
            </div>
            <div className="Card__content">
                {images.map((list,i) =>
                    <div className="Card_content__item" key={i}>
                        <img className="Card__content__item__img" key={i} src={list.src} alt="testtest"/>
                        <div className="Card__content__item__desc">{list.desc}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Card;
