import "./BeerPagination.scss";

type BeerPaginationProps = {
  incrementPage: () => void;
  decrementPage: () => void;
};

const BeerPagination: React.FC<BeerPaginationProps> = ({
  incrementPage,
  decrementPage,
}) => {
  return (
    <div className="beer-pagination">
      <button className="beer-pagination-button" onClick={decrementPage}>
        Previous Page
      </button>
      <button className="beer-pagination-button" onClick={incrementPage}>
        Next Page
      </button>
    </div>
  );
};

export default BeerPagination;
