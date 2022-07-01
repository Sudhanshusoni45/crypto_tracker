import { card_img_2 } from "../../assests";
import "./card.css";

const Card = ({ card_image, title, content }) => {
  return (
    <div className="card_container">
      <img src={card_img_2} alt={title} className="card_image" />
      <div>
        <span>Portfolio</span>
        <h4> Track your Trades in one place, not all over the place</h4>
      </div>
    </div>
  );
};

export { Card };
