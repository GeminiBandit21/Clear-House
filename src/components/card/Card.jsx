import React from 'react'
import "./card.scss"


export default function Card({value, suit}) {
// const color = (suit) =>{
//     suit ==="♣" || suit ==="♠" ? 'black' : 'red'
//     return color;
// }

    return(
        <div className="card red">
            <div className="top">{value}{suit}</div>
            <div className="middle" >{suit}</div>
            <div className="bottom" >{value}{suit}</div>
        </div>
        );
    }



