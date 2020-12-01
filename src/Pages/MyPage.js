import React from 'react';
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';

import GNB from "../Components/GNB";
import Header from "../Components/Header";
import Card from "../Components/Card";
import MyPageInfo from "../Components/MyPageInfo"

const Mypage = () => {
  return (
    <>
      <GNB />
      <Header />
      <MyPageInfo />
    </>
  )
}

export default Mypage;