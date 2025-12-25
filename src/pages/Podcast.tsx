import Layout from "../components/layout/Layout";
import { useState } from "react";
import podcastImage from "../assets/banner.jpg";
import podcastImage1 from "../assets/banner1.jpg";

const Podcast = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const youtubeVideoId = "4adZ7AguVcw";

  return (
    <Layout>
      {/* Header */}
      <div className="relative flex items-center justify-center pt-16 md:pt-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wider text-center">
          PODCASTS
        </h1>
      </div>

      {/* Main Section */}
      <section className="text-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Podcast 1 — FULL WIDTH */}
          <div
            className="relative cursor-pointer group mb-10"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src={podcastImage}
              alt="Podcast"
              className="w-full rounded-xl border border-gray-700 object-cover aspect-video"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Podcast 2 — FULL WIDTH SECOND ROW */}
          <div
            className="relative cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
          >
            <img
              src={podcastImage1}
              alt="Podcast 2"
              className="w-full rounded-xl border border-gray-700 object-cover aspect-video"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Popup Player */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-3 sm:px-6">
          <div className="relative w-full max-w-5xl">

            {/* Close button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-10 right-0 text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>

            {/* Responsive 16:9 YouTube */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Podcast;
