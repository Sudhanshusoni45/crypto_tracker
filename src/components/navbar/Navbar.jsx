import { logo } from "../../assests";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <header className="navigation_bar">
        <button className="transparent_btn">
          <i className="fas fa-bars"></i>
        </button>
        <img src={logo} alt="crypto tracker logo" />
        <h3>Crypto Tracker</h3>
      </header>
    </div>
  );
};

export { Navbar };
