import React from "react";
import "./Card.css"

const Card = ({img, navn, description, family}) => {
    return (
        <div className="tc bg-washed-green ma4 dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={img} alt=""/>
            <h1>{navn}</h1>
            <p>{description}</p>
            <h3>{family}</h3>
        </div>
    );
}

export default Card;