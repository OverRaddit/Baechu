import { authService } from "fbase";
import React, { useState } from "react";
import { firebaseInstance } from "../fbase";

import '../Style/login.css';

const Login =() =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

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
            let data;
            if(newAccount){
                //join Logic
                data = await authService.createUserWithEmailAndPassword(email,password);
            } else{
                //log in Logic
                data = await authService.signInWithEmailAndPassword(email,password);
            }
            console.log(data);
        } catch(error){
            setError(error.message);
        }
    }
    const onSocialClick = async (event) => {
        const {
            target: {name},
        } = event;
        let provider;
        if(name === "google"){
            provider = await new firebaseInstance.auth.GoogleAuthProvider();
        }else if(name === "github"){
            provider = await new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
    }

    return (
        <div className="login">
            <section className="login-form">
            <h1>{(newAccount) ? "JOIN" : "LOGIN"}</h1>
            <h2>{error}</h2> <br></br>
            <form onSubmit = {onSubmit}>
                <div className="int-area">
                    <input type="text" name="email" id="id"
                    autocomplete="off" onChange={onChange} required/>
                    <label for="id"> USER NAME</label>
                 </div>
                <div className="int-area">
                    <input type="password" name="password" id="pw"
                    autocomplete="off" onChange={onChange} required/>
                    <label for="pw"> PASSWORD</label>
                </div>
                <div className="btn-area">
                    <button type="submit">{(newAccount) ? "Join" : "Login"}</button> <br/><br/>
                </div>
            </form>
            <div className="caption">
                 <a href=""> Forgot Password?</a>
            </div>
            <button type="submit" onClick={onSocialClick} name="google">LOGIN by Google</button> <br/><br/>
            <button type="submit" onClick={onSocialClick} name="github">LOGIN by Github </button>
            </section>
        </div>
    );
};

export default Login;