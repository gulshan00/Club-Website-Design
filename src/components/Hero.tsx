

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-900 via-black to-blue-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            LET'S TRAVEL TO THE EDGE
            <span className="block text-blue-400">OF SPACE</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            We are a group that love to explore and learn new information related to our universe,
            join us and Explore.
          </p>

          <div className="text-2xl font-semibold text-yellow-400 mb-8">
            DIROVIA NORL
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
              Join Now
            </button>
            <button className="border border-blue-500 text-blue-400 hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;