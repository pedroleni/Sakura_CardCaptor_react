import React from "react";
import portada from "../../assets/sakura_portada.gif";
import clow from "../../assets/Reverso_clow.webp";
import sakura from "../../assets/Reverso-sakura.jpeg";
import pareja from "../../assets/pareja.png";
import "./Header.css";

const Header = ({ setShowClow, setShowSakura }) => {
  return (
    <header>
      <div className="img_portada">
        <img src={portada} alt="opening sakura card captor" />
      </div>

      <nav>
        <img className="pareja" src={pareja} alt="hola" />
        <div className="buttonCard">
          <button className="button_clow" onClick={() => setShowClow(true) & setShowSakura(false)}>
            <div>
              <img src={clow} alt="reverse clow" />
            </div>
          </button>
          <button className="button_sakura" onClick={() => setShowSakura(true) & setShowClow(false)}>
            <div>
              <img src={sakura} alt="reverse sakura" />
            </div>
          </button>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
