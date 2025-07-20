import axios from "axios";
import axiosInstance from "../helper/axios";

export async function fetchCoinHistoricData(
  id,
  currency = "usd",
  days = 7,
  interval
) {
  //   const perPage = 10;
  try {
    const response = await axiosInstance.get(
      `/coins/${id}/market_chart?days=${days}&vs_currency=${currency}&interval=${interval}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
