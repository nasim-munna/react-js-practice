import React from "react";


function Card(props){
    const {cardDesc,cardTitle}=props;
    return(
        <div>
            <div className='card'>
                <h3 className='cardTitle'>{cardTitle}</h3>
                <h3 className='cardDesc'>{cardDesc}</h3>
                <h3 className='cardFooter'>22\33\32</h3>
            </div>  
           
        </div>
    )
}
export default Card;