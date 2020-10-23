import React from 'react';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';
import {Link} from 'react-router-dom'
import './index.scss';
import { authService } from '../../fbase';

//const menuList = ["JoIn US", "LOGIN", "MY PAGE", "BOARD", "Q&A"];
//const menuUrl = ["/Join", "/Login", "/My_page", "/Board", "/QnA"];

const GNB = ({context,isLoggedIn}) => {
    const onLogOutClick = () => authService.signOut();
    return(
        <div className="GNB" > 
            <Sticky>
                <List className="GNB__Inner" tabular>
                    {//menuList.map((item, i) => <List.Item key={i}>{item}</List.Item>)}
                    }
                    {isLoggedIn?
                        <Link className="item" to="/My_page">MY PAGE</Link>:
                        <Link className="item" to="/Login">JoIn&Login</Link>
                    }
                    <Link className="item" to="/Board">BOARD</Link>
                    <Link className="item" to="/Q&A">Q&A</Link>
                    {isLoggedIn && <button className="item" onClick={onLogOutClick}>Log Out</button> }
                </List>
            </Sticky>
        </div>
    )
}

export default GNB;
