import { useState } from "react";
import "./FilterItemMobile.scss";
type FilterItemProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  highAlcoholChecked: boolean;
  classicRangeChecked: boolean;
  highAcidityChecked: boolean;
};
const FilterItemMobile = ({
  handleInputChange,
  handleCheckboxChange,
  highAcidityChecked,
  highAlcoholChecked,
  classicRangeChecked,
}: FilterItemProps) => {
  return (
    <div className="filter-mobile">
      <input
        className="filter-mobile__search"
        type="text"
        placeholder="Search by name..."
        onChange={handleInputChange}
      />
      <div className="filter-mobile__select">
        <label className="filter-mobile__checkbox">
          <input
            type="checkbox"
            name="highAlcohol"
            checked={highAlcoholChecked}
            onChange={handleCheckboxChange}
          />
          High Alcohol (ABV &gt; 6%)
        </label>
        <label className="filter-mobile__checkbox">
          <input
            type="checkbox"
            name="classicRange"
            checked={classicRangeChecked}
            onChange={handleCheckboxChange}
          />
          Classic Range
        </label>
        <label className="filter-mobile__checkbox">
          <input
            type="checkbox"
            name="highAcidity"
            checked={highAcidityChecked}
            onChange={handleCheckboxChange}
          />
          High Acidity (pH &lt; 4)
        </label>
      </div>
    </div>
  );
};
export default FilterItemMobile;
