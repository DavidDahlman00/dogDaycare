import React, { useState } from "react";

function Dogcard(props) {
    let buttonText = 'CheckOut'
  
    function changeButtonText(){
        if(props.present===true){
             buttonText='CheckOut' 
        }else {
            buttonText='CheckIn'
        }
    }
   

    
    changeButtonText()

    return <div className="DogCard" >
             <h2>{props.name}</h2>
             <div className="DogBody">
                <div className="DogImageSide">
                <img src= {props.img} alt="dog"/>
                <button onClick={props.changePresent}>
                Check In/Out
                {()=> props.present? 'CheckOut' : 'CheckIn'}
                </button>
                </div>
                
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