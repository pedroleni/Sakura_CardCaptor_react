
import Card_Front_Sakura from"../Card_Front_Sakura/Card_Front_Sakura";
import React, { useContext } from "react";
import { SakuraContext } from "../../context/context";
import "./Card.css";
import swipe from "../../../assets/swipe 5.gif"

const CardSakura = () => {
  const { cards, user } = useContext(SakuraContext);
  
  return (
  <div className="contenido">
    <section className="card_Sakura">

            {
            cards.length > 0 ? (
              cards.map((card) => (
                (<Card_Front_Sakura cardInfo={card} key={card._id} />)
  
              ))
            ) : (
              <p>Cargando cartas...</p>
            )}
    </section>
    <div className="swipe"><img src={swipe} alt="swipe" /></div>
  </div>  
  );
};

export default CardSakura;
