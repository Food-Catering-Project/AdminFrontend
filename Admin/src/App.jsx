import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MultiStepForm from "./components/MultiStepForm";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import AdminProfile from "./pages/AdminProfile"; // This will show owner + restaurant + menu info



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<MultiStepForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/admin-profile" element={<AdminProfile />} />


      </Routes>
    </Router>
  );
}

export default App;
