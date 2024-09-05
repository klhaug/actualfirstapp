import React from "react";
import "./Card.css"

const Card = ({img, navn, description, family}) => {
    return (
        <div className="tc bg-washed-green ma4 dib br3 pa4 ma2 grow bw2 shadow-5">
            <img src={img} alt=""/>
            <div className="bg-white pa3 ma3 br3">
                <h1>{navn}</h1>
                <p>{description}</p>
                <h3>{family}</h3>
            </div>
        </div>
    );
}

export default Card;