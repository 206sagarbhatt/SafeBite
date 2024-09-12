import { FaLeaf, FaCheckCircle, FaAppleAlt } from 'react-icons/fa';  // Importing icons
import {Link} from 'react-router-dom'
const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Slogan and Call to Action */}
        <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-green-600 mb-6">
            <FaLeaf className="inline-block mr-2" size={40} />  {/* Icon next to heading */}
            Check Your Food Ingredients for Safety
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            <FaCheckCircle className="inline-block mr-2" size={20} /> {/* Inline icon */}
            Upload a food products ingredients label, and we will classify the product as safe or harmful based on its ingredients.
          </p>
          <Link
            to="/upload"
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 inline-flex items-center"
          >
            <FaAppleAlt className="mr-2" size={20} />
            Upload Ingredients Label
          </Link>
        </div>

        {/* Right side - Image Collage */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          <div className="grid grid-rows-2 gap-4">
          <img
              src="https://images.pexels.com/photos/1582481/pexels-photo-1582481.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt="Vegetables"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/11622967/pexels-photo-11622967.jpeg?auto=compress&cs=tinysrgb&w=250&h=800"
              alt="Fruits"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-rows-2 gap-1">
            <img
              src="https://images.pexels.com/photos/1582482/pexels-photo-1582482.jpeg?auto=compress&cs=tinysrgb&w=400&h=400"
              alt="Spices"
              className="rounded-lg shadow-md"
            />
            <img
              src="https://images.pexels.com/photos/1894325/pexels-photo-1894325.jpeg?auto=compress&cs=tinysrgb&w=150&h=200"
              alt="Grains"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
