import { useEffect, useState } from "react";
import { down_arrow } from "../../assests";
import { Card } from "../../components/card/Card";
import { Navbar } from "../../components/navbar/Navbar";
import { getCoinsDataHandler } from "../../util/getCoinsDataHandler";
import "./homepage.css";

const Homepage = () => {
  const [coinData, setCoinData] = useState("");
  useEffect(() => {
    getCoinsDataHandler(setCoinData);
  }, []);
  return (
    <>
      <Navbar />
      <div className="homepage_slider">
        <Card />
        <div>
          <i className="far fa-circle slider_index_indicator"> </i>
          <i className="fas fa-circle slider_index_indicator"> </i>
          <i className="far fa-circle slider_index_indicator"> </i>
          <i className="far fa-circle slider_index_indicator"> </i>
        </div>
      </div>
      <div className="homepage_heading">
        <h3>Top 100 Cryptocurrencies by Market Cap</h3>
      </div>
      <table className="coinsTable">
        <thead>
          <tr>
            <th></th>
            <th colSpan={2} className="text_align_left">
              NAME
            </th>
            <th colSpan={1} className="text_align_left">
              PRICE
            </th>
            <th className="">
              24H
              <img src={down_arrow} alt="" className="display_inline" />
            </th>
          </tr>
        </thead>
        {coinData ? (
          coinData.map(
            ({
              id,
              name,
              image: imageUrl,
              symbol,
              current_price,
              price_change_percentage_24h,
            }) => (
              <tr key={id}>
                <td>
                  <button className="transparent_btn">
                    <i className="far fa-star"></i>
                  </button>
                </td>
                <td>
                  <img src={imageUrl} alt={name} className="coinImage" />
                </td>
                <td>
                  {name} <span className="grey_text">{symbol}</span>
                </td>

                <td>{current_price}</td>
                <td className="red_text coin_24h_change">
                  {parseInt(price_change_percentage_24h)}%
                </td>
              </tr>
            )
          )
        ) : (
          <tr>
            <td>Loading...</td>
          </tr>
        )}
      </table>
    </>
  );
};

export default Homepage;
