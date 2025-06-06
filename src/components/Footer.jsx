import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <p>
          Made with ❤️ by{" "}
          <a href="#" target="_blank">
            <span className="footer-name">Nandaluru Mohan Reddy</span>
          </a>
        </p>
        <p className="socials">
          <a href="http://linkedin.com/in/mohanreddynandaluru" target="_blank">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://github.com/mohanreddynandaluru" target="_blank">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="mailto:mohanreddy232312@gmail.com">
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
