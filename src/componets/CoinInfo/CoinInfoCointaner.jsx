import CoinInfo from "./CoinInfo";
import PageLoader from "../pageLoader/PageLoader";
import Alert from "../Alert/Alert";

import useFetchCoinHistory from "../hooks/useFetchcoinHistory";

function CoinInfoConatiner({ coinId }) {
  const [
    historicData,
    isLoading,
    isError,
    setdays,
    setCoinInerval,
    days,
    currency,
  ] = useFetchCoinHistory(coinId);

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
