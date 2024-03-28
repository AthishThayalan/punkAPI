import Main from "../Components/Main/Main";
import Navbar from "../Components/Navbar/Navbar";
import "../Components/Navbar/Navbar.scss";
import "../Components/Main/Main.scss";
import "./BeersPage.scss";
const BeersPage = () => {
  return (
    <div className="beer-page">
      <Navbar />
      <Main />
    </div>
  );
};
export default BeersPage;
