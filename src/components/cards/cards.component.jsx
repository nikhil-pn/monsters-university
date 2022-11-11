import React from "react";
import "../cards/cards.styles.css"

export const Card = (props)=>(
    <div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?set=set2?size=180x180`} alt="monster img" />
    <h1>{props.monster.name}</h1>
    <h3>{props.monster.email}</h3>

    </div>
)