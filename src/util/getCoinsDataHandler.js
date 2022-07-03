import { getCoinsData } from "../services/getCoinsData";

const getCoinsDataHandler = async (
  setCoinData,
  coinsPerPage,
  currentPageNumber
) => {
  try {
    const response = await getCoinsData(coinsPerPage, currentPageNumber);
    if (response.status === 200) {
      const { data } = response;
      setCoinData((prevData) => data);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getCoinsDataHandler };
