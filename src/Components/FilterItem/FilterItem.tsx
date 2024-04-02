import "./FilterItem.scss";
const FilterItem = () => {
  return (
    <div className="filter">
      <input
        className="filter__search"
        type="text"
        placeholder="Search by beer name..."
      />
      <div className="filter__select">
        <label className="filter__checkbox">
          <input type="checkbox" checked={true} />
          High Alcohol (ABV &gt; ?ts 6%)
        </label>
        <label className="filter__checkbox">
          <input type="checkbox" checked={false} />
          Classic Range (First brewed before 2010)
        </label>
        <label className="filter__checkbox">
          <input type="checkbox" checked={false} />
          High Acidity
        </label>
      </div>
    </div>
  );
};
export default FilterItem;
