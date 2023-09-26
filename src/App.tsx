import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <HashRouter>
      <Nav
        pages={[
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
            href: "/resume.pdf",
          },
        ]}
      />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
      </Routes>
    </HashRouter>
  );
}
