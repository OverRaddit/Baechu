import React, { useState } from "react";
import Map from './Mapexample'


const MapSearch = ({ userObj }) => {
    const [place, setPlace] = useState("");
    const [input, setInput] = useState("");
    const [userInfo, setUserInfo] = useState("");
    const onChange = (event) => {
       const {
           target: {value},
       } = event;
       setInput(value);
    }

    const onSubmit = (event) =>{
        if(input === ""){
            return;
        }
        event.preventDefault();
        setPlace(input);
        setInput("");
    } 
    return (
        <div>
            <Map searchPlace={place} userObj={userObj}/>
            <form onSubmit={onSubmit}>
                <input
                name="input"
                placeholder = "장소를 검색해주세요!"
                type = "text"
                onChange={onChange}
                value={input}
                />
            
                <button type="submit">검색</button>
            </form>
        </div>
    );
}

export default MapSearch;