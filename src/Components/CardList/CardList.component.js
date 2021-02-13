import React from "react";
import './CardList.styles.css'
const CardList=(props)=>{
return (
    <div className="card-list">
        {props.children}

    </div>
)
}
export default CardList