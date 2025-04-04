


import { useState } from "react";
import OwnerForm from "./OwnerForm";
import RestaurantForm from "./RestaurantForm";
import MenuForm from "./MenuForm";
import axios from "axios";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [ownerData, setOwnerData] = useState({});
  const [restaurantData, setRestaurantData] = useState({});
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState("");

  const nextStep = () => {
    if (validateStep(step)) {
      setError("");
      setStep(step + 1);
    } else {
      setError("All fields are required!");
    }
  };

  const prevStep = () => setStep(step - 1);

  const validateStep = (step) => {
    if (step === 1) {
      return Object.values(ownerData).every((value) => value && value.trim());
    }
    if (step === 2) {
      return Object.values(restaurantData).every((value) => value && value.trim());
    }
    if (step === 3) {
      return menuData.length > 0;
    }
    return true;
  };

  const handleSubmit = async (menus) => {
    try {
      // Step 1: Register Owner
      const ownerResponse = await axios.post(
        "http://localhost:8007/admin/api/owner/addowner",
        ownerData
      );
      const ownerId = ownerResponse.data.data.ownerId; // Ensure this matches backend response
      console.log(ownerResponse);


      // Step 2: Register Restaurant
      const restaurantResponse = await axios.post(
        `http://localhost:8007/admin/api/OwnerRestaurant/addRestuarants/${ownerId}`,
        restaurantData
      );

      console.log(restaurantResponse);
      const restaurantId = restaurantResponse.data.data.restaurantId;// Ensure this matches backend response
      console.log(restaurantId);




      // Step 3: Register Menu Items
      await axios.post(
        `http://localhost:8007/admin/api/RestaurantMenu/addingMenus/${restaurantId}`,
        menus
      );

      alert("Registration Successful!");
      setStep(1);
      setOwnerData({});
      setRestaurantData({});
      setMenuData([]);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {step === 1 && <OwnerForm setOwnerData={setOwnerData} nextStep={nextStep} />}
      {step === 2 && <RestaurantForm setRestaurantData={setRestaurantData} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <MenuForm setMenuData={setMenuData} prevStep={prevStep} handleSubmit={handleSubmit} />}
    </div>
  );
};

export default MultiStepForm;
