import { logo, search_icon } from "../../assests";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="navigation_bar">
        <button className="transparent_btn hide_in_desktop">
          <i className="fas fa-bars "></i>
        </button>
        <div className="navbar_logo">
          <img src={logo} alt="crypto tracker logo" />
          <h3 className="display_inline_block xs_margin_left">
            {" "}
            Crypto Tracker
          </h3>
        </div>
        <div className="navbar_icons hide_in_mobile">
          <img src={search_icon} alt="search_icon" />
          <button className="transparent_btn small_margin_left">
            <i className="fas fa-bars fa-lg "></i>
          </button>
        </div>
      </header>
    </div>
  );
};

export { Navbar };
