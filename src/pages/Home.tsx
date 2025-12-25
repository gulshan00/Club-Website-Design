import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-white bg-[url('https://images.unsplash.com/photo-1447433819943-74a20887a81e')] bg-cover bg-fixed bg-center">

      <Navbar />

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            LET’S TRAVEL TO THE EDGE OF SPACE
          </h1>

          <p className="mt-6 text-gray-300">
            We are a group that love to explore and learn new information related to our universe.
            Join us and explore.
          </p>

          <button className="mt-6 px-6 py-3 border rounded hover:bg-white hover:text-black transition">
            DISCOVER MORE
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="https://static.vecteezy.com/system/resources/previews/035/304/998/non_2x/full-moon-isolated-on-transparent-background-realistic-photo-with-high-detailed-clipping-path-free-png.png"
            alt="moon"
            className="w-72 md:w-96 drop-shadow-2xl"
          />
        </div>
      </section>

      {/* RECENT EVENTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-xl font-bold mb-4">RECENT EVENTS</h2>

        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3"
            className="w-full object-cover"
          />

          <div className="absolute top-1/2 right-10 bg-white/20 backdrop-blur p-6 rounded-xl w-80">
            <p className="text-sm">18/06/2023</p>
            <h3 className="text-2xl font-bold">TALK ON COSMIC NEBULA</h3>

            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur. Augue duis etiam pulvinar
              duis interdum accumsan tempor bibendum amet.
            </p>

            <button className="mt-4 px-3 py-2 bg-white text-black rounded">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* SLIDER STYLE SECTION */}
      <section className="max-w-7xl mx-auto px-6 text-center pb-24">
        <h2 className="tracking-widest">
          WHAT’S IT LIKE WHEN WE HAVE EVENTS
        </h2>

        <div className="mt-10 flex justify-center">
          <img
            className="rounded-2xl w-full md:w-3/4"
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          />
        </div>
      </section>

      {/* ABOUT CLUB */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center pb-28">

        <img
          src="https://static.vecteezy.com/system/resources/previews/009/305/756/non_2x/astronaut-logo-free-vector.jpg"
          className="w-64 mx-auto"
        />

        <div>
          <h2 className="text-3xl font-bold mb-3">
            WE ARE CLUB THAT LEARN, SHARE AND EXPLORE EVERYTHING
            RELATED TO OUR UNIVERSE
          </h2>

          <p className="text-gray-300 mt-3">
            DHRUVA is a college club. We work toward increasing knowledge about
            space, cosmos and everything we are still learning about.
          </p>
        </div>
      </section>

      {/* FOOTER QUOTE */}
      <footer className="text-center pb-10 text-sm tracking-wider">
        “ASTRONOMY COMPELS THE SOUL TO LOOK UPWARDS AND LEADS US FROM THIS WORLD TO ANOTHER”
      </footer>
    </div>
  );
}
