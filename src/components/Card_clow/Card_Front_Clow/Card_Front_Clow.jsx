import React from "react";
import "./Card_Front_Clow.css";
import Card_Reverse_Clow from "../Card_Reverse_Clow/Card_Reverse_Clow";
const Card_Front_Clow = ({ cardInfo }) => {
  return cardInfo._id === "618a0cc5c0e81c0016b8c3a3" ||
    cardInfo._id === "603a8aeb3da2c60015bd6940" ||
    cardInfo._id === "603a8c993da2c60015bd6943" ||
    cardInfo._id === "618a0cd2c0e81c0016b8c3a4" ||
    cardInfo._id === "618a0cd4c0e81c0016b8c3a5" ||
    cardInfo._id === "618a0cd5c0e81c0016b8c3a6" ||
    cardInfo._id === "618a0cd7c0e81c0016b8c3a7" ? (
    ""
  ) : (
    <div className="flipCard-clow">
      
        <h2 className="nameCard_clow">{cardInfo.spanishName}</h2>
      
      <div className="cardContainer-clow">
        <Card_Reverse_Clow cardInfo={cardInfo} key={cardInfo._id} />
        <div className="card-front--clow">
          <img src={cardInfo.clowCard} alt={cardInfo.spanishName} />
        </div>
      </div>
    </div>
  );
};

export default Card_Front_Clow;
