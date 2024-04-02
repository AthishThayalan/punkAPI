import "./Main.scss";
import CardList from "../CardList/CardList";
import { Beer } from "../../Data/types";
type MainProps = {
  filteredBeers: Beer[];
};
const Main = ({ filteredBeers }: MainProps) => {
  return (
    <div className="main">
      <h1>Punk API </h1>
      <CardList filteredBeers={filteredBeers} />
    </div>
  );
};
export default Main;
