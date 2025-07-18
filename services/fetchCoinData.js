import axios from "axios";
import axiosInstance from "../helper/axios";

export async function fetchCoinData(page, currency) {
  const perPage = 10;
  try {
    const response = await axiosInstance.get(
      `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
