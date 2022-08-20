import React from 'react'
import "./Card_Reverse_Clow.css";
const Card_Reverse_Clow = ({cardInfo}) => {
    
  return (

    cardInfo._id=== "618a0cc5c0e81c0016b8c3a3" ||cardInfo._id=== "603a8aeb3da2c60015bd6940"||cardInfo._id=== "603a8c993da2c60015bd6943" || cardInfo._id=== "618a0cd2c0e81c0016b8c3a4" || cardInfo._id=== "618a0cd4c0e81c0016b8c3a5" || cardInfo._id==="618a0cd5c0e81c0016b8c3a6" || cardInfo._id==="618a0cd7c0e81c0016b8c3a7" ? 
 "" : (
    <div className="card-reverse--clow">
       
       <img src={cardInfo.cardsReverse.clowReverse} alt={cardInfo.spanishName} />
    </div>))
  
}

export default Card_Reverse_Clow