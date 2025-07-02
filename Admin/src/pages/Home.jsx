
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-red-600 p-6">
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
            to="/seeAllRestaurants"
            className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Registered Restaurants
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
