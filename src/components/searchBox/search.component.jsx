import React from "react";
import "../searchBox/search.styles.css"


export const SearchBox =({placeholder, handleChange})=>(
    <input type="search" 
    className="search"
    placeholder={placeholder}
    onChange={handleChange}>
    </input>
)