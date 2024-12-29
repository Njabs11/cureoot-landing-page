import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {
    // @ts-ignore
    if (window.tf) {
      // @ts-ignore
      window.tf.load();
    }
    console.log("Initializing Typeform in Footer");
  }, []);

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
              CureRoot is advancing global drug discovery by leveraging Africa's rich biodiversity and cutting-edge AI technologies. Our mission is to uncover natural compounds from African plants and transform them into life-saving medicines for the world.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-gray-500">
            © 2025 CureRoot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};