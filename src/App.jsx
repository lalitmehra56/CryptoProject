import { useState } from "react";
import "./App.css";

import NavBar from "./componets/NavBar/NavBar";
import { CurrencyContext } from "./componets/Context/Context";
import Home from "./componets/pages/Home";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <>
      <CurrencyContext.Provider value={{ currency, setCurrency }}>
        <Home />
        <NavBar />
      </CurrencyContext.Provider>

      {/* <Banner />
      <CoinsTable currency={currency} /> */}
    </>
  );
}

export default App;
