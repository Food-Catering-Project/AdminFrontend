import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaCheckCircle, FaChartLine, FaWallet, FaBullhorn, FaClipboardList, FaHandshake, FaRegSmile } from "react-icons/fa"; 
import RestaurantImage from "../assets/RestuarantImage.jpg"; // Update with relevant image
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <motion.div
      className="w-full py-16 px-6 sm:px-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-6">
        GROW YOUR BUSINESS WITH US
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed font-medium mb-12">
        Build lasting customer relationships and expand your restaurant’s reach with our trusted catering platform.
      </p>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto">
        {/* Left Side Content */}
        <motion.div
          className="md:w-1/3 text-gray-700 leading-relaxed space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-orange-500">
            Why Restaurants Trust Us?
          </h2>
          <p>
            We provide a seamless platform where restaurant owners can showcase their catering services, 
            receive bulk orders, and increase their customer base. Whether you’re a small eatery or a 
            well-established restaurant, our platform helps you scale up and maximize profits effortlessly.
          </p>
        </motion.div>

        {/* Middle Image */}
        <motion.div
          className="md:w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={RestaurantImage} alt="Restaurant Partnership" className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          className="md:w-1/3 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-orange-500">
            Benefits of Partnering With Us:
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Access a large customer base for catering orders.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Easy online order management system.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Secure and timely payments.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Marketing and promotional support.
            </li>
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500" /> Flexible pricing and menu customization.
            </li>
          </ul>

          {/* Registered Restaurants Count */}
          <div className="flex items-center gap-3 text-lg font-semibold text-orange-600 mt-4">
            <FaUsers className="text-3xl" />
            <span>500+ Restaurants Registered</span>
          </div>
        </motion.div>
      </div>

      {/* Statistics Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 mt-16 bg-orange-500 text-white py-12 rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Business Growth */}
        <div className="flex flex-col items-center text-center">
          <FaChartLine className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">3X</h3>
          <p className="text-lg">Faster Business Growth</p>
        </div>

        {/* Revenue Increase */}
        <div className="flex flex-col items-center text-center">
          <FaWallet className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">2X</h3>
          <p className="text-lg">Revenue Boost</p>
        </div>

        {/* Marketing Support */}
        <div className="flex flex-col items-center text-center">
          <FaBullhorn className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-lg">Marketing Campaigns</p>
        </div>

        {/* Happy Clients */}
        <div className="flex flex-col items-center text-center">
          <FaRegSmile className="text-5xl mb-2" />
          <h3 className="text-3xl font-bold">200,000+</h3>
          <p className="text-lg">Happy Customers</p>
        </div>
      </motion.div>

      {/* Registration Call to Action */}
      <motion.div
        className="text-center mt-16 bg-gray-100 py-12 px-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Ready to Grow Your Restaurant?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Register your restaurant today and start receiving bulk catering orders from verified customers.
        </p>
        <Link
          to="/register"
          className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition-all"
        >
          Register Now
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
