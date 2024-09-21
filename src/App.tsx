import { Route, Routes } from "react-router";
import { HashRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Projects from "./components/pages/projects/ProjectsContainer";
import Footer from "./components/Footer";
import Resume from "./components/pages/Resume";
import Nav from "./components/Nav";

export default function App() {
  return (
    <HashRouter>
      <div className="flex min-h-screen flex-col bg-gray-900 text-gray-100">
        <Nav />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/projects" Component={Projects} />
          <Route path="/resume" Component={Resume} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
