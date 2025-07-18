import { useState } from "react";
import "./App.css";
import Banner from "./componets/Banner/Banner";
import CoinsTable from "./componets/CoinsTable/CoinsTable";

import NavBar from "./componets/NavBar/NavBar";

function App() {
  const [currency, setCurrency] = useState("usd");
  return (
    <>
      <NavBar setCurrency={setCurrency} />
      <Banner />
      <CoinsTable currency={currency} />
    </>
  );
}

export default App;
