import Contact from "../Contact/Contact";
import { ContactTypes } from "../Contact/types";
import "./home.css";

const Home = () => {
  return (
    <main className="home">
      <h1 className="header">Owen Simpson</h1>
      <p className="about-me">
        Hi, I'm Owen! I am Computer Science student from <em>Boston, MA</em>{" "}
        currently studying at Northeastern University with an expected
        graduation in May 2025. I am an experienced web developer with a passion
        for creating innovative and user-friendly applications.
      </p>
      <div className="nav-buttons">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <button className="nav-button magnifiable">Résumé</button>
        </a>

        <a href="/#/projects">
          <button className="nav-button magnifiable">Projects</button>
        </a>
      </div>
      <Contact
        socials={[
          {
            type: ContactTypes.Email,
            url: "mailto:owensimpson1127@gmail.com",
            display: "owensimpson1127@gmail.com",
          },
          {
            type: ContactTypes.LinkedIn,
            url: "https://www.linkedin.com/in/owen-s-simpson/",
            display: "linkedin.com/in/owen-s-simpson",
          },
        ]}
      />
    </main>
  );
};

export default Home;
