import React from "react";
import portada from "../../assets/sakura_portada.gif";
import clow from "../../assets/Reverso_clow.png";
import sakura from "../../assets/Reverso-sakura.jpeg";
import pareja from "../../assets/pareja.png";
import "./Header.css";

import{Link} from "react-router-dom";

const Header = ({ setShowClow, setShowSakura }) => {
  return (
    <header>
      <div className="img_portada">
        <img src={portada} alt="opening sakura card captor" />
      </div>

      <nav>
        <img className="pareja" src={pareja} alt="hola" />
        <div className="buttonCard">
          <button className="button_clow">
            <div>
              <Link to="/clow"><img src={clow} alt="reverse clow" /></Link>
            </div>
          </button>
          <button className="button_sakura" >
            <div>
            <Link to="/sakura"><img src={sakura} alt="reverse sakura" /></Link>
            </div>
          </button>
        </div>
      </nav>
      
    </header>
  );
};

export default Header;
