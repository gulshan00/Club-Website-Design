import { useState } from "react";
import Layout from "../components/layout/Layout";

import podcastImage from "../assets/banner.jpg";
import podcastImage1 from "../assets/banner1.jpg";
import moon from "../assets/moon.png";

const Podcast = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const youtubeVideoId = "4adZ7AguVcw";

  const podcasts = [
    {
      id: "01",
      name: "PODCAST NAME",
      tag: "#HASHTAG",
      img: "https://picsum.photos/seed/podcast1/300/300",
    },
    {
      id: "02",
      name: "PODCAST NAME",
      tag: "#HASHTAG",
      img: "https://picsum.photos/seed/podcast2/300/300",
    },
    {
      id: "03",
      name: "PODCAST NAME",
      tag: "#HASHTAG",
      img: "https://picsum.photos/seed/podcast3/300/300",
    },
    {
      id: "04",
      name: "PODCAST NAME",
      tag: "#HASHTAG",
      img: "https://picsum.photos/seed/podcast4/300/300",
    },
  ];

  return (
    <Layout>
      {/* ===== HEADER WITH MOON ===== */}
      <div className="relative w-full mt-4 px-4">
        <h1
          className="
      grid grid-flow-col auto-cols-max
      items-center justify-center
      w-full
      font-extrabold text-white uppercase
      tracking-[0.25em]
      leading-none
      text-[clamp(2.5rem,6vw,6rem)]
    "
        >
          <span>P</span>

          <span className="flex items-center justify-center">
            <img
              src={moon}
              alt="Moon"
              className="h-[1em] w-[1em] object-contain align-middle"
            />
          </span>

          <span>DCASTS</span>
        </h1>
      </div>


      {/* ===== MAIN PODCAST BANNERS ===== */}
      <section className="text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* PODCAST 1 */}
          <div
            className="relative cursor-pointer group mb-10"
            onClick={() => setIsVideoOpen(true)}
          >
         
            <img
              src={podcastImage}
              alt="Podcast"
              className="w-full rounded-xl border border-gray-700 object-cover 
             h-56 sm:h-64 md:h-72 lg:h-110"
            />


            {/* YouTube Badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-md">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.7-.8-2.1-.9C17.6 2.5 12 2.5 12 2.5h0s-5.6 0-8.6.4c-.4 0-1.3.1-2.1.9-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4c.8.8 1.9.8 2.4.9 1.7.2 7.3.4 7.3.4s5.6 0 8.6-.4c.4 0 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.6 14.6V7.8l6.2 3.4-6.2 3.4z" />
              </svg>
              <span className="text-sm font-medium">
                Available on YouTube
              </span>
            </div>

            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* PODCAST 2 */}
            <div
            className="relative cursor-pointer group mb-10"
            onClick={() => setIsVideoOpen(true)}
          >
         
            <img
              src={podcastImage1}
              alt="Podcast"
              className="w-full rounded-xl border border-gray-700 object-cover 
             h-56 sm:h-64 md:h-72 lg:h-110"
            />


            {/* YouTube Badge */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-md">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.5 6.2s-.2-1.7-.8-2.4c-.8-.8-1.7-.8-2.1-.9C17.6 2.5 12 2.5 12 2.5h0s-5.6 0-8.6.4c-.4 0-1.3.1-2.1.9-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.4c.8.8 1.9.8 2.4.9 1.7.2 7.3.4 7.3.4s5.6 0 8.6-.4c.4 0 1.3-.1 2.1-.9.6-.7.8-2.4.8-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.6 14.6V7.8l6.2 3.4-6.2 3.4z" />
              </svg>
              <span className="text-sm font-medium">
                Available on YouTube
              </span>
            </div>

            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== POPUP VIDEO PLAYER ===== */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-3 sm:px-6">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>

            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* ===== PODCAST LIST ===== */}
        <section className="w-full min-h-screen  text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              PODCAST OF
              <br />
              THE WEEK
            </h1>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-gray-200">
              Lorem ipsum dolor sit amet consectetur. Aliquet scelerisque magna
              nulla euismod sed. Adipiscing placerat quisque eu rhoncus.
            </p>

            <button className="w-fit border border-white px-5 py-2 rounded-xl flex items-center gap-2 hover:bg-white hover:text-black transition">
              Learn More →
            </button>
          </div>
        </div>



        {/* Podcast List */}
        <div className="grid md:grid-cols-2 justify-center gap-10 mt-10">

          {podcasts.map((item) => (
            <div key={item.id} className="flex items-center gap-5">
              <h2 className="text-3xl font-black">{item.id}.</h2>

              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-xl"
              />

              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-300">{item.tag}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </Layout>
  );
};

export default Podcast;
