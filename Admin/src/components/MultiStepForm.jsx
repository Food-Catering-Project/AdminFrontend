// // import { useState } from "react";
// // import OwnerForm from "./OwnerForm";
// // import RestaurantForm from "./RestaurantForm";
// // import MenuForm from "./MenuForm";
// // import axios from "axios";

// // const MultiStepForm = () => {
// //   const [step, setStep] = useState(1);
// //   const [ownerData, setOwnerData] = useState({});
// //   const [restaurantData, setRestaurantData] = useState({});
// //   const [menuData, setMenuData] = useState([]);

// //   const nextStep = () => setStep(step + 1);
// //   const prevStep = () => setStep(step - 1);

// //   const handleSubmit = async () => {
// //     try {
// //       // Step 1: Register Owner
// //       const ownerResponse = await axios.post("http://localhost:8007/admin/api/owner/addowner", ownerData);
// //       const ownerId = ownerResponse.data.data.ownerId;

// //       // Step 2: Register Restaurant
// //       const restaurantResponse = await axios.post(`http://localhost:8007/admin/api/OwnerRestaurant/addRestuarants/${ownerId}`, restaurantData);
// //       const restaurantId = restaurantResponse.data.data.restaurantId;

// //       // Step 3: Register Menu Items
// //       await axios.post(`http://localhost:8007/admin/api/RestaurantMenuController/addingMenus/${restaurantId}`, menuData);

// //       alert("Registration Successful!");
// //     } catch (error) {
// //       console.error("Error:", error);
// //     }
// //   };

// //   return (
// //     <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
// //       {step === 1 && <OwnerForm setOwnerData={setOwnerData} nextStep={nextStep} />}
// //       {step === 2 && <RestaurantForm setRestaurantData={setRestaurantData} nextStep={nextStep} prevStep={prevStep} />}
// //       {step === 3 && <MenuForm setMenuData={setMenuData} prevStep={prevStep} handleSubmit={handleSubmit} />}
// //     </div>
// //   );
// // };

// // export default MultiStepForm;


// import { useState } from "react";
// import OwnerForm from "./OwnerForm";
// import RestaurantForm from "./RestaurantForm";
// import MenuForm from "./MenuForm";
// import axios from "axios";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [ownerData, setOwnerData] = useState({});
//   const [restaurantData, setRestaurantData] = useState({});
//   const [menuData, setMenuData] = useState([]);

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   const handleSubmit = async (menus) => {
//     try {
//       // Step 1: Register Owner
//       const ownerResponse = await axios.post("http://localhost:8007/admin/api/owner/addowner", ownerData);
//       const ownerId = ownerResponse.data.data.ownerId;

//       // Step 2: Register Restaurant
//       const restaurantResponse = await axios.post(`http://localhost:8007/admin/api/OwnerRestaurant/addRestuarants/${ownerId}`, restaurantData);
//       const restaurantId = restaurantResponse.data.data.restaurantId;

//       // Step 3: Register Menu Items
//       await axios.post(`http://localhost:8007/admin/api/RestaurantMenuController/addingMenus/${restaurantId}`, menus);

//       alert("Registration Successful!");
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong! Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       {step === 1 && <OwnerForm setOwnerData={setOwnerData} nextStep={nextStep} />}
//       {step === 2 && <RestaurantForm setRestaurantData={setRestaurantData} nextStep={nextStep} prevStep={prevStep} />}
//       {step === 3 && <MenuForm setMenuData={setMenuData} prevStep={prevStep} handleSubmit={handleSubmit} />}
//     </div>
//   );
// };

// export default MultiStepForm;

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
    return true;
  };

  const handleSubmit = async (menus) => {
    try {
      // Step 1: Register Owner
      const ownerResponse = await axios.post("http://localhost:8007/admin/api/owner/addowner", ownerData);
      const ownerId = ownerResponse.data.data.ownerId;

      // Step 2: Register Restaurant
      const restaurantResponse = await axios.post(`http://localhost:8007/admin/api/OwnerRestaurant/addRestuarants/${ownerId}`, restaurantData);
      const restaurantId = restaurantResponse.data.data.restaurantId;

      // Step 3: Register Menu Items
      await axios.post(`http://localhost:8007/admin/api/RestaurantMenuController/addingMenus/${restaurantId}`, menus);

      alert("Registration Successful!");
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
