

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuForm = ({ setMenuData, prevStep, handleSubmit }) => {
  const [menus, setMenus] = useState([{ menuName: "", price: "", category: "" }]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const addMenu = () => {
    setMenus([...menus, { menuName: "", price: "", category: "" }]);
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newMenus = [...menus];
    newMenus[index][name] = value;
    setMenus(newMenus);
    setErrors({ ...errors, [`${index}-${name}`]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    menus.forEach((menu, index) => {
      Object.entries(menu).forEach(([key, value]) => {
        if (!value.trim()) {
          newErrors[`${index}-${key}`] = `${key.replace(/([A-Z])/g, " $1")} is required`;
          isValid = false;
        }
      });
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleFinalSubmit = () => {
    if (validateForm()) {
      setMenuData([...menus]);
      handleSubmit([...menus]);
      setMenus([{ menuName: "", price: "", category: "" }]);
      navigate("/");
    }
  };
   
  // const handleFinalSubmit = async () => {
  //   if (validateForm()) {
  //     setMenuData([...menus]);
  
  //     console.log("Final menu data being sent:", menus); // ✅ Debugging line
  
  //     // await handleSubmit([...menus]);
  //     await handleSubmit();
  //     setMenus([{ menuName: "", price: "", category: "" }]);
  //     navigate("/");
  //   }
  // };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6 border-t-4 border-orange-600">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">🍽️ Menu Registration</h2>

      {menus.map((menu, index) => (
        <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm bg-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Menu Item {index + 1}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                name="menuName"
                placeholder="Menu Name"
                value={menu.menuName}
                onChange={(e) => handleChange(index, e)}
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none w-full"
                required
              />
              {errors[`${index}-menuName`] && <p className="text-red-500 text-sm">{errors[`${index}-menuName`]}</p>}
            </div>
            <div>
              <input
                name="price"
                type="number"
                placeholder="Price"
                value={menu.price}
                onChange={(e) => handleChange(index, e)}
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none w-full"
                required
              />
              {errors[`${index}-price`] && <p className="text-red-500 text-sm">{errors[`${index}-price`]}</p>}
            </div>
            <div>
              <input
                name="category"
                placeholder="Category"
                value={menu.category}
                onChange={(e) => handleChange(index, e)}
                className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none w-full"
                required
              />
              {errors[`${index}-category`] && <p className="text-red-500 text-sm">{errors[`${index}-category`]}</p>}
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          ⬅️ Previous
        </button>
        <button
          onClick={addMenu}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
        >
          ➕ Add Another Menu
        </button>
        <button
          onClick={handleFinalSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          ✅ Submit
        </button>
      </div>
    </div>
  );
};

export default MenuForm;
