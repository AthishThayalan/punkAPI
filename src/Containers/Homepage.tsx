import "./Homepage.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      className="homepage"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <section className="homepage__content">
        <h1 className="homepage__heading">Welcome to Brewdog Punk API</h1>
        <p className="homepage__text">
          Explore a wide range of Brewdog beers with just a click!
        </p>
        <Link to="/beers">
          <button className="enter-button">COME ON IN!</button>
        </Link>
      </section>
    </motion.div>
  );
};

export default HomePage;
