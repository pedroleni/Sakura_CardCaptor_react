import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SakuraContext = createContext();

export const SakuraContextProvider = ({ children }) => {

  const [user, setUser] = useState(undefined);
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    const raw = await axios.get("https://protected-taiga-89091.herokuapp.com/api/card/");
    setCards(raw.data.data);
    console.log("Esto vale" +cards)
  };



  const loginUser = () => {
    setUser("Pedro");
  };

  const logoutUser = () => {
    setUser(undefined);
  }
 
  useEffect(() => {
    getCards();
    
  }, []);

  return (
    <SakuraContext.Provider value={{ cards,user, loginUser, logoutUser }}>
      {children}
    </SakuraContext.Provider>
  );
};
