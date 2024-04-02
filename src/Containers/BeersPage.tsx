import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/Navbar/Navbar.scss";
import "../Components/Main/Main.scss";
import "./BeersPage.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { Beer } from "../Data/types";
import beers from "../Data/beers";

const BeersPage = () => {
  const [input, setInput] = useState<string>("");
  const [filteredBeers, setFilteredBeers] = useState<Beer[]>([...beers]);
  const [highAlcoholChecked, setHighAlcoholChecked] = useState<boolean>(false);
  const [classicRangeChecked, setClassicRangeChecked] =
    useState<boolean>(false);
  const [highAcidityChecked, setHighAcidityChecked] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredBeers(filtered);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const checked = event.currentTarget.checked;
    switch (name) {
      case "highAlcohol":
        setHighAlcoholChecked(checked);
        break;
      case "classicRange":
        setClassicRangeChecked(checked);
        break;
      case "highAcidity":
        setHighAcidityChecked(checked);
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      className="beer-page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar
        handleInputChange={handleInputChange}
        handleCheckboxChange={handleCheckboxChange}
        highAcidityChecked={highAcidityChecked}
        highAlcoholChecked={highAlcoholChecked}
        classicRangeChecked={classicRangeChecked}
      />
      <Main filteredBeers={filteredBeers} />
    </motion.div>
  );
};
export default BeersPage;
