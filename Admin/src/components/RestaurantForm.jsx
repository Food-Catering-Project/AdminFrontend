
import { useState } from "react";

const RestaurantForm = ({ setRestaurantData, nextStep, prevStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    address: "",
    rating: "",
    imgUrl: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Restaurant Name is required";
    if (!formData.number.trim()) newErrors.number = "Contact Number is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.rating.trim()) newErrors.rating = "Rating is required";
    if (!formData.imgUrl.trim()) newErrors.imgUrl = "Image URL is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setRestaurantData(formData);
      nextStep();
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6 border-t-4 border-orange-600">
      <h2 className="text-3xl font-bold text-orange-600 text-center mb-6">🏢 Restaurant Registration</h2>

      <div className="space-y-4">
        <input
          name="name"
          placeholder="Restaurant Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          name="number"
          type="tel"
          placeholder="Restaurant Contact Number"
          value={formData.number}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.number && <p className="text-red-500 text-sm">{errors.number}</p>}

        <textarea
          name="address"
          placeholder="Restaurant Address"
          value={formData.address}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

        <input
          name="rating"
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1 to 5)"
          value={formData.rating}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}

        <input
          name="imgUrl"
          type="text"
          placeholder="Image URL"
          value={formData.imgUrl}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
        />
        {errors.imgUrl && <p className="text-red-500 text-sm">{errors.imgUrl}</p>}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition duration-300"
        >
          ⬅️ Previous
        </button>
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

export default RestaurantForm;
