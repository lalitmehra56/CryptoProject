import React, { useContext, useEffect, useState } from "react";
import { fetchCoinData } from "../../../services/fetchCoinData";
import { useQuery } from "@tanstack/react-query";
import { CurrencyContext } from "../Context/Context";
import store from "../../store/store";
import { useNavigate } from "react-router-dom";
import PageLoader from "../pageLoader/PageLoader";

const CoinsTable = () => {
  // const { currency } = useContext(CurrencyContext);
  const { currency } = store();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(page, currency),

    // retry: 2,
    // retryDelay: 1000,
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  function handlecoinRedirect(id) {
    navigate(`/details/${id}`);
  }

  if (isError) {
    console.error("Query Errror :", error);
    return <div>Error:{error.message}.</div>;
  }

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto cursor-pointer">
      <div className="w-full bg-yellow-400 text-black flex py-4 px-2 font-semibold items-center justify-center ">
        {/*Header of the table*/}
        <div className="basis-[35%]">Coin</div>
        <div className="basis-[25%]">Price</div>
        <div className="basis-[20%]">24h change</div>
        <div className="basis-[20%]">Market Cap</div>
      </div>
      <div className="flex flex-col w-[80vw] mx-auto">
        {isLoading && <div>Loading...</div>}
        {data &&
          data.map((coin) => {
            return (
              <div
                onClick={() => {
                  handlecoinRedirect(coin.id);
                }}
                key={coin.id}
                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between"
              >
                <div className="flex items-center justify-start gap-3 basis-[35%]">
                  <div className="w-[5rem] h-[5rem] ">
                    <img
                      src={coin.image}
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>
                    <div className="text-xl">{coin.symbol}</div>
                  </div>
                </div>
                <div className="basis-[35%]">{coin.current_price}</div>
                <div className="basis-[20%]">{coin.price_change_24h}</div>
                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
      </div>

      <div className="flex gap-4 justify-center items-center">
        <button
          disabled={page == 1}
          onClick={() => {
            setPage(page - 1);
          }}
          className="btn btn-primary btn-wide text-white text-2xl"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
          className="btn btn-secondary btn-wide text-white text-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CoinsTable;
