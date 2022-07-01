import "./mobilePopup.css";

const MobilePopup = ({
  setShowMobilePopup,
  singleCoinData: { name, image: imageUrl, current_price },
}) => {
  console.log("imageUrl:", imageUrl);
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
        <table>
          <thead>
            <th>PRICE</th>
            <th>24H</th>
            <th>7D</th>
          </thead>
          <tbody>
            <tr>
              <td>${current_price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { MobilePopup };
