
import Layout from '../components/layout/Layout';

const Events = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            UPCOMING EVENTS
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Example Event Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">Upcoming</span>
              <span className="text-gray-400">Dec 25, 2024</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Stargazing Night</h3>
            <p className="text-gray-400 mb-4">
              Join us for a night of celestial observation with telescopes. We'll be viewing Jupiter's moons and distant galaxies.
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Register Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">Workshop</span>
              <span className="text-gray-400">Jan 15, 2025</span>
            </div>
            <h3 className="text-2xl font-bold mb-3">Astrophotography Basics</h3>
            <p className="text-gray-400 mb-4">
              Learn how to capture stunning images of the night sky with your camera.
            </p>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;