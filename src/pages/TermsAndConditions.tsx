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
          <h1 className="text-3xl font-bold text-accent mb-8">THESE TERMS OF SERVICE ("TERMS") ARE EFFECTIVE AS OF: 1 JANUARY 2024 "EFFECTIVE DATE"</h1>
          <p className="text-gray-600 mb-6">
            READ THESE TERMS CAREFULLY BEFORE BROWSING THIS WEBSITE. YOUR CONTINUED USE OF THE WEBSITE WHETHER AS A USER ("A USER", "YOU" OR "YOUR") INDICATES THAT YOU HAVE BOTH READ AND ACCEPTED THESE TERMS. YOU CANNOT USE THIS WEBSITE IF YOU DO NOT ACCEPT THESE TERMS. ALL SECTIONS OF THESE TERMS ARE APPLICABLE TO YOU UNLESS THE SECTION EXPRESSLY STATES OTHERWISE. THESE TERMS SHALL OPERATE IN ADDITION TO ANY OTHER MORE SPECIFIC TERMS THAT MIGHT APPLY TO A USER. IF THERE EXISTS A CONFLICT BETWEEN THESE TERMS AND THE MORE SPECIFIC TERMS APPLICABLE TO A USER, THE MORE SPECIFIC TERMS SHALL PREVAIL TO THE EXTENT OF SUCH INCONSISTENCY.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 1. Introduction</h2>
          <p className="text-gray-600 mb-6">
            1.1. These Terms will apply in respect of a User’s use of the website cure-root.com ("the Website"). By using this Website, a User agrees to accept the Terms contained herein.
          </p>
          <p className="text-gray-600 mb-6">
            1.2. Should a User not agree to the Terms contained herein, a User must immediately desist from using this Website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 2. Intellectual Property Rights</h2>
          <p className="text-gray-600 mb-6">
            2.1. Cure-Root and/or Cure-Root’s licensors own all the intellectual property rights and materials as are contained on this Website.
          </p>
          <p className="text-gray-600 mb-6">
            2.2. A User is granted a limited license only for purposes of utilizing this Website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 3. Restrictions</h2>
          <p className="text-gray-600 mb-6">3.1. A User may not:</p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Publish or mirror any of this Website’s material in any media whatsoever.</li>
            <li>Use this Website for any objectionable or unlawful purpose.</li>
            <li>Take any action that may impose an unreasonable or disproportionately large load on this Website’s infrastructure.</li>
            <li>Introduce any virus, worm, trojan horse, or other malicious code.</li>
            <li>Engage in any data mining, data harvesting, or data extracting activity.</li>
            <li>Use this Website contrary to applicable laws and regulations.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 4. Links to Other Websites</h2>
          <p className="text-gray-600 mb-6">
            4.1. This Website may contain links or portals to other websites. CureRoot has no control over websites operated by third parties and is not responsible for their content or privacy practices.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 5. No Warranties</h2>
          <p className="text-gray-600 mb-6">
            5.1. This Website is provided “as is” with all faults. CureRoot makes no warranties or representations regarding the Website or its contents.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 6. Limitation of Liability and Indemnification</h2>
          <p className="text-gray-600 mb-6">
            6.1. In no event shall CureRoot or its employees be held liable for any issues arising from the use of this Website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 7. Severability</h2>
          <p className="text-gray-600 mb-6">
            7.1. If any provision of these Terms is found invalid, the remaining provisions will remain in effect.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 8. Variation of Terms</h2>
          <p className="text-gray-600 mb-6">
            8.1. CureRoot reserves the right to revise these Terms at any time without prior notice.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">Article 9. Governing Law & Jurisdiction</h2>
          <p className="text-gray-600 mb-6">
            9.1. These Terms will be governed by and interpreted in accordance with the laws of the Republic of South Africa.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
