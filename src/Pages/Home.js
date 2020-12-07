import React, { useEffect, useState } from 'react';

import GNB from "../Components/GNB";
import Header from "../Components/Header";
import Card from "../Components/Card";
import { authService, dbService } from 'fbase';
import Card2 from 'Components/Card/index2';
import Sidebar from 'Components/Sidebar/Sidebar';
import { Sticky } from 'semantic-ui-react';



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
    name:"개설",
    images:[
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"}
    ],
    url: "/createClub",
  },
  {
    name:"내가 찜한 게시물",
    images:[
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"}

    ]
  },
  {
    name:"게시글 작성",
    images:[
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"}

    ],
    url: "/createBoard",
  },
]
const { kakao } = window;


const Home = ({ userObj }) => {
  // 이렇게 형태를 지정하지 않은 Object는 출력도 안되고 입력도 안된다. map은 먹히던데 그건 왜 되는건지 모르겠음.
  // 니코쌤이 뭐라 하셨던거 같기도 한데 찾아봐야 겠다.
  const [clubs,setClubs] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [distance,setDistance] = useState("");
  
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
          //distance: getDistance(doc.lat, doc.lng),
          distance: getDistance(doc.data().lat,doc.data().lng),
          ...doc.data(),
        }));
        console.log(clubArray);
        setClubs(clubArray);
      });
  }, []);

  const getDistance = ( lat,lng ) => {
    
    var linePath = [
      new kakao.maps.LatLng(userObj.lat, userObj.lng),
      new kakao.maps.LatLng(lat, lng)
    ];
    var polyline = new kakao.maps.Polyline({
        path: linePath,
    });
    var distance = (polyline.getLength())/1000;
    return distance.toFixed(2);
  };
    
  return (
    <>
    <div className="Home">
      <Sticky>
        <GNB isLoggedIn={isLoggedIn} />
      </Sticky>
      <Header categories={categories}/>
      
      <Card2 item={clubs} />
      {categories.map((card,i) => <Card key={i} item={card} />)}
      
    </div>
    </>
  );
}

export default Home;
