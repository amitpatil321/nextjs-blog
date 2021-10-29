import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="layout align-center">
        <span style={{ fontSize: "12px" }}>
          Powered by{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            alt="Nextjs"
            rel="noreferrer"
          >
            Nextjs
          </a>{" "}
          &{" "}
          <a
            href="https://ghost.org/"
            target="_blank"
            alt="Ghost"
            rel="noreferrer"
          >
            Ghost
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
