import "./FilterItem.scss";
type FilterItemProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const FilterItem = ({ handleInputChange }: FilterItemProps) => {
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
