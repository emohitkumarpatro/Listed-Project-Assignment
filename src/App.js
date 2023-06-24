import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./pages/loginpage";
import Dashboard from "./pages/dashboard";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="font-custom">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
