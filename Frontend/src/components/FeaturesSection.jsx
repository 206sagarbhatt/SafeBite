import { FaCheckCircle, FaAppleAlt, FaSearchPlus } from 'react-icons/fa';  // Import icons

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 bg-gray-50 shadow-md rounded-md">
            <FaCheckCircle size={40} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-600">Ingredient Classification</h3>
            <p className="mt-4 text-gray-600">
              Automatically classify food products as safe or harmful based on their ingredients list.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-gray-50 shadow-md rounded-md">
            <FaAppleAlt size={40} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-600">Alternative Suggestions</h3>
            <p className="mt-4 text-gray-600">
              Get recommendations for healthier or safer alternatives to harmful products.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-gray-50 shadow-md rounded-md">
            <FaSearchPlus size={40} className="text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-600">Real-time Analysis</h3>
            <p className="mt-4 text-gray-600">
              Instant feedback and suggestions based on the ingredients you upload.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
