import React from 'react';

const ViewClub = ({ ClubObj,userObj }) => {
    
    return (
        <>
            <div>
                <h1>{ClubObj.name}</h1>
                <img src={ClubObj.attachmentUrl} />
                <p>{ClubObj.desc}</p>
                <h4>창립자:{userObj.name}</h4>
            </div>
        </>
    );
}

export default ViewClub;