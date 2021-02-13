import React from 'react'
import './Search.styles.css'
const Search=({changeText})=>{

    return(
        <div className="search">
          <input type="search" placeholder="search monster here..." onChange={(e)=>changeText(e.target.value)}/>
        </div>
    )
}
export default Search