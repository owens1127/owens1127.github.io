import { Helmet } from "react-helmet";
import "../styles/eportfolio.css";
import Contact from "../components/Contact";

interface EPortfolioProps {}

const EPortfolio = ({}: EPortfolioProps) => {
  return (
    <>
      <Helmet>
        <title>E-Portfolio - ENGW3302 | Owen Simpson</title>
      </Helmet>
      <main>
        <h1 className="title">
          <span>ADVANCED WRITING PORTFOLIO</span>
          <div className="vl" />
          <span className="title-name">Owen Simpson</span>
        </h1>
        <section className="eportfolio-content">
          <div className="eportfolio-left-side">
            <h3 className="my-writing">my writing.</h3>
            <div className="writing-buttons">
              <a
                href="https://docs.google.com/document/d/16ABDyLW_Mr7cDbjMRwQ5pNZ0HiuQB77JTH3D75dolhk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Lines of Inquiry</button>
              </a>
              <a
                href="https://docs.google.com/document/d/1cum2zPcx0GCbCVsNF98ktJZKAHwVzwW3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Firsthand Research Analysis</button>
              </a>
              <a
                href="https://docs.google.com/document/d/1y0M_rxPteE80kMFAA3uHTJu2yvtmWhP9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Research Proposal</button>
              </a>
            </div>
            <div className="eportfolio-contact-container">
              <Contact
                socials={[
                  {
                    type: "Email",
                    url: "mailto:simpson.o@northeastern.edu",
                    display: "simpson.o@northeastern.edu",
                  },
                  {
                    type: "LinkedIn",
                    url: "https://www.linkedin.com/in/owen-s-simpson/",
                    display: "linkedin.com/in/owen-s-simpson",
                  },
                ]}
              />
            </div>
          </div>
          <article className="eportfolio-about-me">
            <p>
              Welcome to my writing portfolio page! As someone who doesn't
              necessarily have a passion for writing, I am proud to present to
              you a collection of my written work that showcases my improvement
              as a writer. While writing may not be my greatest passion, I have
              worked hard to develop my skills and improve my writing abilities.
            </p>
            <p>
              As you explore my portfolio, you will find a variety of pieces
              that demonstrate my ability to write in different styles and
              genres. While writing may not come naturally to me, I have found
              that with practice and perseverance, I have been able to produce
              work that is both clear and concise. From research papers that
              highlight my attention to detail to analyses of first hand
              research, I hope that my work will inspire and impress you.
            </p>
            <p>
              Above all, I believe that writing is a skill that can be developed
              and improved with time and effort. As I continue to hone my craft,
              I am excited to see where my writing will take me and to share my
              work with others who are passionate about the power of words.
            </p>
          </article>
        </section>
      </main>
    </>
  );
};

export default EPortfolio;
