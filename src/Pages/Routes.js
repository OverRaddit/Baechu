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

        {
          //2개 이상의 컴포넌트를 넣으면 렉이 걸린다....왜지???
          //GNB,Header,메인컴포넌트 이렇게 넣으면 메인은 작동함
          // 근데 GNB,header의 링크가 작동하지 않음! 왜그럴까...?
        }
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
          <GNB isLoggedIn={userObj} />
          <Header />
          <Board userObj={userObj}/>
        </Route>

        <Route exact path="/createBoard">
          <GNB isLoggedIn={userObj} />
          <Header />
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