import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Projects from "./components/Projects/projects";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/home";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
      </Routes>

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
    </HashRouter>
  );
}
