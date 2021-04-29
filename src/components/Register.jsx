import React from "react";

import Dogcard from './Dogcard';




function Register(props){//({key, name, img, nextScreen}) {

    


    //<button onClick={nextScreen}>To dog</button>
    return  <div className="RegisterCard" onClick={props.nextScreen}>
    <h2>{props.name}</h2>
    <div className="RegisterImage">
       <img src= {props.img} alt="dog"/>
    </div>           
</div>
}

export default Register;