export default function About() {
  const features = [
    {
      title: "Exclusive Collections",
      description: "Handpicked perfumes from world-renowned brands and niche artisans, curated for discerning fragrance enthusiasts.",
      image: "https://placehold.co/300x200?text=Luxury+perfume+collection+display+with+elegant+bottles+on+marble+shelves+with+soft+ambient+lighting"
    },
    {
      title: "Personalized Consultations",
      description: "Our fragrance specialists guide you through a sensory journey to discover the perfect scent tailored to your unique style.",
      image: "https://placehold.co/300x200?text=Professional+perfume+consultant+helping+customer+in+elegant+boutique+setting+with+fragrance+samples"
    },
    {
      title: "Luxurious Experience",
      description: "Immerse yourself in an elegant ambiance designed to inspire and delight, where every detail enhances your fragrance discovery.",
      image: "https://placehold.co/300x200?text=Sophisticated+perfume+boutique+interior+with+warm+lighting+comfortable+seating+and+elegant+displays"
    },
    {
      title: "Sustainable Practices",
      description: "We prioritize eco-friendly packaging and cruelty-free ingredients, ensuring beauty that respects both you and the environment.",
      image: "https://placehold.co/300x200?text=Eco+friendly+perfume+packaging+made+from+recycled+materials+with+natural+botanical+elements"
    }
  ];

  return (
    <section id="about" className="py-20 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Discover Your Signature Scent
          </h2>
          <p className="text-xl text-cream/90 max-w-4xl mx-auto leading-relaxed">
            At Red, we believe perfume is more than just a fragrance — it's an expression of your unique personality. 
            Whether you seek the fiery warmth of spicy notes, the delicate charm of floral bouquets, or the mysterious 
            depth of woody aromas, our expert perfumers have crafted a diverse range to suit every mood and occasion.
          </p>
        </div>

        {/* Brand Story */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-6 text-red-400">
                Why Choose Red?
              </h3>
              <p className="text-lg text-cream/90 mb-6 leading-relaxed">
                Our passion for perfume goes beyond mere commerce. We are storytellers, curating scents that speak 
                to the soul and awaken the senses. Each fragrance in our collection has been carefully selected for 
                its quality, uniqueness, and ability to create lasting memories.
              </p>
              <p className="text-lg text-cream/80 leading-relaxed">
                From the moment you step into our boutique, you'll experience the difference that comes from genuine 
                expertise and an unwavering commitment to excellence. We don't just sell perfume; we help you discover 
                the scent that becomes part of your identity.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://placehold.co/600x400?text=Elegant+perfume+artisan+carefully+crafting+custom+fragrance+in+sophisticated+laboratory+with+botanical+ingredients"
                alt="Elegant perfume artisan carefully crafting custom fragrance in sophisticated laboratory with botanical ingredients"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-stone-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-stone-900/70 transition-all duration-500 hover:transform hover:-translate-y-1 border border-red-900/20 hover:border-red-600/50"
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h4 className="text-xl font-playfair font-bold mb-4 text-gold-400 group-hover:text-gold-300 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-cream/80 leading-relaxed group-hover:text-cream/90 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 backdrop-blur-sm rounded-3xl p-12 border border-red-800/50">
            <h3 className="text-3xl font-playfair font-bold mb-6 text-red-400">
              Ready to Begin Your Fragrance Journey?
            </h3>
            <p className="text-xl text-cream/90 mb-8 max-w-2xl mx-auto">
              Visit our boutique and let our fragrance specialists guide you to a scent that perfectly captures your essence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-700 hover:bg-red-600 text-cream px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 transform shadow-xl">
                Schedule Consultation
              </button>
              <button className="border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-charcoal px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 transform">
                View Location
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}