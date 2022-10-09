import React from "react"

export default function Card() {
    return (
        <div className="card">
            <img className="personCard" src="./personCard.png"></img>
            <div className="cardStats">
                <span>5.0</span>
                <span className="grayText">(0) .USA</span>
            </div>
            <p>life lessons with Katie Zaferes</p>
            <p><span className="boldSpan">From $136 /</span>person</p>
        </div>
    )
}

export function CardDetails(card){
    return (
        <div className="card">
            <img className="personCard" src={card.img}></img>
            <div className="cardStats">
            <img className="starIcon" src="./star-icon.png"></img>
                <span>{card.rating}</span>
                <span className="grayText">{card.country}</span>
                <span className="grayText">({card.totalTenants})</span>
            </div>
            <p>life lessons with {card.name}</p>
            <p><span className="boldSpan">From {card.price} /</span>person</p>
        </div>
    )
}