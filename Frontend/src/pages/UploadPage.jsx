// src/pages/UploadPage.jsx
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';  // Icon for upload button

const UploadPage = () => {
  const [result, setResult] = useState(null);  // State to store classification result

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    // Placeholder logic for file upload and classification
    if (file) {
      // Simulate classification process
      setTimeout(() => {
        setResult("This food product is classified as SAFE based on the ingredients.");  // Simulated result
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-center">Upload an Image of the Food Packet Label</h1>
      {/* Upload Button */}
      <div className="text-center py-4 mb-12">
        <label
          htmlFor="upload-input"
          className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 cursor-pointer inline-flex items-center">
          <FaUpload className="mr-2" size={24} />
          Upload Ingredients Label
        </label>
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      <p className="text-lg text-gray-600 mb-10 text-center">
        Follow the steps below to upload the ingredients section of your food packet.
      </p>

      {/* Step-by-Step Instructions */}
      <div className="w-full max-w-4xl flex flex-col space-y-8 mb-12">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img
              src="https://via.placeholder.com/200"
              alt="Food packet"
              className="rounded-md shadow-lg mx-auto"
            />
          </div>
          <div className="w-full text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-600">Step 1: Find the Back of the Packet</h3>
            <p className="text-gray-600">
              Locate the back of your food packet, where the ingredients list is usually printed.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img
              src="https://via.placeholder.com/200"
              alt="Ingredients label"
              className="rounded-md shadow-lg mx-auto"
            />
          </div>
          <div className="w-full text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-600">Step 2: Focus on the Ingredients Section</h3>
            <p className="text-gray-600">
              Ensure the ingredients list is clearly visible in the image for accurate classification.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img
              src="https://via.placeholder.com/200"
              alt="Taking picture"
              className="rounded-md shadow-lg mx-auto"
            />
          </div>
          <div className="w-full text-center md:text-left">
            <h3 className="text-xl font-semibold text-green-600">Step 3: Take a Clear Picture</h3>
            <p className="text-gray-600">
              Use your phone to take a clear, well-lit picture of the ingredients label for upload.
            </p>
          </div>
        </div>
      </div>

      
      {/* Results Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Classification Result</h2>
        {result ? (
          <p className="text-green-600 text-lg text-center">{result}</p> 
        ) : (
          <p className="text-gray-600 text-center">No result yet. Upload an image to see the classification.</p>
        )}
      </div>
    </div>
  );
};

export default UploadPage;
