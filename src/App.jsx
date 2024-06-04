import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import YellowBelt from "./pages/YellowBelt.jsx";
import GreenBelt from "./pages/GreenBelt.jsx";
import BlackBelt from "./pages/BlackBelt.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/yellow-belt" element={<YellowBelt />} />
        <Route path="/green-belt" element={<GreenBelt />} />
        <Route path="/black-belt" element={<BlackBelt />} />
      </Routes>
    </Router>
  );
}

export default App;
