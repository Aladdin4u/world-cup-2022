import React from "react";
import Round from "./Round";

const Home = () => {
    return ( 
        <>
            <div>
                <img src="https://user-images.githubusercontent.com/101972392/203936641-33329426-af72-42d0-8604-89a4898fb023.jpg" style={{width:"100%",height:"auto"}}  alt="fifa2022" />
            </div>
            <Round group="R16" type="Round 16" />
            <Round group="QR" type="Quarter Final" />
            <Round group="semi" type="Semi Final" />
            <Round group="3RD" type="Third Place" />
            <Round group="FIN" type="Final" />
            <div>
                <img src="https://user-images.githubusercontent.com/101972392/203936706-8975ea9f-74a7-4437-ba34-6d2ab64d98f0.png" style={{width:"100%",height:"auto"}}  alt="Group" />
            </div>
        </>
     );
}
 
export default Home;