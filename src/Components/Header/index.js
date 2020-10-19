import React from 'react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';

import './index.scss';

const Header = ({tableList}) => {
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
            {tableList.map((item, i)=> <List.Item key={i}>{item.name}</List.Item>)}
        </List>
    </>
  );
}

export default Header;
