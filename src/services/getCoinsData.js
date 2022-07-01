import axios from "axios";

const getCoinsData = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h%2C7d";
  const response = axios.get(url);
  return response;
};

export { getCoinsData };
