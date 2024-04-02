import FiltersList from "../FiltersList/FiltersList";
import "./Navbar.scss";

type NavbarProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const Navbar = ({ handleInputChange }: NavbarProps) => {
  return (
    <div className="nav">
      <FiltersList handleInputChange={handleInputChange} />
    </div>
  );
};
export default Navbar;
