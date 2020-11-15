import React, { useEffect, useState } from 'react';

import GNB from "../Components/GNB";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { authService, dbService } from 'fbase';
import Card2 from 'Components/Card/index2';
import Sidebar from 'Components/Sidebar/Sidebar';

// 백엔드 존재시 통신해서 가져올 데이터 (dummy data)
const categories = [
  { 
    name:"우리동네 취미",
    images:[
      {src:"../../public/images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
    ]
  }, 
  { 
    name:"홈취미 & DIY 키트", 
    images:[
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
    ]
  },
  { 
    name:"BEST", 
    images:[
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
    ]
    
  },
]

const Home = () => {
  // 이렇게 형태를 지정하지 않은 Object는 출력도 안되고 입력도 안된다. map은 먹히던데 그건 왜 되는건지 모르겠음.
  // 니코쌤이 뭐라 하셨던거 같기도 한데 찾아봐야 겠다.
  const [clubs,setClubs] = useState([{
    name: '',
    creator: '',
    desc: '',
    lat: '',
    lng: '',
    attachmentUrl: '',
  }]);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  
  useEffect( ()=>{
    authService.onAuthStateChanged( (user) => {
      if (user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      //setInit(true);
    });

    // 어느 순서로 가져와야 할지 미정.
    dbService.collection("club")
      .onSnapshot((snapshot)=>{
        const clubArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setClubs(clubArray);
        console.log(clubArray[0]);
      });
  }, [])
  return (
    <>
    <div className="Home">
      <GNB isLoggedIn={isLoggedIn}/>
      <Header tableList={categories}/>
      {categories.map((card,i) => <Card key={i} item={card} />)}
      {clubs.map((card,i) => <Card2 key={i} item={card} />)}
    </div>
    </>
  );
}

export default Home;
