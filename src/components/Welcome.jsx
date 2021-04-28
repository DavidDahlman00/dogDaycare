import React from "react";

function Welcome({picture, nextScreen}) {

    let content = null;
    if(picture != null){
        content = <div>
            <img src= {picture[0]} alt="dog"/>
            <img src= {picture[1]} alt="dog"/>
            <img src= {picture[2]} alt="dog"/>
            <img src= {picture[3]} alt="dog"/>
        </div>
    }

    return  <div>
                WELCOME
                <button onClick={nextScreen}>To register</button>
                {content}
        </div>
}

export default Welcome;