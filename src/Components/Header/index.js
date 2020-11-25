import React from 'react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';
import logo from "../../Images/baechu.png";

import './index.scss';
import { Link } from 'react-router-dom';

// 백엔드 존재시 통신해서 가져올 데이터 (dummy data)
const categories = [
  {
    name:"우리동네 취미",
    to:"/createClub",
    images:[
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
    ]
  },
  {
    name:"개설",
    to:"/createClub",
    images:[
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"}
    ]
  },
  {
    name:"내가 찜한 게시물",
    to:"",
    images:[
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"}

    ]
  },
  {
    name:"게시글 작성",
    to:"/createBoard",
    images:[
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"}

    ]
  },
]

const Header = () => {
  return (
    <>
        <div className="Header">
            <div className="Header__Inner">
                <Icon className="menu" name='bars' size="big"/>
                <div className="Header__Inner__center" onClick={() => window.history.push('/')}>
                  <span>배추터</span>
                  <img src={logo} />
                </div>
                <Input 
                    icon={<Icon name='search' />}
                    type='text'
                    name='search'
                    placeholder={"search"}
                    fluid
                />
            </div>
        
        </div>
        <List className="table">
            {categories.map((item, i)=> 
            <List.Item key={i}>
              <Link to={item.to}>{item.name}</Link>
            </List.Item>
            )}
        </List>
    </>
  );
}

export default Header;
