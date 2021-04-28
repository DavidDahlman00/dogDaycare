import React from "react";

function Header({goBack}) {

    let maybeButton = null;
    if(goBack!==false){
        maybeButton = <button onClick={goBack}>Back</button>;
    };

    return  <div className="App-header">
                Dogg'z DayCare.
                {maybeButton}
            </div> 
}
export default Header;