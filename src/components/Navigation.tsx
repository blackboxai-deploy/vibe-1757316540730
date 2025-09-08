"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-charcoal/95 backdrop-blur-md shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-playfair font-bold text-red-700 hover:text-red-600 transition-colors duration-300"
            >
              Red
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-cream hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("fragrances")}
                className="text-cream hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                Fragrances
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-cream hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-cream hover:text-gold-400 px-3 py-2 text-sm font-medium transition-colors duration-300 hover:scale-105 transform"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-red-700 hover:bg-red-600 text-cream px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl"
              >
                Visit Us
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-cream hover:text-gold-400 transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}