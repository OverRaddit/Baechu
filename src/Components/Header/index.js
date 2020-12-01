import React from 'react';
import {withRouter} from "react-router-dom";
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';

import './index.scss';

<<<<<<< HEAD
import logo from "../../Images/baechu.png"


const Header = ({categories, contextRef, history}) => {
=======
const categories = [
    {
      name:"우리동네 취미",
      images:[
        {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
        {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
        {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
      ]
    },
    {
      name:"홈취미 & DIY 키트",
      images:[
        {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
        {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
        {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"}
      ]
    },
    {
      name:"BEST",
      images:[
        {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
        {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
        {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"}
  
      ]
    },
  ]

const Header = () => {
>>>>>>> 91f7ecdafccb937c30100e6863d7e81ac7ad589a
  return (
      <>
        <div className="Header">
            <div className="Header__Inner">
                <Icon className="menu" name='bars' size="big"/>
                <div className="Header__Inner__center" onClick={() => history.push('/')}>
                  <span>배추터</span>
                  <img src={logo} />
                </div>
                <Input
                    icon={<Icon name='search ' />}
                    type='text'
                    name='search'
                    placeholder={"USER 검색"}
                    fluid
                />
            </div>
        </div>
<<<<<<< HEAD
        <Sticky context={contextRef}>
          <List className="table">
            {categories.map((item, i)=> <List.Item key={i}>{item.name}</List.Item>)}
          </List>
        </Sticky>
=======
        <List className="table">
            {categories.map((item, i)=> <List.Item key={i}>{item.name}</List.Item>)}
        </List>
>>>>>>> 91f7ecdafccb937c30100e6863d7e81ac7ad589a
    </>
  );
}

export default withRouter(Header);
