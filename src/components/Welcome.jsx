import React from "react";

function Welcome({picture, nextScreen}) {

    let content = null;
    if(picture != null){
        content = 
                    <div className="welcomeContent" onClick={nextScreen}>
                        <img src= {picture[0]} alt="dog"/>
                        <img src= {picture[1]} alt="dog"/>
                        <img src= {picture[2]} alt="dog"/>
                        <img src= {picture[3]} alt="dog"/>
                        <img src= {picture[4]} alt="dog"/>
                        <img src= {picture[5]} alt="dog"/>
                        <img src= {picture[6]} alt="dog"/>
                        <img src= {picture[7]} alt="dog"/>
                        <img src= {picture[8]} alt="dog"/>
                    </div>
               
    }

    return  <div className="welcomeBody">
                Tap us to se us all!
                {content}
        </div>
}

export default Welcome;