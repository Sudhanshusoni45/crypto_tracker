import { PageCounter } from "../pageCounter/PageCounter";
import "./pagination.css";

const Pagination = ({ coinsPerPage, paginate }) => {
  const pageNumbers = [];
  const totalCoinsNumber = 100;
  const totalPageNumbers = totalCoinsNumber / coinsPerPage;
  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i);
  }
  const clickHandler = (number) => {
    paginate(number);
  };
  return (
    <nav>
      <ul className="pageCounter_container">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="list_reset"
            onClick={() => clickHandler(number)}
          >
            <PageCounter pageNumber={number} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
