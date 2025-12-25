
import { Users, Globe, BookOpen } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              WE ARE CLUB THAT LEARN, SHARE AND EXPLORE
              <span className="block text-blue-400">EVERYTHING RELATED TO OUR UNIVERSE.</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                DHRUVA IS A COLLEGE CLUB, WE WORK TOWARD INCREASING KNOWLEDGE
                ABOUT SPACE, COSMOS AND EVERYTHING WE ARE STILL LEARNING ABOUT.
                WE SHARE AND LEARN TOGETHER.
              </p>

              <div className="bg-gray-800 rounded-xl p-6 border-l-4 border-blue-500">
                <p className="text-xl italic text-gray-300 mb-2">
                  "ASTRONOMY COMPELS THE SOUL TO LOOK UPWARDS AND LEADS US FROM THIS WORLD TO ANOTHER"
                </p>
                <p className="text-gray-400">— John Edmont</p>
              </div>

              <div className="flex flex-wrap gap-6 mt-8">
                <div className="flex items-center">
                  <Users className="text-blue-400 mr-3" size={24} />
                  <div>
                    <div className="font-bold text-lg">Community</div>
                    <div className="text-gray-400">Join 500+ members</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="text-blue-400 mr-3" size={24} />
                  <div>
                    <div className="font-bold text-lg">Explore</div>
                    <div className="text-gray-400">Weekly events</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-6 rounded-xl h-48 flex flex-col justify-center">
                <BookOpen size={32} className="text-blue-300 mb-4" />
                <h3 className="font-bold text-xl">Learn</h3>
                <p className="text-gray-300 mt-2">Expand your cosmic knowledge</p>
              </div>
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 p-6 rounded-xl h-48 flex flex-col justify-center">
                <Users size={32} className="text-purple-300 mb-4" />
                <h3 className="font-bold text-xl">Share</h3>
                <p className="text-gray-300 mt-2">Exchange ideas with peers</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-gradient-to-br from-gray-800 to-blue-900 p-6 rounded-xl h-48 flex flex-col justify-center">
                <Globe size={32} className="text-blue-300 mb-4" />
                <h3 className="font-bold text-xl">Explore</h3>
                <p className="text-gray-300 mt-2">Discover the universe</p>
              </div>
              <div className="bg-gradient-to-br from-blue-800 to-cyan-900 p-6 rounded-xl h-48 flex flex-col justify-center">
                <BookOpen size={32} className="text-cyan-300 mb-4" />
                <h3 className="font-bold text-xl">Grow</h3>
                <p className="text-gray-300 mt-2">Develop space science skills</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;