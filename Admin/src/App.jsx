// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import MultiStepForm from "./components/MultiStepForm";
// import AboutUs from "./pages/AboutUs";
// import Login from "./pages/Login";
// import AdminProfile from "./pages/AdminProfile"; // This will show owner + restaurant + menu info
// import ForgotPassword from "./forgotPassword/ForgotPassword";
// import VerifyOTP from "./forgotPassword/VerifyOTP";
// import ResetPassword from "./forgotPassword/ResetPassword";



// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<MultiStepForm />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         <Route path="/login" element={<Login />} /> 
//         <Route path="/admin-profile" element={<AdminProfile />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/verify-otp" element={<VerifyOTP />} />
//         <Route path="/reset-password" element={<ResetPassword />} />


//       </Routes>
//     </Router>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MultiStepForm from "./components/MultiStepForm";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import AdminProfile from "./pages/AdminProfile"; // This will show owner + restaurant + menu info
import ForgotPassword from "./forgotPassword/ForgotPassword";
import VerifyOTP from "./forgotPassword/VerifyOTP";
import ResetPassword from "./forgotPassword/ResetPassword";
import AdminAccess from "./pages/AdminAccess";
import AdminLogin from "./pages/AdminLogin";
import AllRestaurantDetails from "./pages/AllRestaurantDetails";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminAccess />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<MultiStepForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/seeAllRestaurants" element={<AllRestaurantDetails />} />



      </Routes>
    </Router>
  );
}

export default App;
