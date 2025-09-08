export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed">
            Located in the heart of the city, Red invites you to explore a world where scent and style unite. 
            Whether shopping for yourself or searching for the perfect gift, our welcoming team is here to make 
            your experience unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Store Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-red-400">
                Store Location
              </h3>
              
              <div className="bg-stone-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-900/20">
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream mb-2">Address</h4>
                      <p className="text-cream/80 leading-relaxed">
                        123 Elegance Avenue<br />
                        Luxury District<br />
                        Metropolitan City, MC 12345
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream mb-2">Phone</h4>
                      <p className="text-cream/80">(555) 123-SCENT</p>
                      <p className="text-cream/80">(555) 123-7236</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1">
                      <svg fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-cream mb-2">Email</h4>
                      <p className="text-cream/80">hello@redperfume.com</p>
                      <p className="text-cream/80">consultations@redperfume.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-2xl font-playfair font-bold mb-6 text-red-400">
                Store Hours
              </h3>
              
              <div className="bg-stone-900/50 backdrop-blur-sm rounded-2xl p-8 border border-red-900/20">
                <div className="space-y-4">
                  {[
                    { days: "Monday - Wednesday", hours: "10:00 AM - 7:00 PM" },
                    { days: "Thursday - Friday", hours: "10:00 AM - 8:00 PM" },
                    { days: "Saturday", hours: "9:00 AM - 8:00 PM" },
                    { days: "Sunday", hours: "11:00 AM - 6:00 PM" }
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-red-900/20 last:border-b-0">
                      <span className="text-cream/90 font-medium">{schedule.days}</span>
                      <span className="text-gold-400">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-900/20 rounded-lg">
                  <p className="text-cream/80 text-sm">
                    <span className="font-semibold text-gold-400">Private consultations available:</span> Evenings and weekends by appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Image and CTA */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://placehold.co/600x500?text=Elegant+Red+perfume+boutique+storefront+with+warm+lighting+sophisticated+window+display+and+welcoming+entrance"
                alt="Elegant Red perfume boutique storefront with warm lighting, sophisticated window display and welcoming entrance"
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6">
                <h4 className="text-xl font-playfair font-bold text-cream mb-2">Welcome to Red</h4>
                <p className="text-cream/90">Where every fragrance tells a story</p>
              </div>
            </div>

            {/* Special Services */}
            <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 backdrop-blur-sm rounded-2xl p-8 border border-red-800/50">
              <h4 className="text-xl font-playfair font-bold mb-4 text-red-400">
                Special Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Complimentary gift wrapping",
                  "Personal fragrance consultations",
                  "Custom scent creation",
                  "Fragrance wardrobe curation",
                  "VIP shopping appointments",
                  "Seasonal fragrance recommendations"
                ].map((service, index) => (
                  <li key={index} className="flex items-center text-cream/80">
                    <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA */}
            <div className="bg-white rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-playfair font-bold text-charcoal mb-4">
                Ready to Visit?
              </h4>
              <p className="text-charcoal/80 mb-6 leading-relaxed">
                Experience the Red difference in person. Book your appointment or visit us during store hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-700 hover:bg-red-600 text-cream px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform flex-1">
                  Book Appointment
                </button>
                <button className="border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-cream px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 transform flex-1">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}