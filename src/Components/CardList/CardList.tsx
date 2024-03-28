import Card from "../Card/Card";
import beers from "../../Data/beers";
import "./CardList.scss";
const CardList = () => {
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
