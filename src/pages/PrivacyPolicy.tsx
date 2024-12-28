import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-accent hover:text-primary mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold mb-8 text-accent">Privacy Policy</h1>
        <div className="prose prose-lg">
          <p className="mb-6">
            We are committed to protecting your privacy. This Privacy Policy explains how CureRoot collects, uses, and safeguards your personal information.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Information Collection</h2>
          <p className="mb-6">
            We collect information that you provide directly to us, including contact information, research interests, and professional affiliations.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Data Protection</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk of processing your personal information.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-6">
            You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
