import React from "react"

export function CardDetails(card){
    let badgeText 
    if (card.item.openSpots === 0 ) {
        badgeText = "SOLD OUT";
    }
    else if (card.item.location === "Online") {
        badgeText = "Online";
    }

    return (
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>} 
            <img className="personCard" src={card.item.coverImg}></img>
            <div className="cardStats">
            <img className="starIcon" src="./star-icon.png"></img>
                <span>{card.item.stats.rating}</span>
                <span className="grayText">({card.item.stats.reviewCount})</span>
                <span className="grayText">{card.item.location}</span>
            </div>
            <p>{card.item.title}</p>
            <p><span className="boldSpan">From {card.item.price} /</span>person</p>
        </div>
    )
}