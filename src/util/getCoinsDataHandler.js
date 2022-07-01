import { getCoinsData } from "../services/getCoinsData";

const getCoinsDataHandler = async (setCoinData) => {
  try {
    const response = await getCoinsData();
    console.log("response:", response);
  } catch (error) {
    console.error(error);
  }
};

export { getCoinsDataHandler };
