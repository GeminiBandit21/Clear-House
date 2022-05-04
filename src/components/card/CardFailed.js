import React from 'react'
//import{useReducer} from "react"
import "./card.scss"
//const SUITS=["♠","♥","♣","♦"]
//const VALUES =["A","2","3","4","5","6","7","8","9","10","K","Q","J"]

function cardEle(props) {
  return (
    <div className="card">
        <div className="top">{props.value}{props.suit}</div>
        <div className="middle">{props.suit}</div>
        <div className="bottom">{props.value}{props.suit}</div>
    </div>
  )
}

export default cardEle