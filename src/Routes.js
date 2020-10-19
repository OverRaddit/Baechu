import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// improt 페이지 목록
// 현재는 디자인 틀만 잡아놔서 메인 페이지만 존재
// 추후 작업을 통해 로그인 및 다른 페이지 생성 예정

import Main from './Pages/Main';

const Routes = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Router>
);

export default Routes;