import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss";

type NavbarProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  highAlcoholChecked: boolean;
  classicRangeChecked: boolean;
  highAcidityChecked: boolean;
};
const Navbar = ({
  handleInputChange,
  handleCheckboxChange,
  highAcidityChecked,
  highAlcoholChecked,
  classicRangeChecked,
}: NavbarProps) => {
  return (
    <div className="nav" data-testid="navbar-component">
      <FiltersList
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        highAcidityChecked={highAcidityChecked}
        highAlcoholChecked={highAlcoholChecked}
        classicRangeChecked={classicRangeChecked}
      />
    </div>
  );
};
export default Navbar;
