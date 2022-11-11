import React from "react";
import { Card } from "../cards/cards.component";
import "../classLists/cardLists.styles.css"

export const CardLists = (props) =>(
    <div className="card-list ">
        {props.monster.map(user => (
            <Card key={user.id} monster={user}></Card>
        ))}
    </div>
)