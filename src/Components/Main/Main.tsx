import "./Main.scss";
import CardList from "../CardList/CardList";
import { Beer } from "../../Data/types";
import BeerPagination from "../BeerPagination/BeerPagination";
import PageInfo from "../PageInfo/PageInfo";
import { useEffect, useState } from "react";
type MainProps = {
  filteredBeers: Beer[];
};
const Main = ({ filteredBeers }: MainProps) => {
  const [pageStart, setPageStart] = useState<number>(0);
  const [pageEnd, setPageEnd] = useState<number>(6);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [numberOfResults, setNumberOfResults] = useState<number>(
    filteredBeers.length
  );

  const incrementPage = () => {
    if (pageEnd < filteredBeers.length) {
      setPageStart((prevPageStart) => prevPageStart + 6);
      setPageEnd((prevPageEnd) => prevPageEnd + 6);
    }
  };

  const decrementPage = () => {
    if (pageStart >= 6) {
      setPageStart((prevPageStart) => prevPageStart - 6);
      setPageEnd((prevPageEnd) => prevPageEnd - 6);
    }
  };

  useEffect(() => {
    const currentPage = Math.floor(pageStart / 6) + 1;
    setCurrentPage(currentPage);
  }, [pageStart, pageEnd]);

  return (
    <div className="main">
      <h1>Punk API</h1>
      <PageInfo currentPage={currentPage} />
      <CardList
        filteredBeers={filteredBeers}
        pageStart={pageStart}
        pageEnd={pageEnd}
      />
      <BeerPagination
        incrementPage={incrementPage}
        decrementPage={decrementPage}
      />
    </div>
  );
};

export default Main;
