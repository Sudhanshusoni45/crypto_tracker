import "./card.css";

const Card = ({ card_image, title, content }) => {
  return (
    <div className="card_container ">
      <img src={card_image} alt={title} className="card_image" />
      <div>
        <span>{title}</span>
        <h4> {content}</h4>
      </div>
    </div>
  );
};

export { Card };
