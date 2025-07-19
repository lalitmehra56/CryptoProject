import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import CoinsDetailsPage from "../pages/CoinsDetailsPage";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:coinId" element={<CoinsDetailsPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
