import React from 'react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';

import './index.scss';

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
  return (
    <>
        <div className="Header">
            <div className="Header__Inner">
                <Icon className="menu" name='bars' size="big"/>
                <span>배추터</span>
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
            {categories.map((item, i)=> <List.Item key={i}>{item.name}</List.Item>)}
        </List>
    </>
  );
}

export default Header;
