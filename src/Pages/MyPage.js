import React from 'react';
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';

import GNB from "../Components/GNB";
import Header from "../Components/Header";
import Card from "../Components/Card";
import MyPageInfo from "../Components/MyPageInfo"
import Layout from 'Components/Layout';

const Mypage = ({ userObj }) => {
  return (
    <>
      <Layout>
        <MyPageInfo userObj={userObj}/>
      </Layout>
    </>
  )
}

export default Mypage;