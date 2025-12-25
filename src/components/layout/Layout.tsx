import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  bright?: boolean;
};

const Layout = ({ children }: { children: ReactNode }) => {
  const [stars] = useState<Star[]>(() => {
    const small = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.6 + 0.2,
      bright: false,
    }));

    const bright = Array.from({ length: 30 }).map((_, i) => ({
      id: 1000 + i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      bright: true,
    }));

    return [...small, ...bright];
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-blue-950">
      {/* Stars Background */}
      <div className="fixed inset-0 z-0 bg-[#0A0A14]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A14] via-[#0C0C1A] to-[#0A0A14]" />
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: star.bright
                ? `0 0 ${star.size * 3}px rgba(255,255,255,${star.opacity})`
                : "none",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
