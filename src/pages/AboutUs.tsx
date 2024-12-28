const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-accent mb-8">About CureRoot</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            CureRoot is at the forefront of bridging traditional African medicine with modern scientific research through innovative AI-powered drug discovery. Our mission is to unlock the vast potential of natural compounds while preserving and honoring indigenous knowledge.
          </p>
          
          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">Our Vision</h2>
          <p className="text-gray-600 mb-6">
            We envision a future where traditional medicine and modern science work in harmony to create sustainable, effective healthcare solutions. By leveraging artificial intelligence and deep learning technologies, we aim to accelerate the discovery of new therapeutic compounds while ensuring the preservation of traditional medical knowledge.
          </p>
          
          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">Our Approach</h2>
          <p className="text-gray-600 mb-6">
            Our unique approach combines:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Advanced AI algorithms for compound analysis and prediction</li>
            <li>Collaboration with traditional healers and indigenous communities</li>
            <li>Rigorous scientific validation and testing</li>
            <li>Sustainable and ethical sourcing practices</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-accent mt-8 mb-4">Our Commitment</h2>
          <p className="text-gray-600 mb-6">
            We are committed to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Preserving and protecting traditional medical knowledge</li>
            <li>Ensuring fair compensation for indigenous communities</li>
            <li>Maintaining transparency in our research and development process</li>
            <li>Contributing to sustainable healthcare solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;