import React from "react";

import Dogcard from './Dogcard';




function Register({name, img, nextScreen}) {

    


    //<button onClick={nextScreen}>To dog</button>
    return  <div className="RegisterCard" >
    <h2>{name}</h2>
    <div className="RegisterImage">
       <img src= {img} alt="dog"/>
    </div>           
</div>
}

export default Register;