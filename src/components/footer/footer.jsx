import { Link } from "react-router-dom";

import "./footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <nav>
        <ul className="flex">
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <p className="rights">©2024 Tasneem Hossam .All rights reserved </p>
      </nav>
    </footer>
  );
};
export default Footer;
