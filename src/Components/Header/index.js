import React from 'react';
import {withRouter} from "react-router-dom";
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import Input from 'semantic-ui-react/dist/commonjs/elements/Input';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';

import './index.scss';

import logo from "../../Images/baechu.png"


const Header = ({categories, contextRef, history}) => {
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
        <Sticky context={contextRef}>
          <List className="table">
            {categories.map((item, i)=> <List.Item key={i}>{item.name}</List.Item>)}
          </List>
        </Sticky>
    </>
  );
}

export default withRouter(Header);
