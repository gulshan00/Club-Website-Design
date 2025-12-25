
import Layout from '../components/layout/Layout';

const AboutUs = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ABOUT DHRUVA
            </span>
          </h1>
          
          <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 rounded-2xl p-8 border border-cyan-500/20 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-300">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              Dhruva is a college club dedicated to exploring the mysteries of the universe. 
              We believe in the power of collective learning and sharing knowledge about space, 
              cosmos, and everything beyond our planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">What We Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Weekly space discussions and talks</li>
                <li>• Astrophotography sessions</li>
                <li>• Telescope observations</li>
                <li>• Podcast recordings</li>
                <li>• Collaboration with astronomy departments</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-gray-900/50 to-pink-900/30 rounded-2xl p-6 border border-pink-500/20">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Join Us</h3>
              <p className="text-gray-300 mb-4">
                Whether you're a seasoned astronomer or just starting your cosmic journey, 
                Dhruva welcomes all space enthusiasts.
              </p>
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;