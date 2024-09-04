import React from "react";
import './Card.css';

const Card = ({picture, name, description, family}) => {
    return (
        <div className="tc dib br3 pa4 ma4 grow bw2 shadow-5 Card1" >
            <img src={picture} alt=""/>
            <h1>{name}</h1>
            <p>{description}</p>
            <h2>{family}</h2>
        </div>
    );
};

export default Card;
