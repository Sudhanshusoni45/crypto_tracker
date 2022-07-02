import "./categoryChip.css";

const CategoryChip = ({ category_name, category_icon }) => {
  return (
    <div className="category_chip_container">
      {category_icon ? <img src={category_icon} alt={category_name} /> : null}
      <small
        className={
          category_name === "CryptoCurrencies"
            ? "active_link_color xs_margin_left"
            : "xs_margin_left"
        }
      >
        {category_name}
      </small>
    </div>
  );
};

export { CategoryChip };
