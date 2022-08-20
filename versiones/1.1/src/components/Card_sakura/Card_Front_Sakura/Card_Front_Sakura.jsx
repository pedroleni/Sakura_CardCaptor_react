import React from "react";
import "./Card_Front_Sakura.css";
import Card_Reverse_Sakura from "../Card_Reverse_Sakura/Card_Reverse_Sakura";
const Card_Front_Sakura = ({ cardInfo }) => {
  return cardInfo._id === "618a0cc5c0e81c0016b8c3a3" ||
    cardInfo._id === "618a0cd2c0e81c0016b8c3a4" ||
    cardInfo._id === "618a0cd4c0e81c0016b8c3a5" ||
    cardInfo._id === "618a0cd5c0e81c0016b8c3a6" ||
    cardInfo._id === "618a0cd7c0e81c0016b8c3a7" ? (
    ""
  ) : (
    <div className="flipCard-sakura">
      
        <h2 className="nameCard_sakura">{cardInfo.spanishName}</h2>
      
      <div className="cardContainer-sakura">
        <Card_Reverse_Sakura cardInfo={cardInfo} key={cardInfo._id} />
        <div className="card-front--sakura">
          <img src={cardInfo.sakuraCard} alt={cardInfo.spanishName} />
        </div>
      </div>
    </div>
  );
};

export default Card_Front_Sakura;
