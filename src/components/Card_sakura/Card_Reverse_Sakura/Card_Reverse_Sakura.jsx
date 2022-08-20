import React from 'react'
import "./Card_Reverse_Sakura.css";
const Card_Reverse_Sakura = ({cardInfo}) => {
    
  return (

    cardInfo._id=== "618a0cc5c0e81c0016b8c3a3" || cardInfo._id=== "618a0cd2c0e81c0016b8c3a4" || cardInfo._id=== "618a0cd4c0e81c0016b8c3a5" || cardInfo._id==="618a0cd5c0e81c0016b8c3a6" || cardInfo._id==="618a0cd7c0e81c0016b8c3a7" ? 
 "" : (
    <div className="card-reverse--sakura">
       
       <img src={cardInfo.cardsReverse.sakuraReverse} alt={cardInfo.spanishName} />
    </div>))
  
}

export default Card_Reverse_Sakura