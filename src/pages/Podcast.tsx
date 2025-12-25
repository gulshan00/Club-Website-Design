
import Layout from '../components/layout/Layout';

const Podcast = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            OUR PODCASTS
          </span>
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Example Podcast Card */}
          <div className="bg-gradient-to-br from-gray-900/50 to-blue-900/30 rounded-2xl p-6 border border-cyan-500/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Episode 1: The Big Bang Theory</h3>
                <p className="text-gray-400 text-sm">45 min • Released Dec 1, 2024</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4 mb-6">
              In our first episode, we explore the origins of the universe and what science tells us about the Big Bang.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Play Now
              </button>
              <button className="px-6 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors">
                Download
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/30 rounded-2xl p-6 border border-purple-500/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Episode 2: Black Holes Explained</h3>
                <p className="text-gray-400 text-sm">52 min • Coming Soon</p>
              </div>
            </div>
            <p className="text-gray-300 mt-4">
              Dive into the mysterious world of black holes with our special guest astrophysicist.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Podcast;