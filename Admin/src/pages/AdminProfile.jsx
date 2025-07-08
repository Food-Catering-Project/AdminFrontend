
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaUtensils, FaStore } from "react-icons/fa";

const AdminProfile = () => {
  const [owner, setOwner] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [menus, setMenus] = useState([]);
  const [showMenuForm, setShowMenuForm] = useState(false);
  const [newMenus, setNewMenus] = useState([{ menuName: "", price: "", category: "", imgUrl: "" }]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const adminName = localStorage.getItem("admin_name");
      if (!adminName) {
        navigate("/login");
        return;
      }

      try {
        const ownerResponse = await axios.get(
          `http://localhost:8007/admin/api/owner/getOwnerByName/${adminName}`
        );
        setOwner(ownerResponse.data.data);

        const ownerId = ownerResponse.data.data.ownerId;

        const restaurantResponse = await axios.get(
          `http://localhost:8007/admin/api/OwnerRestaurant/getRestuarantBy/${ownerId}`
        );
        setRestaurant(restaurantResponse.data.data);

        const restaurantId = restaurantResponse.data.data.restaurantId;

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

  // Handle input changes for dynamic menu fields
  const handleMenuInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMenus = [...newMenus];
    updatedMenus[index][name] = value;
    setNewMenus(updatedMenus);
  };

  // Add a new menu input row
  const addNewMenuField = () => {
    setNewMenus([...newMenus, { menuName: "", price: "", category: "", imgUrl: "" }]);
  };

  // Submit new menus
  const submitNewMenus = async () => {
    if (!restaurant || !restaurant.restaurantId) return;

    try {
      const payload = newMenus.map((menu) => ({
        ...menu,
        restaurantId: restaurant.restaurantId,
      }));

      await axios.post(`http://localhost:8007/admin/api/RestaurantMenu/addingMenus/${restaurant.restaurantId}`, payload);
      alert("Menu(s) added successfully!");

      // Refresh menu list
      const menuResponse = await axios.get(
        `http://localhost:8007/admin/api/RestaurantMenu/getMenus/${restaurant.restaurantId}`
      );
      setMenus(menuResponse.data.data);

      // Reset form
      setNewMenus([{ menuName: "", price: "", category: "", imgUrl: "" }]);
      setShowMenuForm(false);
    } catch (error) {
      console.error("Error adding new menu(s):", error);
      alert("Failed to add menus.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
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

        {/* Menu Details */}
        <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-orange-500">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-700 flex items-center gap-3">
              <FaUtensils className="text-orange-500" /> Menu Items
            </h2>
            <button
              onClick={() => setShowMenuForm(true)}
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
            >
              ➕ Add More Menus
            </button>
          </div>

          {menus.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {menus.map((menu) => (
                <div key={menu.id} className="bg-gray-100 shadow-lg rounded-lg p-4 border">
                  <img
                    src={menu.imgUrl}
                    alt={menu.menuName}
                    className="w-full h-48 object-cover rounded-lg mb-3"
                  />
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

        {/* Add Menu Form */}
        {showMenuForm && (
          <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-green-500 mt-4">
            <h3 className="text-xl font-semibold mb-4 text-green-700">Add New Menu Items</h3>
            {newMenus.map((menu, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <input
                  type="text"
                  name="menuName"
                  placeholder="Menu Name"
                  value={menu.menuName}
                  onChange={(e) => handleMenuInputChange(index, e)}
                  className="border p-2 rounded"
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={menu.price}
                  onChange={(e) => handleMenuInputChange(index, e)}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  value={menu.category}
                  onChange={(e) => handleMenuInputChange(index, e)}
                  className="border p-2 rounded"
                />
                <input
                  type="text"
                  name="imgUrl"
                  placeholder="Image URL"
                  value={menu.imgUrl}
                  onChange={(e) => handleMenuInputChange(index, e)}
                  className="border p-2 rounded"
                />
              </div>
            ))}

            <div className="flex justify-between">
              <button
                onClick={addNewMenuField}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                ➕ Add Another Menu
              </button>
              <button
                onClick={submitNewMenus}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                ✅ Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
