import React from "react";
import Live from "./Live";

const Home = () => {
    return ( 
        <>
            <div>
                <img src="/wcimage/fifa2022.jpg" style={{width:"100%",height:"auto"}}  alt="fifa2022" />
            </div>
            <Live />
            <div>
                <img src="/wcimage/Groups.png" style={{width:"100%",height:"auto"}}  alt="Group" />
            </div>
        </>
     );
}
 
export default Home;