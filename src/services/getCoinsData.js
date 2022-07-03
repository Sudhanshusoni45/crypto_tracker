import axios from "axios";

const getCoinsData = (coinsPerPage, currentPageNumber) => {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=${coinsPerPage}&page=${currentPageNumber}&sparkline=false&price_change_percentage=24h%2C7d`;
  const response = axios.get(url);
  return response;
};

export { getCoinsData };
