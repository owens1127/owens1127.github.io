import Contact from "../components/Contact";
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
          Hi, I'm Owen, a second year Computer Science student at Northeastern
          University.
        </p>
        <div className="nav-buttons">
          <a
            className="nav-link"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="nav-botton">Résumé</button>
          </a>

          <button className="nav-botton not-ready">Projects</button>
        </div>
        <Contact
          socials={[
            {
              type: "Email",
              url: "mailto:owensimpson1127@gmail.com",
              display: "owensimpson1127@gmail.com",
            },
            {
              type: "LinkedIn",
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
