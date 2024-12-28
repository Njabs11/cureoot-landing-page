import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">About Us</h3>
            <p className="text-gray-600 text-sm">
              CureRoot is dedicated to bridging traditional African medicine with modern science through AI-powered drug discovery. Our mission is to unlock the potential of natural compounds while preserving indigenous knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Privacy Policy</h3>
            <p className="text-gray-600 text-sm">
              We are committed to protecting your privacy. Our privacy policy outlines how we collect, use, and safeguard your personal information in compliance with applicable data protection laws.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Terms & Conditions</h3>
            <p className="text-gray-600 text-sm">
              By using our services, you agree to our terms and conditions. These terms govern your use of our platform and outline our mutual rights and responsibilities.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} CureRoot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};