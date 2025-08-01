import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]" id="footer">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Subhadip Sutradhar</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {["about", "skills", "work", "education"].map((section, index) => (
            <button
              key={index}
              onClick={() => handleScroll(section)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>

        
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "https://www.facebook.com/share/19Mng3HDWH/" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/subhadip-sutradhar-b6aa84253" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/me_subhadip_sutradhar?igsh=MW1zdzdpMnc1NTVlNw==" },
      
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Subhadip Sutradhar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
