import React from 'react';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';
import {Link} from 'react-router-dom'
import './index.scss';
import { authService } from '../../fbase';
import Sidebar from 'Components/Sidebar/Sidebar';

const GNB = ({isLoggedIn}) => {
    const onLogOutClick = () => authService.signOut();
    return(
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
    )
}

export default GNB;

