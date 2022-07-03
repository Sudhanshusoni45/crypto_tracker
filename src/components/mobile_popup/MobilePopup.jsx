import { cross_icon, green_up_marker, red_down_marker } from "../../assests";
import "./mobilePopup.css";

const MobilePopup = ({
  setShowMobilePopup,
  singleCoinData: {
    name,
    image: imageUrl,
    current_price,
    price_change_percentage_24h,
    price_change_percentage_7d_in_currency,
    market_cap,
    total_volume,
    circulating_supply,
  },
}) => {
  const mobilePopupHandler = () => {
    setShowMobilePopup((prevState) => false);
  };
  return (
    <div className="mobile_popup_container">
      <div className="mobile_popup">
        <div className="mobile_popup_head">
          <div className="image_and_name">
            <img src={imageUrl} alt={name} className="mobilePopup_coin_image" />
            <span className="mobilePopup_coin_name">{name}</span>
          </div>
          <button
            className="transparent_btn curosr_pointer"
            onClick={mobilePopupHandler}
          >
            <img src={cross_icon} alt="" />
          </button>
        </div>
        <table className="mobilePopup_table">
          <thead>
            <th className="text_align_left font_size_small">PRICE</th>
            <th className="text_align_right font_size_small ">24H</th>
            <th className="text_align_right font_size_small">7D</th>
          </thead>
          <tbody>
            <tr>
              <td className="bold_text">
                ${current_price.toLocaleString("en-US")}
              </td>
              <td className="red_text bold_text text_align_right">
                <img src={red_down_marker} alt="red_down_marker" />
                {parseInt(price_change_percentage_24h)}%
              </td>
              <td className="green_text bold_text text_align_right">
                <img src={green_up_marker} alt="green_up_arrow" />
                {parseInt(price_change_percentage_7d_in_currency)}%
              </td>
            </tr>
          </tbody>
        </table>
        <div className="coin_stats_container">
          <div>
            <h5>MARKET CAP</h5>
            <span className="bold_text">
              ${market_cap.toLocaleString("en-US")}
            </span>
          </div>
          <div>
            <h5>VOLUME (24H)</h5>
            <span className="bold_text">
              ${total_volume.toLocaleString("en-US")}
            </span>
          </div>
          <div>
            <h5>CIRCULATING SUPPLY</h5>
            <span className="bold_text">
              {circulating_supply.toLocaleString("en-US")} BTC
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MobilePopup };
