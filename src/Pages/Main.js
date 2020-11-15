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
  
}

export default Main;
