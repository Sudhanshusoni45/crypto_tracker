import { getCoinsData } from "../services/getCoinsData";

const getCoinsDataHandler = async (setCoinData) => {
  try {
    const response = await getCoinsData();
    console.log("response:", response);
    if (response.status === 200) {
      const { data } = response;
      setCoinData((prevData) => data);
    }
  } catch (error) {
    console.error(error);
  }
};

export { getCoinsDataHandler };
