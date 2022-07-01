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
  },
}) => {
  const mobilePopupHandler = () => {
    setShowMobilePopup((prevState) => false);
  };
  return (
    <div className="mobile_popup_container">
      <div className="mobile_popup">
        <div className="mobile_popup_head">
          <div>
            <img src={imageUrl} alt={name} className="mobilePopup_coin_image" />
            <span className="small_margin_bottom">{name}</span>
          </div>
          <button
            className="transparent_btn curosr_pointer"
            onClick={mobilePopupHandler}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <table className="mobilePopup_table">
          <thead>
            <th className="text_align_left">PRICE</th>
            <th className="text_align_left">24H</th>
            <th className="text_align_left">7D</th>
          </thead>
          <tbody>
            <tr>
              <td>${current_price}</td>
              <td>{parseInt(price_change_percentage_24h)}%</td>
              <td>{parseInt(price_change_percentage_7d_in_currency)}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <span>Market Cap</span>
          <span>{market_cap}</span>
        </div>
      </div>
    </div>
  );
};

export { MobilePopup };
