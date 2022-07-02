import { logo, search_icon } from "../../assests";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="navigation_bar">
        <div>
          <img src={logo} alt="crypto tracker logo" />
          <h3>Crypto Tracker</h3>
        </div>
        <div>
          <img src={search_icon} alt="search_icon" />
          <button className="transparent_btn hide_in_mobile">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>
    </div>
  );
};

export { Navbar };
