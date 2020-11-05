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
        await dbService
        .collection("user")
        .where("userId","==",user.uid)
        .onSnapshot( (snapshot) => {
          const userInfo = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setUserObj(userInfo[0]);
          console.log(userInfo[0]);
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
