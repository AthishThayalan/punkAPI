import FilterItem from "../FilterItem/FilterItem";
import "./FiltersList.scss";

type FiltersListProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  highAlcoholChecked: boolean;
  classicRangeChecked: boolean;
  highAcidityChecked: boolean;
};
const FiltersList = ({
  handleInputChange,
  handleCheckboxChange,
  highAcidityChecked,
  highAlcoholChecked,
  classicRangeChecked,
}: FiltersListProps) => {
  return (
    <div className="filterList">
      <h1>BREWDOG</h1>
      <FilterItem
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        highAcidityChecked={highAcidityChecked}
        highAlcoholChecked={highAlcoholChecked}
        classicRangeChecked={classicRangeChecked}
      />
    </div>
  );
};
export default FiltersList;
