import React from 'react';
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';

import GNB from "../Components/GNB";
import Header from "../Components/Header";
import Card from "../Components/Card";
import MyPageInfo from "../Components/MyPageInfo"

const Mypage = ({ userObj }) => {
  return (
    <>
      <GNB isLoggedIn={userObj} />
      <Header />
      <MyPageInfo userObj={userObj}/>
    </>
  )
}

export default Mypage;