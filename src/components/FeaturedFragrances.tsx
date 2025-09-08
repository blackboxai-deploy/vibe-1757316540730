"use client";

import { useState } from "react";

interface Fragrance {
  name: string;
  subtitle: string;
  description: string;
  notes: string[];
  image: string;
  color: string;
}

const fragrances: Fragrance[] = [
  {
    name: "Crimson Desire",
    subtitle: "A passionate blend that captivates the heart",
    description: "Ignite your senses with this passionate symphony of red berries, rose petals, and amber. Crimson Desire embodies the fierce beauty of love at first sight, leaving an unforgettable trail of warmth and desire.",
    notes: ["Red Berries", "Rose Petals", "Amber", "Warm Spices"],
    image: "https://placehold.co/400x500?text=Elegant+crimson+red+perfume+bottle+with+golden+accents+and+rose+petals+scattered+around+luxury+display",
    color: "from-red-600 to-red-800"
  },
  {
    name: "Scarlet Whisper",
    subtitle: "Soft yet seductive for an unforgettable presence",
    description: "Experience the delicate power of femininity with this enchanting blend of jasmine, vanilla, and sandalwood. Scarlet Whisper speaks volumes without saying a word, creating an aura of mysterious elegance.",
    notes: ["Jasmine", "Vanilla", "Sandalwood", "White Musk"],
    image: "https://placehold.co/400x500?text=Sophisticated+pearl+white+perfume+bottle+with+silver+details+surrounded+by+jasmine+flowers+and+soft+lighting",
    color: "from-pink-400 to-red-500"
  },
  {
    name: "Ruby Nights",
    subtitle: "Bold accords that evoke the mystery of twilight",
    description: "Embrace the allure of the night with this bold composition of cinnamon, patchouli, and musk. Ruby Nights captures the essence of twilight adventures and midnight secrets, perfect for those who dare to be different.",
    notes: ["Cinnamon", "Patchouli", "Dark Musk", "Amber Wood"],
    image: "https://placehold.co/400x500?text=Deep+burgundy+perfume+bottle+with+black+and+gold+details+on+dark+marble+surface+with+cinnamon+sticks+and+amber",
    color: "from-purple-600 to-red-900"
  }
];

export default function FeaturedFragrances() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="fragrances" className="py-20 bg-gradient-to-br from-cream to-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Featured Fragrances
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Discover your signature scent from our exclusive collection, each crafted to tell a unique story of elegance and passion.
          </p>
        </div>

        {/* Fragrance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {fragrances.map((fragrance, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${fragrance.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={fragrance.image}
                  alt={`${fragrance.name} - ${fragrance.subtitle}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-2">
                  {fragrance.name}
                </h3>
                <p className="text-red-600 font-medium mb-4 italic">
                  {fragrance.subtitle}
                </p>
                <p className="text-charcoal/80 mb-6 leading-relaxed">
                  {fragrance.description}
                </p>

                {/* Notes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">Key Notes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {fragrance.notes.map((note, noteIndex) => (
                      <span
                        key={noteIndex}
                        className="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm font-medium border border-red-200"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-charcoal hover:bg-red-700 text-cream py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform shadow-md hover:shadow-lg">
                  {hoveredIndex === index ? "Experience This Scent" : "Learn More"}
                </button>
              </div>

              {/* Decorative corner element */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-charcoal/80 mb-6">
            Can't decide? Our fragrance specialists are here to guide you to your perfect match.
          </p>
          <button className="bg-red-700 hover:bg-red-600 text-cream px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 transform shadow-xl">
            Book a Personal Consultation
          </button>
        </div>
      </div>
    </section>
  );
}