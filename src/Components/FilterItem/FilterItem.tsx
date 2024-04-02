import "./FilterItem.scss";
type FilterItemProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  highAlcoholChecked: boolean;
  classicRangeChecked: boolean;
  highAcidityChecked: boolean;
};
const FilterItem = ({
  handleInputChange,
  handleCheckboxChange,
  highAcidityChecked,
  highAlcoholChecked,
  classicRangeChecked,
}: FilterItemProps) => {
  return (
    <div className="filter">
      <input
        className="filter__search"
        type="text"
        placeholder="Search by beer name..."
        onChange={handleInputChange}
      />
      <div className="filter__select">
        <label className="filter__checkbox">
          <input
            type="checkbox"
            name="highAlcohol"
            checked={highAlcoholChecked}
            onChange={handleCheckboxChange}
          />
          High Alcohol (ABV &gt; ?ts 6%)
        </label>
        <label className="filter__checkbox">
          <input
            type="checkbox"
            name="classicRange"
            checked={classicRangeChecked}
            onChange={handleCheckboxChange}
          />
          Classic Range (First brewed before 2010)
        </label>
        <label className="filter__checkbox">
          <input
            type="checkbox"
            name="highAcidity"
            checked={highAcidityChecked}
            onChange={handleCheckboxChange}
          />
          High Acidity
        </label>
      </div>
    </div>
  );
};
export default FilterItem;
