import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SakuraContextProvider } from "./components/context/context";
import Header from "./components/Header/Header";
import Card from "./components/Card_clow/Card/Card";
import Footer from "./components/Footer/Footer";

import CardSakura from "./components/Card_sakura/Card/Card";

CardSakura;

import "./App.css";

function App() {

  return (
    <div className="App">

      <Router>

        <SakuraContextProvider>
          <Header />
          <Routes>
            <Route path="/clow" element={<Card />} />

            <Route path="/sakura" element={<CardSakura />} />

          </Routes>
        </SakuraContextProvider>
        <Footer />

      </Router>

    </div>
  );
}

export default App;
