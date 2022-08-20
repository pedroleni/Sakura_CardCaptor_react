
import Card_Front_Clow from"../Card_Front_Clow/Card_Front_Clow";
import React, { useContext } from "react";
import { SakuraContext } from "../../context/context";
import "./Card.css";
import titulo from "../../../assets/TITULO_CLOW.gif";

const Card = () => {
  const { cards, user } = useContext(SakuraContext);
  
  return (
    
    // {/* <div className="titulo_clow"><img src={titulo}/></div> */}
    <section className="card">

            {
            cards.length > 0 ? (
              cards.map((card) => (
                (<Card_Front_Clow cardInfo={card} key={card._id} />)
  
              ))
            ) : (
              <p>Cargando cartas...</p>
            )}
    </section>
  );
};

export default Card;
