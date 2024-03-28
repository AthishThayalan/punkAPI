import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/Navbar/Navbar.scss";
import "../Components/Main/Main.scss";
import "./BeersPage.scss";
import { motion } from "framer-motion";
const BeersPage = () => {
  return (
    <motion.div
      className="beer-page"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Main />
    </motion.div>
  );
};
export default BeersPage;
