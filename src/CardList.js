import React from "react";
import Card from "./Card";


const CardList = ({Plants}) => {
    const CardArray = Plants.map(element => <Card img ={element.img} navn = {element.navn} description={element.description} family={element.family}/>)
    return (
        <>
        {CardArray} 
        </>        
    )
}

export default CardList;