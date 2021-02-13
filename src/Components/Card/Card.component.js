import React from "react";
import   "./Card.styles.css";
const Card=({robot})=>{
  return(
      <div className="card-container"> 
         <img src={`https://robohash.org/${robot.id}?set=set2&size=200x200`}/>
         <p>{robot.name}</p>
         <p>{robot.email}</p>
      </div>
  )

}
export default Card