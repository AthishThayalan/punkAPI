import Card from "../Card/Card";
import beers from "../../Data/beers";
import "./CardList.scss";
import { useEffect, useState } from "react";
const CardList = () => {
  // const [getBeers, setGetBeers] = useState([]);

  // useEffect(() => {
  //   const fetchBeers = async () => {
  //     try {
  //       const response = await fetch("https://api.punkapi.com/v2/beers");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch beers");
  //       }
  //       const data = await response.json();
  //       setGetBeers(data);
  //       console.log(getBeers);
  //     } catch (error) {
  //       console.error("Error fetching beers:", error);
  //     }

  //     fetchBeers();
  //   };
  // }, []);
  // {
  //   console.log(getBeers);
  // }
  return (
    <section className="card-list">
      {beers.map((beer) => {
        return (
          <Card
            key={beer.id}
            name={beer.name}
            img={beer.image_url}
            tagline={beer.tagline}
            description={beer.description}
          />
        );
      })}
    </section>
  );
};
export default CardList;
