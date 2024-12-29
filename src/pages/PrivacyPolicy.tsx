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
          <p className="mb-6 font-bold">
            READ THIS POLICY CAREFULLY BEFORE BROWSING THIS WEBSITE OR USING ANY OF OUR SERVICES. YOUR CONTINUED USE OF THIS WEBSITE AND OUR SERVICES INDICATES THAT YOU HAVE BOTH READ AND AGREE TO THE TERMS OF THIS PRIVACY POLICY. YOU CANNOT USE THIS WEBSITE OR OUR SERVICES IF YOU DO NOT ACCEPT THIS POLICY. ALL SECTIONS OF THIS POLICY ARE APPLICABLE TO USERS UNLESS THE SECTION EXPRESSLY STATES OTHERWISE.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 1: Privacy Policy</h2>
          <p className="mb-6">
            1.1. Personal Information will be understood in accordance with the definition provided in the Act. We take all reasonable steps to ensure the quality, accuracy, and confidentiality of Personal Information in our possession.
          </p>
          <p className="mb-6">
            1.2. While we strive to prevent unauthorized access to your Personal Information, it is impossible to guarantee 100% security. By using our services or website, you consent to the collection and use of your Personal Information as outlined in this Privacy Policy.
          </p>
          <p className="mb-6">
            1.3. We may collect the following types of Personal Information:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>First Name</li>
            <li>Surname</li>
            <li>Email</li>
            <li>Phone Number</li>
            <li>Business Name</li>
            <li>Business Address</li>
          </ul>
          <p className="mb-6">
            1.4. We limit the types of Personal Information collected to only that to which you consent, such as during online registration, surveys, or marketing activities.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 2: Log Files</h2>
          <p className="mb-6">
            2.1. When you visit our website, we may collect information such as your IP address, browser type, and the pages you visit. This information is aggregated and anonymous, but it may be linked to your Personal Information if provided.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 3: Disclosure of Personal Information</h2>
          <p className="mb-6">
            3.1. We may disclose your Personal Information to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Suppliers</li>
            <li>Affiliated Companies</li>
          </ul>
          <p className="mb-6">
            3.2. If services are provided in conjunction with third parties, they may require your Personal Information to fulfill your request.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 4: Cookies</h2>
          <p className="mb-6">
            4.1. We use cookies to enhance your browsing experience. The two types of cookies we use are:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Session cookies: Temporary cookies that expire when you close your browser.</li>
            <li>Permanent cookies: Cookies that store a unique code to identify you on future visits.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 5: Links from the Website</h2>
          <p className="mb-6">
            5.1. Our website may contain links to third-party websites. We are not responsible for their privacy practices or content. Users should evaluate the trustworthiness of third-party websites before sharing personal information.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 6: Electronic Communications and Transactions Act</h2>
          <p className="mb-6">
            6.1. Data messages sent by us will be deemed received when you respond to them. Electronic signatures or encryption are not required for valid communications between us and users.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 7: Lodging of Complaints</h2>
          <p className="mb-6">
            7.1. If you wish to raise a complaint regarding the processing of your Personal Information, you may contact the Information Regulator:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Telephone: +27 (0) 10 023 5207</li>
            <li>Email: inforeg@justice.gov.za</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
