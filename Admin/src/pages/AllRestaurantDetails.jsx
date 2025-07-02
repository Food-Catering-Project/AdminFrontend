import React, { useEffect, useState } from "react";
import axios from "axios";

const AllRestaurantDetails = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8007/admin/api/OwnerRestaurant/getAllRestuarants"
      );
      const data = response.data.data;

      if (data) {
        setRestaurants(data);
      } else {
        setError("No restaurants found.");
      }
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setError("Failed to load restaurants.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-red-100 py-10 px-5">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 drop-shadow-md">
        🍴 All Registered Restaurants
      </h1>

      {loading ? (
        <p className="text-center text-lg font-semibold text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-600 text-lg">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white p-6 rounded-xl shadow-xl border-l-4 border-orange-500 hover:shadow-2xl transition duration-300"
            >
              {/* Icon Avatar */}
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center text-2xl mr-4">
                  🍽️
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {restaurant.name}
                  </h2>
                  <p className="text-sm text-gray-500">Rating: ⭐ {restaurant.rating || "N/A"}</p>
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="text-sm text-gray-700 space-y-1">
                <p>
                  <strong>📞 Phone:</strong> {restaurant.number}
                </p>
                <p>
                  <strong>📍 Address:</strong> {restaurant.address}
                </p>
                
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRestaurantDetails;
