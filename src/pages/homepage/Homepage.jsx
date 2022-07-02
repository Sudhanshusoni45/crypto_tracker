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
  star_icon,
} from "../../assests";
import { Card } from "../../components/card/Card";
import { CategoryChip } from "../../components/category_chip/CategoryChip";
import { MobilePopup } from "../../components/mobile_popup/MobilePopup";
import { Navbar } from "../../components/navbar/Navbar";
import Pagination from "../../components/pagination/Pagination";
import { getCoinsDataHandler } from "../../util/getCoinsDataHandler";
import "./homepage.css";

const Homepage = () => {
  const [coinData, setCoinData] = useState("");
  const [singleCoinData, setSingleCoinData] = useState("");
  const [showMobilePopup, setShowMobilePopup] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [cardSliderData, setCardSliderData] = useState([
    {
      title: "",
      content: "",
      card_image: "",
    },
  ]);

  const getSingleCoinData = (id) => coinData.find((coin) => coin.id === id);

  const mobilePopupHandler = (id) => {
    setShowMobilePopup((prevState) => true);
    const foundCoinData = getSingleCoinData(id);
    setSingleCoinData((prevState) => foundCoinData);
  };

  const coinPerPageHandler = (e) => {
    setCoinsPerPage((prevState) => e.target.value);
  };

  const paginate = (currentPageNumber) =>
    setCurrentPageNumber((prevState) => currentPageNumber);

  useEffect(() => {
    getCoinsDataHandler(setCoinData, coinsPerPage, currentPageNumber);
  }, [coinsPerPage, currentPageNumber]);

  useEffect(() => {
    setCardSliderData((prevData) => [
      {
        id: 1,
        title: "Take a Quiz",
        card_image: quiz_img_card,
        content: "Learn and earn $CKB",
      },
      {
        id: 2,
        title: "Portfolio",
        card_image: card_img,
        content: "Track your trades in one place,not all over the place",
      },
      {
        id: 3,
        title: "Portfolio",
        card_image: card_img_2,
        content: "Track your trades in one place,not all over the place",
      },
    ]);
    setCategoryData((prevState) => [
      { id: 1, category_icon: star_icon, category_name: "Favourites" },
      { id: 2, category_name: "CryptoCurrencies" },
      { id: 3, category_icon: null, category_name: "DeFi" },
      { id: 4, category_icon: null, category_name: "NFTs & Collectibles" },
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
      <div className="homepage_slider_container">
        <div className="card_conatiner hide_in_mobile">
          <img src={left_arrow_icon} alt="left_arrow_icon" />
          {cardSliderData.length ? (
            cardSliderData.map(({ title, content, card_image, id }) => (
              <li key={id} className="list_reset">
                <Card title={title} content={content} card_image={card_image} />
              </li>
            ))
          ) : (
            <h1>Loading...</h1>
          )}
          <img src={right_arrow_icon} alt="right_arrow_icon" />
        </div>
        <div className="hide_in_desktop">
          <Card
            title={cardSliderData[1]?.title}
            content={cardSliderData[1]?.content}
            card_image={cardSliderData[1]?.card_image}
          />
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
      <div className="category_container hide_in_mobile">
        {categoryData.length
          ? categoryData.map(({ category_name, id, category_icon }) => (
              <li key={id} className="list_reset">
                <CategoryChip
                  category_name={category_name}
                  category_icon={category_icon}
                />
              </li>
            ))
          : null}
        <div className="select_rows_container">
          <small>show rows</small>
          <select
            name="rows"
            id="rows"
            className="select_rows"
            onChange={coinPerPageHandler}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
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
                <img
                  src={down_arrow}
                  alt=""
                  className="display_inline xs_margin_left"
                />
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
                      <img src={star_icon} alt="fav icon" />
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
                    <span className="xs_margin_left">
                      {parseInt(price_change_percentage_24h)}%
                    </span>
                  </td>
                  <td className="hide_in_mobile">
                    {parseInt(price_change_percentage_7d_in_currency)}%{" "}
                  </td>
                  <td className="hide_in_mobile">
                    ${market_cap.toLocaleString("en-US")}
                  </td>
                  <td className="hide_in_mobile">
                    ${total_volume.toLocaleString("en-US")}
                  </td>
                  <td className="hide_in_mobile">
                    {circulating_supply.toLocaleString("en-US")} BTC
                  </td>
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
        <Pagination coinsPerPage={coinsPerPage} paginate={paginate} />
      </div>
    </>
  );
};

export default Homepage;
