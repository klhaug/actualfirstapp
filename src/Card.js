import React from "react";
import './Card.css';

const Card = ({picture, name, description, family}) => {
    return (
        <div className="tc bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img src={picture} alt=""/>
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>{family}</h2>
        </div>
    );
};

export default Card;
