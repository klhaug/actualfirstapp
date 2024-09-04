import React from "react";
import Card from './Card';


const CardList = ({Plants}) => {
    return (
        <> 
            {
            Plants.map(e => 
                <Card 
                    key={e} 
                    picture={e.imgFile} 
                    name={e.navn}
                    description={e.description}                
                    family={e.family}      
                    /> 
                )
            }
        </>
    );
}

export default CardList;