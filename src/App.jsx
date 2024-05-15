import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./Contexts/Themes";
import Home from "./Page/Home";
import Details from "./Page/Details";

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
