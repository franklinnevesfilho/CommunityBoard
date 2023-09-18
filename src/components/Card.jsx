import React from "react";

const Card = (card) =>{
    return (
        <div className={'card'}>
            <img className={'card-img'} src={card.imageUrl} alt={card.title + ' image'} />
            <h4>{card.title}</h4>
            <a target="BLANK_" href={card.link}>Go to page</a>
            <h6>{card.address}</h6>
        </div>
    )
}

export default Card;