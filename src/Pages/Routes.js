import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Login from './Login';
import ViewClub from 'Components/ViewClub';
import Mypage from './MyPage';
import UserInfo from './UserInfo';
import GNB from 'Components/GNB';
import Header from 'Components/Header';
import Distance from 'Components/Distance';
import Board from './Board';
import Sidebar from 'Components/Sidebar/Sidebar';
import CreateClub from 'Components/CreateClub';
import CreateBoard from 'Components/TweetBox/createBoard';

const Routes = ({isLoggedIn, userObj}) => {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      {isLoggedIn ? (
        <>
        <Route exact path="/">
          <Home userObj={userObj}/>
        </Route>

        <Route exact path="/Mypage">
          <Mypage userObj={userObj}/>
        </Route>

        <Route exact path="/userInfo">
          <UserInfo userObj={userObj}/>
        </Route>

        <Route exact path="/sidebar">
          <GNB isLoggedIn={userObj} />
          <Header />
          <Sidebar/>
        </Route>
        
        <Route exact path="/createClub">
          <CreateClub userObj={userObj}/>
        </Route> 

        <Route exact path="/viewClub/:clubName" component={ViewClub} >
    
        </Route>

        <Route exact path="/distance">
          <Distance />
        </Route>

        <Route exact path="/Board">
          <Board userObj={userObj}/>
        </Route>

        <Route exact path="/createBoard">
          <CreateBoard />
        </Route>

        <Route exact path="/Q&A"/>
        </>
      ) : (
        <Route exact path="/">
          <Login/>
        </Route>
      
      )}
      
    </Switch>
  </Router>
  );
};

export default Routes;