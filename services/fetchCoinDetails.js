import axios from "axios";
import axiosInstance from "../helper/axios";

export async function fetchCoinDetails(id) {
  //   const perPage = 10;
  try {
    const response = await axiosInstance.get(`/coins/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
