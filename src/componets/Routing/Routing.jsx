import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../pages/Layout";
// import PageLoader from "../PageLoader/PageLoader";

import { Facebook } from "react-content-loader";
import PageLoader from "../pageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import("../pages/Home"));
const CoinsDetailsPage = lazy(() => import("../pages/CoinsDetailsPage"));
const Routing = () => {
  return (
    <div>
      <CustomErrorBoundary>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/details/:coinId"
              element={
                <Suspense fallback={<PageLoader />}>
                  <CoinsDetailsPage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </CustomErrorBoundary>
    </div>
  );
};

export default Routing;
