import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showMenu, setshowMenu] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  /******************************************************************************* */

  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setshowMenu(true);
        }}
      />

      <div />

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
      </nav>

      <button
        onClick={() => {
          const newTheme = theme === "dark" ? "light" : "dark";

          localStorage.setItem("currentMode", newTheme);

          setTheme(newTheme);
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {/********************************************************************** */}

      {showMenu && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowMenu(false);
                }}
              />
            </li>
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
        </div>
      )}
    </header>
  );
};
export default Header;
