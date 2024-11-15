import React from "react";
// import katie from '../assets/images/katie-zaref.png'
// import star from '../assets/images/star.png'
export default function Card(props){
    let badge 
    if(props.openSpots===0){
        badge = 'SOLD OUT'
    } else if(props.location === 'Online'){
        badge = 'ONLINE'
    }
    return (
        <div className="card">
        {badge && <div className="card-badge">{badge}</div>}       
         < img src={`/images/${props.coverImg}`} alt="images" className="card-image"/>
            <div className="stat">
                <img src={`/images/${props.star}`}className="card-star"/>
                <span> {props.rating} </span>
                <span className="gray">  ({props.reviewCount}) •   </span>
                <span className="gray"> {props.location} </span>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-price"><span className="bold">From {props.price} </span> / person</p>
        </div>
    )
}