import Card from "../Card/Card";
import { Beer } from "../../Data/types";
import "./CardList.scss";

type CardListProps = {
  filteredBeers: Beer[];
  pageStart: number;
  pageEnd: number;
};

const CardList = ({ filteredBeers, pageStart, pageEnd }: CardListProps) => {
  const slicedBeers = filteredBeers.slice(pageStart, pageEnd);

  return (
    <section className="card-list">
      {slicedBeers.length === 0 ? (
        <p className="no-beers-message">No beers available . . .</p>
      ) : (
        slicedBeers.map((beer) => {
          return (
            <Card
              key={beer.id}
              id={beer.id}
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
