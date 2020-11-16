import React from 'react';
import {withRouter} from "react-router-dom";
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';

import './index.scss';

const menuList = [
  {label:"JOIN US", link:"/"},
  {label:"LOGIN", link:"/"},
  {label:"MY PAGE", link:"/mypage"},
  {label:"BOARD", link:"/board"},
  {label:"Q&A", link:"/"},
];

const GNB = ({history}) => (
    <div className="GNB" >
        <List className="GNB__Inner" tabular>
            {menuList.map((item, i) => <List.Item key={i} onClick={() => history.push(`${item.link}`)}>{item.label}</List.Item>)}
        </List>
    </div>

)

export default withRouter(GNB);
