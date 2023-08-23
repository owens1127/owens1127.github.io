import "./Contact.css";
import { ContactTypes } from "./types";

interface ContactProps {
  socials: {
    type: ContactTypes;
    url: string;
    display: string;
  }[];
}

export default function Contact({ socials }: ContactProps) {
  return (
    <div className="contact-container">
      <h3>Contact Me</h3>
      {socials.map(({ type, url, display }, key) => (
        <a
          key={key}
          className="social-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`/icons/${type}.svg`}
            className="social-icon magnifiable"
            alt={display}
          />
        </a>
      ))}
    </div>
  );
}
