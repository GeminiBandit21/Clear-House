import React from 'react'
import "./card.scss"


export default function Card({value, suit}) {
    return(
        <div className="card">
            <div className="top">{value}{suit}</div>
            <div className="middle">{suit}</div>
            <div className="bottom">{value}{suit}</div>
        </div>
        );
    }



