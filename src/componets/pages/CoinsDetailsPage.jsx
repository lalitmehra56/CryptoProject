import React from "react";
import { useParams } from "react-router-dom";

const CoinsDetailsPage = () => {
  const { coinId } = useParams();
  return (
    <div>
      <h1>Coin Details Page {coinId}</h1>
    </div>
  );
};

export default CoinsDetailsPage;
