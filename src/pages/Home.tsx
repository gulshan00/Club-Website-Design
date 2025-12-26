
import { useState, } from "react";
import recentBg from "../assets/recent.jpg";
import logo from "../assets/logo.png";
import Layout from "../components/layout/Layout";
import moon from "../assets/moon.png"; 


export default function Home() {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "STARGAZING NIGHT",
      description: "Annual night under the stars with telescopes and astronomy discussions."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
      title: "EXPERT LECTURES",
      description: "Renowned scientists sharing insights about cosmic discoveries."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933",
      title: "HANDS-ON WORKSHOPS",
      description: "Building rockets and conducting space experiments."
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      title: "TELESCOPE OBSERVATION",
      description: "Deep space observation with high-power telescopes."
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1447433819943-74a20887a81e",
      title: "GALAXY DISCUSSION",
      description: "Interactive talks on galaxies, black holes, and the universe."
    }
  ];

  const [current, setCurrent] = useState(0);

  const normalize = (index: number) => {
    const len = slides.length;
    return ((index % len) + len) % len;
  };

  const next = () => setCurrent((c) => normalize(c + 1));
  const prev = () => setCurrent((c) => normalize(c - 1));


  return (
    <Layout>
      <div className="min-h-screen w-full text-white relative overflow-hidden">
        {/* Main page content */}
        <div className="relative z-10">
          <section className="relative w-full px-6 pt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

              {/* ================= LEFT CONTENT ================= */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
                  LET&apos;S TRAVEL TO THE EDGE
                  <br />
                  <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    OF SPACE
                  </span>
                </h1>

                <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-lg">
                  We are a group that love to explore and learn new information related
                  to our universe. Join us and explore.
                </p>

                <button className="mt-8 px-8 py-3 border border-white/40 text-white font-semibold rounded-md hover:bg-white hover:text-black transition">
                  DISCOVER MORE
                </button>
              </div>

              {/* ================= RIGHT MOON ================= */}
              <div className="relative hidden md:flex justify-end">
                <img
                  src={moon}
                  alt="Moon"
                  className="
          w-72 h-72
          lg:w-80 lg:h-80
          object-contain
          drop-shadow-[0_0_40px_rgba(255,255,255,0.35)]
        "
                />
              </div>

            </div>

            {/* ================= MOBILE MOON ================= */}
            <div className="mt-12 flex justify-center md:hidden">
              <img
                src={moon}
                alt="Moon"
                className="w-56 h-56 object-contain"
              />
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
          <section className="py-12 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">

              <h2 className="text-center text-white text-xl md:text-3xl font-bold tracking-widest mb-8">
                WHAT’S IT LIKE WHEN WE HAVE EVENTS
              </h2>

              {/* CENTERED CAROUSEL */}
              <div className="relative w-full flex justify-center">
                <div className="relative w-[96%] max-w-6xl h-[180px] sm:h-[220px] md:h-[320px]">

                  {slides.map((slide, index) => {
                    const offset = normalize(index - current);

                    const centeredOffset =
                      offset === 4 ? -1 :
                        offset === 3 ? -2 :
                          offset;

                    const isCenter = centeredOffset === 0;

                    return (
                      <div
                        key={slide.id}
                        className="absolute transition-all duration-500 rounded-2xl sm:rounded-3xl overflow-hidden"
                        style={{
                          left: "50%",
                          transform: `
                      translateX(calc(-50% + ${centeredOffset * 220}px))
                      scale(${isCenter ? 1 : 0.75})
                    `,
                          opacity: isCenter ? 1 : 0.55,
                          zIndex: 50 - Math.abs(centeredOffset),
                        }}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="
                      object-cover rounded-2xl sm:rounded-3xl
                      w-[260px] h-[160px]
                      sm:w-[480px] sm:h-[220px]
                      md:w-[720px] md:h-[340px]
                    "
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* DOTS + ARROWS ROW */}
              <div className="mt-8 flex items-center justify-center space-x-4">

                {/* LEFT ARROW */}
                <button
                  onClick={prev}
                  className="text-white text-xl bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 backdrop-blur"
                >
                  ←
                </button>

                {/* DOTS */}
                <div className="flex space-x-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2.5 h-2.5 rounded-full transition ${i === current ? "bg-purple-400" : "bg-white/40"
                        }`}
                    />
                  ))}
                </div>

                {/* RIGHT ARROW */}
                <button
                  onClick={next}
                  className="text-white text-xl bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 backdrop-blur"
                >
                  →
                </button>
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




