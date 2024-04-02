import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

type FiltersListProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const FiltersList = ({
  handleInputChange,
  handleCheckboxChange,
}: FiltersListProps) => {
  return (
    <div className="filterList">
      <h1>BREWDOG</h1>
      <FilterItem
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};
export default FiltersList;
