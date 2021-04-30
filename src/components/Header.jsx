import React from "react";

function Header({goBack, allDogs, presentDogs, notpresentDogs}) {

    let maybeButton = null;
    let allButton = null;
    let presentButton = null;
    let notPresentButton = null;
    if(goBack!==false){
        maybeButton = <button onClick={goBack}>Back</button>;
    };
    if(allDogs!==false){
        allButton = <button onClick={allDogs}>All</button>;
    };
    if(presentDogs!==false){
        presentButton = <button onClick={presentDogs}>Present</button>;
    };
    if(notpresentDogs!==false){
        notPresentButton = <button onClick={notpresentDogs}>Not Present</button>;
    };

    return  <div className="App-header">
                Doggy DayCare.
                {allButton}
                {presentButton}
                {notPresentButton}
                {maybeButton}
            </div> 
}
export default Header;