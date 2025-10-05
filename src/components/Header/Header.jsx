import React, { useState, useEffect } from "react";
import { BiMenuAltLeft } from "react-icons/bi";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // 🔒 Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      {/* <h1 data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000" className="text-3xl md:text-4xl lg:text-5xl font-light text-white m-0">
        DCode
      </h1> */}
      {/* <img src="/dsr-logo.webp" /> */}
      <div className=""></div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-12">
        <a data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="text-base tracking-wider transition-colors text-white hover:text-gray-300" href="">
          COMPANY
        </a>
        <a data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="text-base tracking-wider transition-colors text-white hover:text-gray-300" href="">
          FEATURES
        </a>
        <a data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="text-base tracking-wider transition-colors text-white hover:text-gray-300" href="">
          RESOURCES
        </a>
        <a data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="text-base tracking-wider transition-colors text-white hover:text-gray-300" href="">
          DOCS
        </a>
      </nav>

      {/* Desktop Sign In */}
      <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white cursor-pointer">
        SIGNIN
      </button>

      {/* Mobile Menu Toggle Button */}
      <button onClick={toggleMobileMenu} className="md:hidden p-2 z-50">
        <BiMenuAltLeft className="text-white text-3xl" />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobileMenu"
          className="fixed inset-0 p-5 md:hidden z-40 bg-black bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center"
        >
          <nav className="flex flex-col gap-8 items-center">
            <a className="text-3xl tracking-wider transition-colors text-white hover:text-gray-300" href="">
              COMPANY
            </a>
            <a className="text-3xl tracking-wider transition-colors text-white hover:text-gray-300" href="">
              FEATURES
            </a>
            <a className="text-3xl tracking-wider transition-colors text-white hover:text-gray-300" href="">
              RESOURCES
            </a>
            <a className="text-3xl tracking-wider transition-colors text-white hover:text-gray-300" href="">
              DOCS
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
