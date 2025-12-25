
import { useState, type SetStateAction } from "react";
import recentBg from "../assets/recent.jpg";
import logo from "../assets/logo.png";
import Layout from "../components/layout/Layout";


export default function Home() {
const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "STARGAZING NIGHT",
      description: "Annual night under the stars with telescopes and astronomy discussions."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
      title: "EXPERT LECTURES",
      description: "Renowned scientists sharing insights about cosmic discoveries."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4",
      title: "HANDS-ON WORKSHOPS",
      description: "Building rockets and conducting space experiments."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      title: "TEAM ACTIVITIES",
      description: "Group activities and collaborative space projects."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };


  return (
     <Layout>
    <div className="min-h-screen w-full text-white relative overflow-hidden">
      {/* Main page content */}
      <div className="relative z-10">
        <section className=" flex items-center justify-center px-6 pt-16">
          <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
            {/* Left Text Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                LET'S TRAVEL TO THE EDGE
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  OF SPACE
                </span>
              </h1>

              <p className="mt-6 text-gray-300 text-lg max-w-lg">
                We are a group that love to explore and learn new information related
                to our universe. Join us and Explore
              </p>

              <button className="mt-8 px-8 py-3 border text-white font-semibold rounded-md  ">
                DISCOVER MORE
              </button>
            </div>

            {/* Right Moon Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"
                  alt="Moon"
                  className="w-80 h-80 rounded-full object-cover border-4 border-white/10 shadow-2xl relative z-10"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Recent Events Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mt-12 mb-3 text-white">
              RECENT EVENTS
            </h2>

            <div className="relative rounded-xl overflow-hidden border border-white/10">

              {/* ⭐ Background Image from assets */}
              <img
                src={recentBg}
                alt="Recent Event"
                className="w-full h-120 object-cover"
              />

              {/* ⭐ Glassmorphism card */}
              <div className="
            absolute top-1/2 right-8 -translate-y-1/2
            bg-white/10 backdrop-blur-lg
            p-6 rounded-lg max-w-md
            border border-white/20
          ">
                <span className="text-sm">18/06/2023</span>

                <h3 className="text-2xl font-bold mt-2">
                  TALK ON COSMIC NEBULA
                </h3>

                <p className="text-gray-200 mt-3 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
                </p>

                <button className="
              mt-4 px-4 py-2
              bg-white text-black rounded
              text-sm font-medium
              hover:bg-gray-200 transition
            ">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Image Section */}

        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center text-white/90">
              WHAT'S IT LIKE WHEN WE HAVE EVENTS
            </h2>

            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm">
              {/* Images Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.id} className="min-w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-96 object-cover"
                    />
                    {/* <div className="p-6">
                      <h3 className="text-xl font-bold">{slide.title}</h3>
                      <p className="text-gray-300 mt-2">{slide.description}</p>
                    </div> */}
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
              >
                →
              </button>

              {/* Dots Navigation */}
              <div className="absolute bottom-2  left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50 hover:bg-white/70'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6 relative overflow-hidden">

          <div className=" max-w-7xl mx-auto  text-white">
            <p className="text-center  text-2xl mb-12 mt-12 ">
              KNOW MORE ABOUT US HERE
            </p>

            <div className="grid md:grid-cols-2 gap-12 items-center">

              {/* logo */}
              <div className="flex ">
                <img
                  src={logo}
                  className="w-64 h-64 object-contain"
                  alt="Dhruva Logo"
                />
              </div>
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-relaxed mb-4">
                  <span className="">
                    WE ARE CLUB THAT LEARN, SHARE AND EXPLORE
                    EVERYTHING RELATED TO OUR UNIVERSE
                  </span>
                </h2>

                {/* description */}
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  DHRUVA IS A COLLEGE CLUB, WE WORK TOWARD INCREASING KNOWLEDGE
                  ABOUT SPACE, COSMOS AND EVERYTHING WE ARE STILL LEARNING ABOUT.
                  WE SHARE AND LEARN TOGETHER.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </Layout>
  );
}




