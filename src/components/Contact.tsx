import React from "react";

interface ContactProps {
  socials: {
    type: string;
    url: string;
    display: string;
  }[];
}

const Contact = ({ socials }: ContactProps) => {
  return (
    <div className="contact-container">
      <h3>Contact Me.</h3>
      {socials.map(({ type, url, display }, key) => (
        <p key={key}>
          <i>
            <b>{`${type} > `}</b>
            <a
              className="nav-link social-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {display}
            </a>
          </i>
        </p>
      ))}
    </div>
  );
};

export default Contact;
