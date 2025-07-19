import Home from "../pages/Home";
import { Routes, Route } from "react-router-dom";
import CoinsDetailsPage from "../pages/CoinsDetailsPage";
import MainLayout from "../pages/Layout";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/details/:coinId" element={<CoinsDetailsPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
