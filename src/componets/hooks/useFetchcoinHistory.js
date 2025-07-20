import { fetchCoinHistoricData } from "../../../services/fetchCoinHistoricData";
import { useState } from "react";
// import { fetchCoinHistoricData } from "../../../services/fetchCoinHistoricData";
import { useQuery } from "@tanstack/react-query";

import store from "../../store/store";
function useFetchCoinHistory(coinId) {
  const { currency } = store();
  const [days, setdays] = useState(7);
  const [interval, setCoinInerval] = useState("");

  const {
    data: historicData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coinHistoricData", coinId, currency, days, interval],
    queryFn: () => fetchCoinHistoricData(coinId, currency, days, interval),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });
  return [
    historicData,
    isLoading,
    isError,
    setdays,
    setCoinInerval,
    days,
    currency,
  ];
}

export default useFetchCoinHistory;
