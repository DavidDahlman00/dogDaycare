import React from "react";

function Dogcard(props) {

    
    return <div className="DogCard" >
             <h2>{props.name}</h2>
             <div className="DogBody">
                <img src= {props.img} alt="dog"/>
                <div className="info">
                    <p>{props.sex}</p>
                    <p>{props.breed}</p>
                    <p>{props.chipNumber}</p>
                </div>
             </div>           
    </div>
   
}

export default Dogcard;