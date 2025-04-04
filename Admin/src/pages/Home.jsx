// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <h1 className="text-4xl font-bold mb-6 text-gray-800">Admin Panel - Food Catering</h1>
//       <p className="text-lg text-gray-600 mb-4">Manage restaurants, menus, and orders from one place.</p>
      
//       <div className="flex space-x-6">
//         <Link
//           to="/register"
//           className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
//         >
//           Register a Restaurant
//         </Link>
        
//         <Link
//           to="/dashboard"
//           className="px-6 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition"
//         >
//           Go to Dashboard
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;


import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl p-10 max-w-3xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to the <span className="text-orange-600">Admin Panel</span>
        </h1>
        <p className="text-lg text-gray-900 mb-6">
          Connect With Us !!!!!!!!
        </p>

        <div className="flex space-x-6 justify-center">
          <Link
            to="/register"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Register a Restaurant
          </Link>

          <Link
            to="/aboutus"
            className="px-6 py-3 bg-gray-800 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-gray-900 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            About us
          </Link>


          <Link
            to="/login"
            className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Admin Login
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
