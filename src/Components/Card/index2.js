import React from 'react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import "./index.scss";

const Card2 = ({item}) => {

    const {name, attachmentUrl, desc, creator} = item;

    return (
        <div className="Card">
            <div className="Card__header">
                <span>{name}</span>
            </div>
            <div className="Card__content">
                <div className="Card_content__item">
                    <img className="Card__content__item__img" src={attachmentUrl} alt="test"/>
                    <div className="Card__content__item__desc">{desc}</div>
                </div>
            </div>
        </div>
    );
}

export default Card2;
