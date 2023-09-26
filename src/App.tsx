import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home";
import Projects from "./components/Projects/projects";

export default function App() {
  return (
    <BrowserRouter>
      <Nav
        pages={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Projects",
            href: "/projects",
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
    </BrowserRouter>
  );
}
