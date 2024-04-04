import "./Styles/styles.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Containers/Homepage";
import BeersPage from "./Containers/BeersPage";

function App() {
  return (
    <BrowserRouter basename="/punkapi">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<BeersPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
