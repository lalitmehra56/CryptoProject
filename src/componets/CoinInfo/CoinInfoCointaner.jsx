import { useQuery } from "@tanstack/react-query";
import CoinInfo from "./CoinInfo";
import { useState } from "react";
import { fetchCoinHistoricData } from "../../../services/fetchCoinHistoricData";
import PageLoader from "../pageLoader/PageLoader";
import Alert from "../Alert/Alert";
import store from "../../store/store";

function CoinInfoConatiner({ coinId }) {
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

  if (isLoading) {
    return <PageLoader />;
  }

  if (isError) {
    return <Alert message="Error fetching the data" type="error" />;
  }
  return (
    <div>
      <CoinInfo
        historicData={historicData}
        setdays={setdays}
        setCoinInerval={setCoinInerval}
        days={days}
        currency={currency}
      />
    </div>
  );
}

export default CoinInfoConatiner;
