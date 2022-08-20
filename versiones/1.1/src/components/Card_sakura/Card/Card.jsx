
import Card_Front_Sakura from"../Card_Front_Sakura/Card_Front_Sakura";
import React, { useContext } from "react";
import { SakuraContext } from "../../context/context";
import "./Card.css";

const CardSakura = () => {
  const { cards, user } = useContext(SakuraContext);
  
  return (
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
  );
};

export default CardSakura;
