import { Link } from "react-router-dom";

const AdminAccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-red-600 p-6">
      <div className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-2xl p-10 max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Choose Your Login Role
        </h1>

        <div className="flex flex-col space-y-6">
          <Link
            to="/adminlogin"
            className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Admin Login
          </Link>

          <Link
            to="/login"
            className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Owner Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminAccess;
