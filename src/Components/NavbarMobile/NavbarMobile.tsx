import { useState } from "react";
import "./NavbarMobile.scss";
import FilterItemMobile from "../FilterItemMobile/FilterItemMobile";
import filter from "../../assets/filter-icon.png";
import closeButton from "../../assets/close-button.png";

type NavbarProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  highAlcoholChecked: boolean;
  classicRangeChecked: boolean;
  highAcidityChecked: boolean;
};

const NavbarMobile = ({
  handleInputChange,
  handleCheckboxChange,
  highAcidityChecked,
  highAlcoholChecked,
  classicRangeChecked,
}: NavbarProps) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="nav-mobile">
      {showFilters ? (
        <>
          <FilterItemMobile
            handleInputChange={handleInputChange}
            handleCheckboxChange={handleCheckboxChange}
            highAcidityChecked={highAcidityChecked}
            highAlcoholChecked={highAlcoholChecked}
            classicRangeChecked={classicRangeChecked}
          />
          <img
            src={closeButton}
            alt=""
            className="close-button"
            onClick={toggleFilters}
          />
        </>
      ) : (
        <img
          src={filter}
          alt=""
          className="menu-icon"
          onClick={toggleFilters}
        />
      )}
    </div>
  );
};

export default NavbarMobile;
