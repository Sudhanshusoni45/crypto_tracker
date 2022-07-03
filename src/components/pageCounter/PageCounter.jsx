import "./pageCounter.css";

const PageCounter = ({ pageNumber, currentPageNumber }) => {
  return (
    <div
      className={
        currentPageNumber === pageNumber
          ? "active_pageCounter pageCounter"
          : "pageCounter"
      }
    >
      {pageNumber}
    </div>
  );
};

export { PageCounter };
