import { useState } from 'react'
import { SakuraContextProvider } from "./components/context/context";
import Header from "./components/Header/Header";
import Card from "./components/Card_clow/Card/Card"
import Footer from "./components/Footer/Footer"

import CardSakura from "./components/Card_sakura/Card/Card"

CardSakura


import './App.css'

function App() {
  const [showClow, setShowClow] = useState(false);
  const [showSakura, setShowSakura] = useState(false);

  return (
    <div className="App">
    <SakuraContextProvider>
      <Header 
      setShowClow={setShowClow}
      setShowSakura={setShowSakura}/>


      {showClow ?<Card/> : ""}
      {showSakura ? <CardSakura/> : ""}

      

      </SakuraContextProvider>
      <Footer/>
      
      
    </div>
  )
}

export default App
