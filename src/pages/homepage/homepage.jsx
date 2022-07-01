import { useEffect, useState } from "react";
import { getCoinsDataHandler } from "../../util/getCoinsDataHandler";
import "./homepage.css";

const Homepage = () => {
  const [coinData, setCoinData] = useState("");
  useEffect(() => {
    getCoinsDataHandler(setCoinData);
  }, []);
  return <>Homepage</>;
};

export default Homepage;
