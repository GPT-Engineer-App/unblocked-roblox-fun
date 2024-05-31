import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UnblockInstructions from "./pages/UnblockInstructions.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/unblock-instructions" element={<UnblockInstructions />} />
      </Routes>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/unblock-instructions">Unblock Instructions</Link>
      </nav>
    </Router>
  );
}

export default App;
