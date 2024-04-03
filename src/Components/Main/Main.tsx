import "./Main.scss";
import CardList from "../CardList/CardList";
import { Beer } from "../../Data/types";
import BeerPagination from "../BeerPagination/BeerPagination";
import { useState } from "react";
type MainProps = {
  filteredBeers: Beer[];
};
const Main = ({ filteredBeers }: MainProps) => {
  const [pageStart, setPageStart] = useState<number>(0);
  const [pageEnd, setPageEnd] = useState<number>(6);

  const incrementPage = () => {
    setPageStart((prevPageStart) => prevPageStart + 6);
    setPageEnd((prevPageEnd) => prevPageEnd + 6);
  };

  const decrementPage = () => {
    if (pageStart >= 6) {
      setPageStart((prevPageStart) => prevPageStart - 6);
      setPageEnd((prevPageEnd) => prevPageEnd - 6);
    }
  };

  const isLastPage = pageEnd >= filteredBeers.length;

  return (
    <div className="main">
      <h1>Punk API</h1>
      <CardList
        filteredBeers={filteredBeers}
        pageStart={pageStart}
        pageEnd={pageEnd}
      />
      <BeerPagination
        incrementPage={incrementPage}
        decrementPage={decrementPage}
        isNextDisabled={isLastPage}
      />
    </div>
  );
};
