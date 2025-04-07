import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaUtensils, FaStore } from "react-icons/fa";

const AdminProfile = () => {
  const [owner, setOwner] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const adminName = localStorage.getItem("admin_name");
      if (!adminName) {
        navigate("/login"); // Redirect to login if no admin is found
        return;
      }

      try {
        // Fetch owner details
        const ownerResponse = await axios.get(
          `http://localhost:8007/admin/api/owner/getOwnerByName/${adminName}`
        );
        setOwner(ownerResponse.data.data);

        const ownerId = ownerResponse.data.data.ownerId;
        console.log(ownerId);

        // Fetch restaurant details
        const restaurantResponse = await axios.get(
          `http://localhost:8007/admin/api/OwnerRestaurant/getRestuarantBy/${ownerId}`
        );
        setRestaurant(restaurantResponse.data.data);

        const restaurantId = restaurantResponse.data.data.restaurantId;

        // Fetch menu details
        const menuResponse = await axios.get(
          `http://localhost:8007/admin/api/RestaurantMenu/getMenus/${restaurantId}`
        );
        setMenus(menuResponse.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Welcome Header */}
      <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-8">
        Welcome, {owner ? owner.name : "Loading..."}
      </h1>

      <div className="max-w-5xl mx-auto space-y-8">
        {/* Owner Details */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-4">
            <FaUser className="text-orange-500" /> Owner Details
          </h2>
          {owner ? (
            <div className="text-gray-700 space-y-2">
              <p><strong>Name:</strong> {owner.name}</p>
              <p><strong>Phone:</strong> {owner.number}</p>
              <p><strong>Address:</strong> {owner.address}</p>
              <p><strong>PAN Card:</strong> {owner.panCard}</p>
            </div>
          ) : (
            <p className="text-gray-500">Loading owner details...</p>
          )}
        </div>

        {/* Restaurant Details
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-4">
            <FaStore className="text-orange-500" /> Restaurant Details
          </h2>
          {restaurant ? (
            <div className="text-gray-700 space-y-2">
              <p><strong>Restaurant Name:</strong> {restaurant.name}</p>
              <p><strong>Number:</strong> {restaurant.number}</p>
              <p><strong>Location:</strong> {restaurant.address}</p>
              <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>
            </div>
          ) : (
            <p className="text-gray-500">Loading restaurant details...</p>
          )}
        </div> */}

        {/* Restaurant Details */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-4">
            <FaStore className="text-orange-500" /> Restaurant Details
          </h2>
          {restaurant ? (
            <div className="text-gray-700 space-y-4">
              <div className="w-full flex justify-center">
                <img
                  src={restaurant.imgUrl}
                  alt={restaurant.name}
                  className="rounded-lg w-full max-w-md object-cover h-60 shadow"
                />
              </div>

              <div className="space-y-2 pt-4">
                <p><strong>Restaurant Name:</strong> {restaurant.name}</p>
                <p><strong>Number:</strong> {restaurant.number}</p>
                <p><strong>Location:</strong> {restaurant.address}</p>
                <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Loading restaurant details...</p>
          )}
        </div>


        {/* Menu Details
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-4">
            <FaUtensils className="text-orange-500" /> Menu Items
          </h2>
          {menus.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {menus.map((menu) => (
                <div key={menu.id} className="bg-gray-100 shadow-lg rounded-lg p-4 border">
                  <h3 className="text-lg font-semibold text-gray-800">{menu.menuName}</h3>
                  <p className="text-gray-600">Category: {menu.category}</p>
                  <p className="text-green-600 font-semibold mt-2">₹{menu.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Loading menu details...</p>
          )}
        </div> */}

        {/* Menu Details */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500">
          <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-3 mb-4">
            <FaUtensils className="text-orange-500" /> Menu Items
          </h2>
          {menus.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {menus.map((menu) => (
                <div key={menu.id} className="bg-gray-100 shadow-lg rounded-lg p-4 border">
                  {/* Image Preview */}
                  <img
                    src={menu.imgUrl}
                    alt={menu.menuName}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />

                  {/* Menu Info */}
                  <h3 className="text-lg font-semibold text-gray-800">{menu.menuName}</h3>
                  <p className="text-gray-600">Category: {menu.category}</p>
                  <p className="text-green-600 font-semibold mt-2">₹{menu.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Loading menu details...</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminProfile;
