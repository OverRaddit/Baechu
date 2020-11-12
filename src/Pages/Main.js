import React, { useEffect, useState } from 'react';
import {authService, dbService} from "../fbase";
import Routes from "./Routes"

function Main() {
  const[init, setInit] = useState(false)
  const [userObj, setUserObj] = useState(null);

  useEffect( () =>{
    authService.onAuthStateChanged(async(user) =>{
      if(user){
        // collection에 있는 user목록에서 uid가 일치하는 것을 찾아 가져온다.
        // 새로고침을 해야됨!! 가입하고 새로고침해서 이 함수가 다시 실행되도록 하여야함!!! 이거 어떻게 고치지....ㄴ
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
      {init ? <Routes isLoggedIn={Boolean(userObj)} userObj={userObj}/> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
    );
  
}

export default Main;
