import React from "react";

import Dogcard from './Dogcard';


function createCard(contact) {
    return <button onClick={console.log("you clicked me")}>{contact.namn}</button>
}

function Register({nextScreen}) {

    const test = [{namn : 'hej'}, {namn :'hejsan'}, {namn :'tjena'}]


    
    return  <div>
                REGISTER now
                <button onClick={nextScreen}>To dog</button>
                {test.map(createCard)}
        </div>
}

export default Register;