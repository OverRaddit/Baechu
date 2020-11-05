import React, { useState } from 'react';

const My_Page = ({userObj}) => {
    const [editing,setEditing] = useState(false);

    return (
        <div>
            <form>
                <input type="text" ></input>
            </form>
        </div>
    );
}

export default My_Page;