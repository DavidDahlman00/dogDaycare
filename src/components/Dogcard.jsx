import React from "react";

function Dogcard(props) {
    
    
    return <div className="DogCard" >
             <h2>{props.name}</h2>
             <div className="DogBody">
                <img src= {props.img} alt="dog"/>
                <div className="info">
                    <p>present: {props.present}</p>
                    <p>age: {props.age}</p>
                    <p>sex: {props.sex}</p>
                    <p>breed: {props.breed}</p>
                    <p>chipNumber: {props.chipNumber}</p>
                    <p>owner: {props.ownerFname} {props.ownerLname}</p>
                    <p>phone: {props.phone}</p>
                </div>
             </div>           
    </div>
   
}

export default Dogcard;