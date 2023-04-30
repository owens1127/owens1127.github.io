import { HashRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/home";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </HashRouter>
  );
};

export default App;
