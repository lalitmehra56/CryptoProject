import "./App.css";
import Routing from "./componets/Routing/Routing";

function App() {
  // const [currency, setCurrency] = useState("usd");
  return (
    <>
      {/* <CurrencyContext.Provider value={{ currency, setCurrency }}> */}
      <Routing />
      {/* </CurrencyContext.Provider> */}

      {/* <Banner />
      <CoinsTable currency={currency} /> */}
    </>
  );
}

export default App;
