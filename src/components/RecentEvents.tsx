import { Calendar, ArrowRight } from 'lucide-react';

const RecentEvents = () => {
  const events = [
    {
      title: "TALK ON COSMIC NEBULA",
      description: "Clean your older mind connection. Angie didn't often pursue this threeum accumen tempo bloomden more. Learn your dolo vs. deep conceicate.",
      date: "Nov 15, 2023"
    },
    {
      title: "STARGAZING SESSION",
      description: "Explore the night sky and learn about constellations with our experienced astronomers.",
      date: "Nov 22, 2023"
    },
    {
      title: "SPACE TECH WORKSHOP",
      description: "Hands-on workshop about the latest technologies in space exploration.",
      date: "Dec 05, 2023"
    }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">RECENT EVENTS</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="flex items-center text-blue-400 mb-4">
                <Calendar size={20} className="mr-2" />
                <span className="text-sm font-semibold">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-gray-400 mb-4">
                {event.description}
              </p>
              <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                Read More <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">WHAT'S IT LIKE WHEN WE HAVE EVENTS</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Experience the wonder of space exploration through our engaging events, workshops, and stargazing sessions.
          </p>
          <button className="bg-white text-gray-900 hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
            KNOW MORE ABOUT US HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;