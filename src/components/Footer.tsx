import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <div data-tf-live="01JG8QXHDHVY781MC3GJV483VD"></div>
                <a href="#" className="text-gray-600 hover:text-primary text-sm cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-primary text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-gray-600 hover:text-primary text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">About CureRoot</h3>
            <p className="text-gray-600 text-sm">
              CureRoot is dedicated to bridging traditional African medicine with modern science
              through AI-powered drug discovery. Our mission is to unlock the potential of natural
              compounds while preserving indigenous knowledge.
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