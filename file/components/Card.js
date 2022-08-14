import React from "react"


export default function Card(props){
   
    
    return(
       <div className="foodContainer">
            <img className="foodImg" src ={`./images/${props.img}`} />
            <h2 className="foodTitle"> {props.title} </h2>
       </div>
    )
}
