import React, { useEffect, useState } from "react";
import { fetchCoinData } from "../../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";

const CoinsTable = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoinData(page, "usd"),

    retry: 2,
    retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
  });

  useEffect(() => {
    console.log(data), [data];
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.error("Query Errror :", error);
    return <div>Error:{error.message}.</div>;
  }

  return (
    <div>
      CoinTable <button onClick={() => setPage(page + 1)}>Click</button> {page};
    </div>
  );
};

export default CoinsTable;
