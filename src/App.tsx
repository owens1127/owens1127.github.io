import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <HashRouter>
        <Nav
          items={[
            {
              label: "Home",
              href: "/",
            },
            {
              label: "Projects",
              href: "/#/projects",
            },
            {
              label: "Resume",
              href: "resume.pdf",
            },
          ]}
        />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
