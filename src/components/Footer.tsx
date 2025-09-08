export default function Footer() {
  return (
    <footer className="bg-black text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-red-400 mb-4">
              Red
            </h3>
            <p className="text-cream/80 mb-6 leading-relaxed max-w-md">
              Where passion meets perfume. Discover your signature scent in our boutique collection of exclusive fragrances, 
              crafted to tell your unique story of elegance and sophistication.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-red-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-red-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348S9.746 16.988 8.449 16.988zM12.017 7.729c-2.309 0-4.182 1.873-4.182 4.182s1.873 4.182 4.182 4.182s4.182-1.873 4.182-4.182S14.326 7.729 12.017 7.729z"/>
                </svg>
              </button>
              <button className="w-10 h-10 bg-red-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              {[
                "Featured Fragrances",
                "About Red",
                "Services",
                "Consultations",
                "Gift Cards",
                "Store Policies"
              ].map((link, index) => (
                <li key={index}>
                  <button className="text-cream/80 hover:text-red-400 transition-colors duration-300 text-left">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Contact</h4>
            <div className="space-y-3 text-cream/80">
              <p>123 Elegance Avenue<br />Metropolitan City, MC 12345</p>
              <p>Phone: (555) 123-SCENT</p>
              <p>Email: hello@redperfume.com</p>
              <div className="mt-4">
                <h5 className="font-semibold text-cream mb-2">Store Hours:</h5>
                <p className="text-sm">Mon-Wed: 10AM-7PM<br />Thu-Fri: 10AM-8PM<br />Sat: 9AM-8PM<br />Sun: 11AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-red-900/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-cream/60 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Red Perfume Boutique. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <button className="text-cream/60 hover:text-red-400 transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-cream/60 hover:text-red-400 transition-colors duration-300">
                Terms of Service
              </button>
              <button className="text-cream/60 hover:text-red-400 transition-colors duration-300">
                Shipping & Returns
              </button>
            </div>
          </div>
          
          {/* Brand Tagline */}
          <div className="text-center mt-8">
            <p className="text-red-400 font-playfair italic text-lg">
              "Where Passion Meets Perfume"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}