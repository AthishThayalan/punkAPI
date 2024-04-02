import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss";

type NavbarProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Navbar = ({ handleInputChange, handleCheckboxChange }: NavbarProps) => {
  return (
    <div className="nav">
      <FiltersList
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};
export default Navbar;
