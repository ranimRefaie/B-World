import { useContext, useState } from "react";
import "./Navbar.css";
import light_logo from "../../assets/Logo-Light.svg";
import dark_logo from "../../assets/Logo-Dark.svg";
import MobileNav from "../MobileNav/MobileNav";
import { FiAlignJustify } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import BottonTheme from "../BottonTheme/BottonTheme";
import { ThemeContext } from "../../Contexts/Themes";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [{ theme, isDark }] = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const Data = [
    { id: 1, link: "Home", to: "/" },
    { id: 2, link: "News" },
    { id: 3, link: "Promotion of the mount " },
    { id: 4, link: "Plublishs" },
    { id: 5, link: "Subscribe to the newsletter" },
  ];

  return (
    <div>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div
        className="nav-wrapper"
        style={{
          backgroundColor: theme.backgroundColor,
        }}
      >
        <div className="nav-content">
          <div className="logo">
            {isDark ? (
              <img src={dark_logo} alt="" />
            ) : (
              <img src={light_logo} alt="" />
            )}
          </div>
          <ul>
            {Data.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.to}
                  style={{
                    color: theme.color,
                  }}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <BottonTheme className="btn-mode" />
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? (
                <CgClose
                  size={30}
                  style={{
                    color: theme.color,
                  }}
                />
              ) : (
                <FiAlignJustify
                  size={30}
                  style={{
                    color: theme.color,
                  }}
                />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
