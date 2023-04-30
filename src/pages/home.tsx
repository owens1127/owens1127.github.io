import Contact, { ContactTypes } from "../components/Contact";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Owen Simpson</title>
      </Helmet>
      <main className="home">
        <h1 className="header">Owen Simpson</h1>
        <p className="about-me">
          Hi, I'm Owen! I am Computer Science student from <em>Boston, MA</em>{" "}
          currently studying at Northeastern University with an expected
          graduation in May 2025. I am an experienced web developer with a
          passion for creating innovative and user-friendly applications.
        </p>
        <div className="nav-buttons">
          <a
            className="nav-link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="nav-botton magnifiable">Résumé</button>
          </a>

          <button className="nav-botton not-ready">Projects</button>
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
    </>
  );
};

export default Home;
