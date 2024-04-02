import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/Navbar/Navbar.scss";
import "../Components/Main/Main.scss";
import "./BeersPage.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
    const inputValue = event.currentTarget.value;
    setInput(inputValue);
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

  useEffect(() => {
    console.log("Input value is :" + input);
    console.log("highAlcoholChecked:", highAlcoholChecked);
    console.log("classicRangeChecked:", classicRangeChecked);
    console.log("highAcidityChecked:", highAcidityChecked);
    let filtered = beers;
    if (input.trim() !== "") {
      filtered = filtered.filter((beer) =>
        beer.name.toLowerCase().includes(input.toLowerCase())
      );
    }
    if (highAlcoholChecked) {
      filtered = filtered.filter((beer) => beer.abv > 6);
    }

    if (classicRangeChecked) {
      filtered = filtered.filter(
        (beer) => parseInt(beer.first_brewed.slice(-4)) < 2010
      );
    }

    if (highAcidityChecked) {
      filtered = filtered.filter((beer) => beer.ph < 4.5);
    }

    if (
      input.trim() === "" &&
      !highAlcoholChecked &&
      !classicRangeChecked &&
      !highAcidityChecked
    ) {
      filtered = beers;
    }
    if (
      input.trim() === "" &&
      !highAlcoholChecked &&
      !classicRangeChecked &&
      !highAcidityChecked
    ) {
      filtered = beers;
    }
    setFilteredBeers(filtered);
  }, [highAlcoholChecked, classicRangeChecked, highAcidityChecked, input]);

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
