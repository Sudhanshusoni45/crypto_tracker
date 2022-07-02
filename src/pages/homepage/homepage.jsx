import { useEffect, useState } from "react";
import {
  card_img,
  card_img_2,
  down_arrow,
  ellipsis_vertical,
  left_arrow_icon,
  quiz_img_card,
  red_down_marker,
  right_arrow_icon,
} from "../../assests";
import { Card } from "../../components/card/Card";
import { MobilePopup } from "../../components/mobile_popup/MobilePopup";
import { Navbar } from "../../components/navbar/Navbar";
import { getCoinsDataHandler } from "../../util/getCoinsDataHandler";
import "./homepage.css";

const Homepage = () => {
  const [coinData, setCoinData] = useState("");
  const [singleCoinData, setSingleCoinData] = useState("");
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [cardSliderData, setCardSliderData] = useState([]);

  const getSingleCoinData = (id) => coinData.find((coin) => coin.id === id);

  const mobilePopupHandler = (id) => {
    setShowMobilePopup((prevState) => true);
    const foundCoinData = getSingleCoinData(id);
    setSingleCoinData((prevState) => foundCoinData);
  };

  useEffect(() => {
    getCoinsDataHandler(setCoinData);
    setCardSliderData((prevData) => [
      {
        title: "Portfolio",
        card_image: quiz_img_card,
        content: "Track your trades in one place,not all over the place",
      },
      {
        title: "Portfolio",
        card_image: card_img,
        content: "Track your trades in one place,not all over the place",
      },
      {
        title: "Portfolio",
        card_image: card_img_2,
        content: "Track your trades in one place,not all over the place",
      },
    ]);
  }, []);

  return (
    <>
      {showMobilePopup ? (
        <MobilePopup
          setShowMobilePopup={setShowMobilePopup}
          singleCoinData={singleCoinData}
        />
      ) : null}
      <Navbar />
      <div className="homepage_slider">
        <div className="card_conatiner">
          <img src={left_arrow_icon} alt="left_arrow_icon" />
          {cardSliderData.length ? (
            cardSliderData.map(({ title, content, card_image }) => (
              <Card title={title} content={content} card_image={card_image} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
          <img src={right_arrow_icon} alt="right_arrow_icon" />
        </div>
        <div className="hide_in_desktop">
          <i className="far fa-circle slider_index_indicator"> </i>
          <i className="fas fa-circle slider_index_indicator"> </i>
          <i className="far fa-circle slider_index_indicator"> </i>
          <i className="far fa-circle slider_index_indicator"> </i>
        </div>
      </div>
      <div className="homepage_heading">
        <h3>Top 100 Cryptocurrencies by Market Cap</h3>
      </div>
      <div className="coinsTable_container">
        <table className="coinsTable">
          <thead>
            <tr>
              <th></th>
              <th>#</th>
              <th colSpan={2}>NAME</th>
              <th colSpan={1}>PRICE</th>
              <th>
                24H
                <img src={down_arrow} alt="" className="display_inline" />
              </th>
              <th className="hide_in_mobile">7D</th>
              <th className="hide_in_mobile">MARKET CAP</th>
              <th className="hide_in_mobile">VOLUME(24h)</th>
              <th className="hide_in_mobile">CIRCULATING SUPPLY</th>
            </tr>
          </thead>
          {coinData ? (
            coinData.map(
              ({
                id,
                market_cap_rank,
                name,
                image: imageUrl,
                symbol,
                current_price,
                price_change_percentage_24h,
                price_change_percentage_7d_in_currency,
                market_cap,
                total_volume,
                circulating_supply,
              }) => (
                <tr
                  key={id}
                  onClick={() => mobilePopupHandler(id)}
                  className="cursor_pointer"
                >
                  <td>
                    <button className="transparent_btn">
                      <i className="far fa-star"></i>
                    </button>
                  </td>
                  <td>{market_cap_rank}</td>
                  <td>
                    <img src={imageUrl} alt={name} className="coinImage" />
                  </td>
                  <td>
                    {name}{" "}
                    <span className="grey_text">{symbol.toUpperCase()}</span>
                  </td>

                  <td>${current_price.toLocaleString("en-US")}</td>
                  <td className="red_text coin_24h_change">
                    <img src={red_down_marker} alt="red_down_marker" />
                    {parseInt(price_change_percentage_24h)}%
                  </td>
                  <td className="hide_in_mobile">
                    {parseInt(price_change_percentage_7d_in_currency)}%{" "}
                  </td>
                  <td className="hide_in_mobile">
                    ${market_cap.toLocaleString("en-US")}
                  </td>
                  <td className="hide_in_mobile">${total_volume}</td>
                  <td className="hide_in_mobile">{circulating_supply} BTC</td>
                  <td className="hide_in_mobile">
                    <img src={ellipsis_vertical} alt="ellipsis_vertical" />
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
      </div>
    </>
  );
};

export default Homepage;
