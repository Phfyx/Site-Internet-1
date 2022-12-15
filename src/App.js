import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Aboutme from "./pages/Aboutme/Aboutme";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </div>
  );
}
export default App;
