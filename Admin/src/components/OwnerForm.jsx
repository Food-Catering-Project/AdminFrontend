// import { useState } from "react";

// const OwnerForm = ({ setOwnerData, nextStep }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     number: "",
//     address: "",
//     panCard: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleNext = () => {
//     setOwnerData(formData);
//     nextStep();
//   };

//   return (
//     <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6 border-t-4 border-orange-600">
//       <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">📝 Owner Registration</h2>

//       <div className="space-y-4">
//         <input
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//           required
//         />
//         <input
//           name="number"
//           type="tel"
//           placeholder="Phone Number"
//           value={formData.number}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//           required
//         />
//         <textarea
//           name="address"
//           placeholder="Address"
//           value={formData.address}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//           required
//         />
//         <input
//           name="panCard"
//           placeholder="PAN Card Number"
//           value={formData.panCard}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
//           required
//         />
//       </div>

//       <div className="flex justify-end mt-6">
//         <button
//           onClick={handleNext}
//           className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
//         >
//           Next ➡️
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OwnerForm;


import { useState } from "react";

const OwnerForm = ({ setOwnerData, nextStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    panCard: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.number.trim()) newErrors.number = "Phone Number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.panCard.trim()) newErrors.panCard = "PAN Card Number is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setOwnerData(formData);
      nextStep();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6 border-t-4 border-orange-600">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">📝 Owner Registration</h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          name="number"
          type="tel"
          placeholder="Phone Number"
          value={formData.number}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

        <input
          name="panCard"
          placeholder="PAN Card Number"
          value={formData.panCard}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.panCard && <p className="text-red-500 text-sm">{errors.panCard}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>

      <div className="flex justify-end mt-6">
        <button
          onClick={handleNext}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition duration-300"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default OwnerForm;
