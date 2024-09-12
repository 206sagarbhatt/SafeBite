import { FaUpload } from 'react-icons/fa';  
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="bg-green-600 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Check Your Foods Safety?</h2>
        <p className="text-lg text-white mb-8">
          Upload your ingredients list now and find out if your food is safe to eat.
        </p>
        
        {/* New tagline */}
        <p className="text-lg font-light text-gray-100 mb-6">
          Protect your health with instant food safety analysis.
        </p>

        <Link
          to="/upload"
          className="bg-white text-green-600 px-6 py-3 rounded-md hover:bg-gray-200 inline-flex items-center"
        >
          <FaUpload className="mr-2" size={20} />
          Upload Ingredients
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
