import { useState } from "react";

const Club = () => {
    const [name,setName] = useState("");
    const [location,setLocation] = useState("");
    const [banner,setBannerr] = useState("");

    return (
        <div>
            <input
             value={name}
             onChange={onChange}
             type="text"
             placeholder = "클럽명을 적어주세요!"
             maxLength={120}
            />
            
        </div>
    );
}

export default Club;