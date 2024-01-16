import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Details from "./Page/Details";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
