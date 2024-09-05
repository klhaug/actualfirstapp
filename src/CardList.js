import React from "react";
import Card from "./Card";


const CardList = ({plants}) => {
    const CardArray = plants.map(element => <Card key={element.id} img ={element.img} navn = {element.navn} description={element.description} family={element.family}/>)
    return (
        <>
        {CardArray} 
        </>        
    )
}

export default CardList;