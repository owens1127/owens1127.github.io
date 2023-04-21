import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home";
import EPortfolio from "./pages/engw3302-eportfolio";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/engw3302-eportfolio" Component={EPortfolio} />
      </Routes>
    </HashRouter>
  );
};

export default App;
