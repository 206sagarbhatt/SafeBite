import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import UploadPage from './pages/UploadPage';  // Import the new UploadPage

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <FeaturesSection />
                <CTASection />
              </>
            }
          />
          <Route path="/upload" element={<UploadPage />} />  {/* New route for Upload Page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
