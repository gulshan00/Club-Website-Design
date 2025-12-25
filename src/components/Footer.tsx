import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
     <footer className="text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            {/* Quote */}
            <h3 className="text-center text-white text-sm md:text-lg font-extrabold  mb-10">
              “ASTRONOMY COMPELS THE SOUL TO LOOK UPWARDS AND LEADS US FROM THIS WORLD TO ANOTHER”
            </h3>

            {/* Center navigation links */}
            <ul className="flex flex-wrap justify-center gap-8 text-sm mb-10">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Experts</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/podcast">Podcasts</Link></li>
              <li><Link to="/">Contacts</Link></li>
            </ul>

            {/* Bottom row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

              {/* Left chat */}
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="opacity-80" />
                <span>Let’s chat</span>
              </div>

              {/* Right email */}
              <div className="flex items-center gap-2">
                <Mail size={16} className="opacity-80" />
                <span>info@logoipsum.com</span>
              </div>
            </div>
          </div>
        </footer>
  );
};

export default Footer;