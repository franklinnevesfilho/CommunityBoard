import React from "react";
import Card from "./Card.jsx";

const Grid = ({cardData}) =>{
    return (
        <div className={'grid'}>
            { cardData.map((card,index)=>(
                <Card key={index}
                      imageUrl={card.imageUrl}
                      title={card.title}
                      address={card.address}
                      link={card.link}/>
            ))}

        </div>

    )
}
export default Grid;