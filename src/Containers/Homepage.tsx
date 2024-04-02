import "./Homepage.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HomePage = () => {
  const playAudio = () => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.play();
  };
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
          <button className="enter-button" onClick={() => playAudio()}>
            COME ON IN!
          </button>
        </Link>
      </section>
      <audio id="audio" src={"../assets/pageturn.mp3"}></audio>
    </motion.div>
  );
};

export default HomePage;
