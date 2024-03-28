import "./Styles/styles.scss";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Containers/Homepage";
import BeersPage from "./Containers/BeersPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<BeersPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
