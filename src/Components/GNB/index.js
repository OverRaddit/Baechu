import React from 'react';
import {withRouter} from "react-router-dom";
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';

/*
const menuList = [
  {label:"JOIN US", link:"/"},
  {label:"LOGIN", link:"/"},
  {label:"M PAGE", link:"/mypage"},
  {label:"BOARD", link:"/board"},
  {label:"Q&A", link:"/"},
];
*/

import {Link} from 'react-router-dom'
import './index.scss';
import { authService } from '../../fbase';
import Sidebar from 'Components/Sidebar/Sidebar';
import { useHistory } from "react-router-dom";

const GNB = ({isLoggedIn}) => {
    let history = useHistory();
    const menuList = [
        {label:"JOIN US", link:"/"},
        {label:"LOGIN", link:"/"},
        {label:"M PAGE", link:"/mypage"},
        {label:"BOARD", link:"/board"},
        {label:"Q&A", link:"/"},
      ];
      const menuList2 = [
        {label:"M PAGE", link:"/mypage"},
        {label:"BOARD", link:"/board"},
        {label:"Q&A", link:"/"},
      ];
    const onLogOutClick = () => authService.signOut();
    return(
        <div className="GNB" >
        <List className="GNB__Inner" tabular>
            {
                menuList.map((item, i) => <List.Item key={i} onClick={() => history.push(`${item.link}`)}>{item.label}</List.Item>)
            }
        </List>
       </div>
        /*
        <div className="GNB">
            <List className="GNB__Inner" tabular>
            {isLoggedIn?
                    (<>
                        <Link className="item" to="/Mypage">MY PAGE</Link>
                        <Link className="item" to="/createClub">createClub</Link>
                    </>):
                    <Link className="item" to="/Login">JoIn&Login</Link>
                }
                <Link className="item" to="/Board">BOARD</Link>
                <Link className="item" to="/Q&A">Q&A</Link>

                {isLoggedIn && <button className="item" onClick={onLogOutClick}>Log Out</button> }    
            </List>
        </div>
        */
    )
}
export default GNB;