import "./BottonTheme.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/Themes";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon-01.svg";

const BottonTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="btn-mode" onClick={toggleMode}>
      <button
        type="button"
        onClick={toggleTheme}
        style={{
          color: theme.color,
        }}
      >
        {isDark ? <img src={sun} alt="" /> : <img src={moon} alt="" />}
        {isDark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
};

export default BottonTheme;
