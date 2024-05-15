import "./MobileNav.css";
import BottonTheme from "../BottonTheme/BottonTheme";
import { ThemeContext } from "../../Contexts/Themes";
import { useContext } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const [{ theme, isDark }] = useContext(ThemeContext);

  const Data = [
    { id: 1, link: "Home" },
    { id: 2, link: "News" },
    { id: 3, link: "Promotion of the mount " },
    { id: 4, link: "Plublishs" },
    { id: 5, link: "Subscribe to the newsletter" },
  ];
  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className="mobile-menu-coontainer"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <ul className="content-menu">
            {Data.map((item) => (
              <li key={item.id}>
                <Link
                  style={{
                    color: theme.color,
                  }}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="bottom-menu">
            <BottonTheme className="btn-mode" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
