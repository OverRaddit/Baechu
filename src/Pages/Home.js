import React, { useEffect, useState } from 'react';

import GNB from "../Components/GNB";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { authService } from 'fbase';


// 백엔드 존재시 통신해서 가져올 데이터 (dummy data)
const categories = [
  { 
    name:"우리동네 취미",
    images:[
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
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
  const [contextRef, setContextRef] = React.useState(null);
  const handleContextRef = ref => setContextRef(ref);

  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect( ()=>{
    authService.onAuthStateChanged( (user) => {
      if (user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [])

  return (
    <div className="Home" ref={handleContextRef}>
      <GNB context={contextRef} isLoggedIn={isLoggedIn}/>
      <Header tableList={categories}/>
      {categories.map((card,i) => <Card key={i} item={card} />)}
    </div>
  );
}

export default Home;
