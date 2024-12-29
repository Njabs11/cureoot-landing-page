import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link to="/" className="inline-flex items-center text-accent hover:text-primary mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-accent mb-8">About CureRoot</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            We are a biotechnology company based in South Africa that is discovering new drugs from African medicinal plants. By combining cutting-edge AI technology with local plant medicine knowledge, we leverage Africa's rich biodiversity to innovatively address global health challenges.
          </p>
          
          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            To become a global leader in drug discovery by developing natural compounds from African plants into life-saving therapeutics for the whole of humanity.
          </p>
          
          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">Our Approach</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li><strong>AI-Driven Discovery:</strong> Advanced algorithms for analyzing and predicting therapeutic potential in natural compounds.</li>
            <li><strong>Regional Knowledge Integration:</strong> Collaborations with local communities and researchers to unlock insights from centuries-old medicinal practices.</li>
            <li><strong>Scientific Rigor:</strong> Comprehensive testing and validation processes to ensure efficacy and safety.</li>
            <li><strong>Sustainable Sourcing:</strong> Ethical and environmentally responsible sourcing practices for natural materials.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">Our Commitment</h2>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Delivering innovative healthcare solutions that address unmet global needs.</li>
            <li>Maintaining transparency in our research and commercialization processes.</li>
            <li>Preserving and advancing African medicinal plant knowledge.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
