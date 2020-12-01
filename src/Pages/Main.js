<<<<<<< HEAD
import React from 'react';
import Layout from 'Components/Layout';
import Card from 'Components/Card';

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
    ]
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

    ]
  },
]


const Main = () => {

  React.useEffect(() => {
    fetch('http://localhost:3000/data/board.json').then(res => res.json()).then(res => console.log(res));
  },[]);
  return (
      <Layout>
        {categories.map((card,i) => i !== 1 && i !== 3 && <Card key={i} item={card} />)}
      </Layout>
  );
=======
import React, { useEffect, useState } from 'react';
import {authService, dbService} from "../fbase";
import Routes from "./Routes"
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';

const Main=() => {
  const[init, setInit] = useState(false)
  const [userObj, setUserObj] = useState(null);

  useEffect( () =>{
    authService.onAuthStateChanged(async(user) =>{
      if(user){
        await dbService
        .collection("user")
        .where("userId","==",user.uid)
        .onSnapshot( async (snapshot) => {
          const userInfo = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          // 검색결과가 없다면?
          if(userInfo[0] == null){
            const newUser = {
              userId: user.uid,
              lat: null,
              lng: null,
              createdAt: Date.now(),
              name: null,
              phoneNumber: null,
              isMale: null,
            }
            await dbService.collection("user").add(newUser);
            await dbService
            .collection("user")
            .where("userId","==",user.uid)
            .onSnapshot( async (snapshot) => {
              userInfo = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
            });
            setUserObj(userInfo[0]);
          } else {
            // 검색결과
            setUserObj(userInfo[0]);
          }
        });
      }else {
        setUserObj(null);
      }
      setInit(true);
    });

  }, []);
  
  return (
    <>
      {init ? 
        <Routes isLoggedIn={Boolean(userObj)} userObj={userObj}/> :
        "Initializing..."
      }
    </>
    );
  
>>>>>>> 91f7ecdafccb937c30100e6863d7e81ac7ad589a
}

export default Main;
