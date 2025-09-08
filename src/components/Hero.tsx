"use client";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-red-900/30 to-black"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://placehold.co/1920x1080?text=Elegant+luxury+perfume+bottles+arranged+on+marble+surface+with+soft+golden+lighting+and+red+roses"
          alt="Elegant luxury perfume bottles arranged on marble surface with soft golden lighting and red roses"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-cream mb-6 leading-tight">
          <span className="block text-red-400">Red</span>
          <span className="block text-2xl md:text-3xl lg:text-4xl font-inter font-light text-gold-300 mt-4">
            The Essence of Passion and Elegance
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cream/90 mb-8 font-light leading-relaxed max-w-3xl mx-auto">
          Step into Red, where every fragrance tells a story of boldness, sophistication, and timeless allure.
        </p>

        <p className="text-lg text-cream/80 mb-12 max-w-2xl mx-auto leading-relaxed">
          Our boutique perfume store is dedicated to curating an exclusive collection of scents that ignite your senses and leave a lasting impression.
        </p>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => scrollToSection("fragrances")}
            className="bg-red-700 hover:bg-red-600 text-cream px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 transform shadow-xl hover:shadow-2xl border border-red-600"
          >
            Discover Fragrances
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 transform shadow-xl"
          >
            Book Consultation
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("fragrances")}
            className="text-cream/60 hover:text-cream transition-colors duration-300"
          >
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-20 bg-gradient-to-b from-red-400 to-transparent opacity-30 transform -rotate-12"></div>
      <div className="absolute bottom-20 right-10 w-2 h-20 bg-gradient-to-t from-gold-400 to-transparent opacity-30 transform rotate-12"></div>
    </section>
  );
}