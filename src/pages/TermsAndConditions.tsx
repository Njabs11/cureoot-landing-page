import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-accent hover:text-primary mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-8 text-accent">Terms & Conditions</h1>
        <div className="prose prose-lg">
        <p className="mb-6">
          By accessing and using CureRoot's services, you agree to be bound by these Terms and Conditions.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Use of Services</h2>
        <p className="mb-6">
          Our platform is designed to facilitate research and development in traditional medicine and drug discovery. You agree to use our services only for their intended purposes.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Intellectual Property</h2>
        <p className="mb-6">
          All content and materials available on CureRoot are protected by intellectual property rights. You may not use, reproduce, or distribute our content without authorization.
        </p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="mb-6">
          CureRoot is provided "as is" without any warranties. We shall not be liable for any damages arising from the use of our services.
        </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
