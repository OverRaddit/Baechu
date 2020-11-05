import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// improt 페이지 목록
// 현재는 디자인 틀만 잡아놔서 메인 페이지만 존재
// 추후 작업을 통해 로그인 및 다른 페이지 생성 예정

import Home from './Home';
import Login from './Login';
import MapSearch from '../Components/MapSearch'

const Routes = ({isLoggedIn, userObj}) => {
  return (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      {isLoggedIn ? (
        <>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/My_page">
          <MapSearch userObj={userObj}/>
        </Route> 
        <Route exact path="/Board" component={MapSearch} />
        <Route exact path="/Q&A" component={Login} />
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