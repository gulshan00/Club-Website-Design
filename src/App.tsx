// App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentEvents from './components/RecentEvents';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';




function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <RecentEvents />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;





// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import RecentEvents from './components/RecentEvents';
// import AboutSection from './components/AboutSection';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="min-h-screen bg-black text-white font-sans">
//       <Navbar />
//       <main>
//         <Hero />
//         <RecentEvents />
//         <AboutSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;