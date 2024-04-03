import "./BeerPagination.scss";

type BeerPaginationProps = {
  incrementPage: () => void;
  decrementPage: () => void;
  isNextDisabled: boolean;
};

const BeerPagination: React.FC<BeerPaginationProps> = ({
  incrementPage,
  decrementPage,
  isNextDisabled,
}) => {
  return (
    <div className="beer-pagination">
      <button className="beer-pagination-button" onClick={decrementPage}>
        Previous Page
      </button>
      <button
        className="beer-pagination-button"
        onClick={incrementPage}
        disabled={isNextDisabled}
      >
        Next Page
      </button>
    </div>
  );
};

export default BeerPagination;
