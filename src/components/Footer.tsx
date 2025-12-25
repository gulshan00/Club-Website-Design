
// import { Mail, MapPin, Phone } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 border-t border-gray-700">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo and description */}
//           <div>
//             <div className="text-3xl font-bold mb-4">
//               <span className="text-blue-400">DHRUVA</span>
//             </div>
//             <p className="text-gray-400 mb-6">
//               Exploring the universe, one star at a time. Join our journey through space and time.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">Explore</h3>
//             <ul className="space-y-3">
//               <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Podcasts</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Explore</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Late Gale</a></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">Contact</h3>
//             <ul className="space-y-3">
//               <li className="flex items-center text-gray-400">
//                 <Mail size={16} className="mr-3" />
//                 <a href="mailto:info@program.com" className="hover:text-blue-400">
//                   info@program.com
//                 </a>
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <Phone size={16} className="mr-3" />
//                 <span>+1 (555) 123-4567</span>
//               </li>
//               <li className="flex items-center text-gray-400">
//                 <MapPin size={16} className="mr-3" />
//                 <span>University Campus</span>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div>
//             <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
//             <p className="text-gray-400 mb-4">Subscribe to our space newsletter</p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-semibold">
//                 Join
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
//           <p>&copy; {new Date().getFullYear()} Dhruva Space Club. All rights reserved. | Designed for the curious minds</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




const Footer = () => {
  return (
    <footer className="bg-black/50 border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                DHRUVA
              </span>
            </h3>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">About us</h4>
            <p className="text-gray-400">Exploring the cosmos together</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Podcasts</h4>
            <p className="text-gray-400">Listen to our space talks</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-400">Explore</h4>
            <p className="text-gray-400">Join our cosmic journey</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">Contact: <span className="text-cyan-400">info@dhruva.com</span></p>
          <p className="text-gray-500 mt-2">© {new Date().getFullYear()} Dhruva Space Club</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;