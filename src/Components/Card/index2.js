import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';

import "./index.scss";

const Card2 = ({item}) => {

    const {name, attachmentUrl, desc, creator} = item;
    return (
        
        <div className="Card">
            <div className="Card__header">
                <span>동아리 모음집</span>
                <span>전체보기 <Icon name="angle right" /></span>
            </div>
            <div className="Card__content">
            {item.map((list,i) => 
                <div className="Card_content__item" key={i}>
                    <img width="300px" height="300px" className="Card__content__item__img" src={list.attachmentUrl} alt="test"/>
                    <div className="Card__content__item__desc">
                        {list.desc}
                        <br/>
                        {list.distance} Km
                    </div>
                    <Link to={`/viewClub/${list.name}`}><span>{list.name}</span></Link>
                </div>
            )}
            </div>
        </div>
        /*
        <div className="Card">
            <div className="Card__header">
            <Link to={`/viewClub/${name}`}><span>{name}</span></Link>
            </div>
            <div className="Card__content">
                <div className="Card_content__item">
                    <img className="Card__content__item__img" src={attachmentUrl} alt="test"/>
                    <div className="Card__content__item__desc">{desc}</div>
                </div>
            </div>
        </div>
        */
    );
}

export default Card2;