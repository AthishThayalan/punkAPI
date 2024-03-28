import "./Homepage.scss";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="homepage">
      <section className="homepage__content">
        <h1 className="homepage__heading">Welcome to Brewdog Punk API</h1>
        <p className="homepage__text">
          Explore a wide range of Brewdog beers with just a click!
        </p>
        <Link to="/beers">
          <button className="enter-button">Enter</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
