import "./categoryChip.css";

const CategoryChip = ({ category_name, category_icon }) => {
  return (
    <div className="category_chip_container">
      {category_icon ? <img src={category_icon} alt={category_name} /> : null}
      <small>{category_name}</small>
    </div>
  );
};

export { CategoryChip };
