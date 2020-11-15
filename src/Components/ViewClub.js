import { dbService } from 'fbase';
import React, { useEffect, useState } from 'react';

const ViewClub = ({ match }) => {
    const [ClubObj, setClubObj] = useState([]);

    useEffect( ()=> {
        dbService.collection("club")
        .where("name","==",match.params.clubName)
        .onSnapshot((snapshot)=>{
            const clubArray = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setClubObj(clubArray[0]);
        })
    }, []);
    
    return (
        <>
            <div>
                <h1>{ClubObj.name}</h1>
                <img src={ClubObj.attachmentUrl} width="100px" height="100px"/>
                <p>{ClubObj.desc}</p>
                <h4>창립자:{ClubObj.creator}</h4>
            </div>
        </>
    );
}

export default ViewClub;


