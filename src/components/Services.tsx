"use client";

export default function Services() {
  const services = [
    {
      title: "Personal Fragrance Consultation",
      duration: "60 minutes",
      price: "Complimentary",
      description: "Work one-on-one with our fragrance experts to discover scents that match your personality, lifestyle, and preferences.",
      features: [
        "Scent profiling questionnaire",
        "Guided fragrance sampling",
        "Personalized recommendations",
        "Take-home samples"
      ],
      image: "https://placehold.co/400x300?text=Private+consultation+room+with+elegant+fragrance+testing+station+and+comfortable+seating+in+luxury+boutique"
    },
    {
      title: "Custom Scent Blending",
      duration: "90 minutes",
      price: "Premium Service",
      description: "Create a truly unique fragrance tailored exclusively to you, using premium ingredients and expert blending techniques.",
      features: [
        "Ingredient selection session",
        "Live blending demonstration",
        "Multiple scent iterations",
        "Custom bottle and labeling"
      ],
      image: "https://placehold.co/400x300?text=Perfume+blending+laboratory+with+glass+bottles+essential+oils+and+professional+mixing+equipment"
    },
    {
      title: "Fragrance Wardrobe Curation",
      duration: "120 minutes",
      price: "Premium Service",
      description: "Build a complete collection of fragrances for different occasions, seasons, and moods with expert guidance.",
      features: [
        "Lifestyle analysis",
        "Seasonal scent planning",
        "Occasion-based selection",
        "Storage and care guidance"
      ],
      image: "https://placehold.co/400x300?text=Elegant+perfume+collection+organized+by+season+and+occasion+in+beautiful+display+case+with+labels"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      title: "Expert Guidance",
      description: "Our certified fragrance specialists have years of experience helping clients discover their perfect scents."
    },
    {
      icon: "✨",
      title: "Exclusive Access",
      description: "First access to limited editions and rare fragrances not available in traditional retail stores."
    },
    {
      icon: "🎁",
      title: "Complimentary Services",
      description: "Enjoy gift wrapping, fragrance storage tips, and seasonal scent recommendations at no extra cost."
    },
    {
      icon: "📅",
      title: "Flexible Scheduling",
      description: "Book appointments at your convenience, including evenings and weekends for your comfort."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-stone-50 to-red-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Personalized Services
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Experience luxury perfume shopping like never before with our exclusive personalized services designed 
            to help you discover and create your perfect fragrance story.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-playfair font-bold text-charcoal group-hover:text-red-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="text-sm font-medium text-red-600 bg-red-50 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <p className="text-sm text-gold-600 font-medium mb-4">
                  Duration: {service.duration}
                </p>

                <p className="text-charcoal/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-charcoal/70">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-charcoal hover:bg-red-700 text-cream py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
          <h3 className="text-3xl font-playfair font-bold text-center text-charcoal mb-12">
            Why Choose Our Services?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-charcoal mb-3 group-hover:text-red-700 transition-colors duration-300">
                  {benefit.title}
                </h4>
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center bg-gradient-to-r from-red-700 to-red-800 rounded-3xl p-12 text-cream">
          <h3 className="text-3xl font-playfair font-bold mb-6">
            Ready to Discover Your Perfect Scent?
          </h3>
          <p className="text-xl mb-8 text-cream/90 max-w-2xl mx-auto">
            Book your complimentary consultation today and embark on a personalized fragrance journey 
            that will help you discover scents you'll treasure forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cream text-red-700 hover:bg-cream/90 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 transform shadow-lg">
              Schedule Free Consultation
            </button>
            <button className="border-2 border-cream text-cream hover:bg-cream hover:text-red-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 transform">
              Call: (555) 123-SCENT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}