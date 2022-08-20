import React from "react";
import personaje from "../../assets/personaje.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className="image_footer_first"><div><img  src={personaje} alt="personajes"/></div></div>
    <footer>

        
        <div>
            <ul>
                <li>@Pedro Lerida Nieto 2022</li>
                <li className="image_footer"><a href="https://github.com/pedroleni" target="_blank"><img src="https://avatars.githubusercontent.com/u/38913098?v=4" alt="github"/></a></li>
                <li className="image_footer"><a href="https://www.linkedin.com/in/pedro-l%C3%A9rida-nieto-260501229/" target="_blank"><img src="https://media.discordapp.net/attachments/701164137081733201/1008557611647500348/linkedin_copia.png" alt="linkedin"/></a></li>
            </ul>
       
        </div>
    </footer>
    </>
    
  );
};

export default Footer;