import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../assets/Logo.svg";
import moon from "../../assets/moon-01.svg";
import sun from "../../assets/sun.svg";
import { useState } from "react";

const NavBar = () => {
  const [collapse, setCollapse] = useState("nav-items");
  const [toggleIcon, setToggleIcon] = useState("toggler-icon");

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  const onToggle = () => {
    collapse === "nav-items"
      ? setCollapse("nav-items nav-collapse")
      : setCollapse("nav-items");

    toggleIcon === "toggler-icon"
      ? setToggleIcon("toggler-icon toggle")
      : setToggleIcon("toggler-icon");
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className={collapse}>
        <ul>
          <Link to="/">Home</Link>
          <Link>News</Link>
          <Link>Promotion of the mount </Link>
          <Link>Plublishs</Link>
          <Link>Subscribe to the newsletter</Link>
        </ul>

        <div className="btn-mode" onClick={toggleMode}>
          <button>
            {isDarkMode ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
            Dark mode
          </button>
        </div>
      </div>
      <div className={toggleIcon} onClick={onToggle}>
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
      </div>
    </div>
  );
};

export default NavBar;
