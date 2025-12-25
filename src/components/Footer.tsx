const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                DHRUVA
              </span>
            </h3>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">About us</h4>
            <p className="text-gray-400">Exploring the cosmos together</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Podcasts</h4>
            <p className="text-gray-400">Listen to our space talks</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Explore</h4>
            <p className="text-gray-400">Join our cosmic journey</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">Contact: <span className="text-cyan-400">info@dhruva.com</span></p>
          <p className="text-gray-500 mt-2">© {new Date().getFullYear()} Dhruva Space Club</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;