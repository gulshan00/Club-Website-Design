
import Layout from '../components/layout/Layout';
import heroBg from "../assets/event.jpg";
import moon from "../assets/moon.png";

// event cards
import event1 from "../assets/event2.jpg";
import event2 from "../assets/event1.jpg";

// bottom gallery thumbnails
import g1 from "../assets/event1.jpg";
import g2 from "../assets/event1.jpg";
import g3 from "../assets/event1.jpg";
import g4 from "../assets/event1.jpg";
import g5 from "../assets/event1.jpg";

const Events = () => {
  return (
    <Layout>
      <div className="min-h-screen w-full text-white relative overflow-hidden">
        <section className="relative max-w-7xl mx-auto  flex items-center justify-center px-6 pt-16 ">

          <img
            src={heroBg}
            className="w-full h-[260px] md:h-[520px] object-cover"
            alt="hero"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16">
            <h1 className="text-3xl md:text-5xl font-extrabold">
              OUR STARGAZERS
            </h1>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              SPECTACLE
            </h1>
            <p className="mt-3 tracking-wider">
              A JOURNEY THROUGH THE COSMOS
            </p>
          </div>
        </section>

        {/* =============== RECENT EVENTS TITLE =============== */}
        <div className="text-center mt-10 relative">
          <img src={moon} className="hidden md:block w-48 absolute left-12 -top-8" />
          <h2 className="text-xl md:text-2xl tracking-[0.2em] font-semibold">
            RECENT EVENTS
          </h2>
        </div>

        {/* =============== EVENT CARD #1 =============== */}
        <section className="max-w-7xl mx-auto px-6 py-10">

          <p className="text-right font-bold mb-1">#1</p>

          <div className="relative">

            {/* Wrapper controls the size (unchanged for large) */}
            <div className="w-full sm:w-[680px] sm:h-[500px] h-[380px]">

              <img
                src={event1}
                alt="event 1"
                className="w-full h-full object-cover rounded-2xl opacity-90"
              />

              {/* Overlay */}
              <div
                className="
    absolute
    bg-white/30 backdrop-blur-md text-white
    p-4 rounded-lg

    /* Large screen – keep your design */
    lg:bottom-12
    lg:right-80
    lg:w-auto
    lg:max-w-xs
    lg:left-auto
    lg:translate-x-0

    /* Small screens */
    bottom-4
    left-1/2
    -translate-x-1/2
    w-[92%]
    sm:w-[80%]

    /* Prevent overflow */
    max-h-[55%]
    overflow-y-auto
  "
              >
                <p className="text-xs">18 AUG 2025</p>

                <h3 className="font-bold text-sm">TALK ON DARK MATTER</h3>

                <p className="text-xs mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis
                  interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet
                  consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor
                  bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam
                  pulvinar duis interdum accumsan tempor bibendum amet.
                </p>

                <button className="mt-2 px-3 py-1 text-xs border rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>



        {/* =============== EVENT CARD #2 (reversed on large screens) =============== */}
        <section className="max-w-6xl mx-auto px-6 py-6">

          <p className="font-bold mb-1">#2</p>

          <div className="relative flex lg:justify-end">

            {/* same fixed sizes as previous event card */}
            <div className="w-full lg:w-[680px] h-[260px] sm:h-[360px] lg:h-[500px]">

              {/* image */}
              <img
                src={event2}
                alt="event 2"
                className="w-full h-full object-cover rounded-2xl opacity-90"
              />

              {/* overlay box */}
              <div
                className="
          absolute
          bg-white/30 backdrop-blur-md text-white
          p-4 rounded-lg

          /* LARGE SCREEN — LEFT SIDE */
          lg:bottom-6
          lg:left-32
          lg:max-w-xs
          lg:w-auto
          lg:translate-x-0

          /* SMALL SCREENS — CENTERED BELOW */
          bottom-4
          left-1/2
          -translate-x-1/2
          w-[92%]
          sm:w-[80%]

          max-h-[55%]
          overflow-y-auto
        "
              >
                <p className="text-xs">14 JUL 2025</p>

                <h3 className="font-bold text-sm">ASTRONAUTS WE KNOW</h3>

                <p className="text-xs mt-1 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet. Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar duis interdum accumsan tempor bibendum amet.
                </p>

                <button className="mt-2 px-3 py-1 text-xs border rounded bg-white/60">
                  Learn More
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* =============== BOTTOM GALLERY STRIP =============== */}
        <section className="max-w-6xl mx-auto px-6 py-10 overflow-hidden">
          <div className="flex gap-3 animate-scroll whitespace-nowrap">
            {[g1, g2, g3, g4, g5, g1, g2, g3].map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="h-20 sm:h-24 w-32 sm:w-40 object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Events;