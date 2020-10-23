import React, { useEffect, useState } from 'react';
import {authService} from "../fbase";
import Routes from "./Routes"

function Main() {
  console.log(authService.currentUser);
  const[init, setInit] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() =>{
    authService.onAuthStateChanged((user) =>{
      if(user){
        setIsLoggedIn(true);
      }else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? <Routes isLoggedIn={isLoggedIn}/> : "Initializing..."}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
    );
  
}

export default Main;
