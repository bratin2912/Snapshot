import Search from "./Components/Search";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Mountain from "./Components/Mountain";
import Food from "./Components/Food";
import Birds from "./Components/Birds";
import Beaches from "./Components/Beaches";
import Others from "./Components/Others";
import '../src/App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="mountain" element={<Mountain />} />
          <Route path="bird" element={<Birds />} />
          <Route path="food" element={<Food />} />
          <Route path="beaches" element={<Beaches />} />
          <Route path="search" element={<Others />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
