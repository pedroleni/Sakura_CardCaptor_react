
import Card_Front_Clow from"../Card_Front_Clow/Card_Front_Clow";
import React, { useContext } from "react";
import { SakuraContext } from "../../context/context";
import "./Card.css";
import titulo from "../../../assets/TITULO_CLOW.gif";
import swipe from "../../../assets/swipe 5.gif"

const Card = () => {
  const { cards, user } = useContext(SakuraContext);
  
  return (
    
    // {/* <div className="titulo_clow"><img src={titulo}/></div> */}
    <div className="contenido">

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
    <div className="swipe"><img src={swipe} alt="swipe" /></div>

    </div>
  );

};

export default Card;
