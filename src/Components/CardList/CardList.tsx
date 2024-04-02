import Card from "../Card/Card";
import { Beer } from "../../Data/types";
import "./CardList.scss";

type CardListProps = {
  filteredBeers: Beer[];
};

const CardList = ({ filteredBeers }: CardListProps) => {
  return (
    <section className="card-list">
      {filteredBeers.length === 0 ? (
        <p className="no-beers-message">No beers available . . .</p>
      ) : (
        filteredBeers.map((beer) => {
          return (
            <Card
              key={beer.id}
              name={beer.name}
              img={beer.image_url}
              tagline={beer.tagline}
              description={beer.description}
            />
          );
        })
      )}
    </section>
  );
};

export default CardList;
