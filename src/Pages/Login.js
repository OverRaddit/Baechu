import { authService } from "fbase";
import React, { useState } from "react";
import { firebaseInstance } from "../fbase";

import '../Style/login.css';

const Login =() =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");
    //const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if(name === "email"){
            setEmail(value);
        } else if (name === "password"){
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        try{
            if(newAccount){
                //join Logic
                await authService.createUserWithEmailAndPassword(email,password);
            } else{
                //log in Logic
                await authService.signInWithEmailAndPassword(email,password);
            }

        } catch(error){
            setError(error.message);
        }
    }
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
    }

    return (
        <div className="login">
            <section className="login-form">
            <span onClick={toggleAccount}>
                <h1>{(newAccount) ? "JOIN" : "LOGIN"}</h1>
            </span>
            <h2>{error}</h2>
            <div className="cabbage">
                <img src="https://www.flaticon.com/svg/static/icons/svg/765/765618.svg"/>
            </div>
            <form onSubmit = {onSubmit}>
                <div className="int-area">
                    <input type="text" name="email" id="id"
                    autoComplete="off" onChange={onChange} required/>
                    <label htmlFor="id"> USER NAME</label>
                 </div>
                <div className="int-area">
                    <input type="password" name="password" id="pw"
                    autoComplete="off" onChange={onChange} required/>
                    <label htmlFor="pw"> PASSWORD</label>
                </div>
                <div className="btn-area">
                    <button type="submit">{(newAccount) ? "Join" : "Login"}</button> <br/><br/>
                </div>
            </form>
            <div className="caption">
                 <a href=""> Forgot Password?</a>
            </div>
            <button type="submit" onClick={onSocialClick} name="google">by Google</button> <br/><br/>
            <button type="submit" onClick={onSocialClick} name="github">by Github </button>
            </section>
        </div>
    );
};

export default Login;