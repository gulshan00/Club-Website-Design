// // App.jsx
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import RecentEvents from './components/RecentEvents';
// import AboutSection from './components/AboutSection';
// import Footer from './components/Footer';




// function App() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       <Navbar />
//       <Hero />
//       <RecentEvents />
//       <AboutSection />
//       <Footer />
//     </div>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Events from './pages/Events';
import Podcast from './pages/Podcast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </Router>
  );
}

export default App;