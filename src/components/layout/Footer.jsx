import { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaPinterestP,
  FaCcVisa,
  FaCcMastercard,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaEnvelope
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-background-50 border-t border-background-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary-600 font-heading">Rent & Repeat</h1>
          <p className="text-text-secondary italic leading-relaxed text-lg">
            Your go-to platform for renting and repeating your favorite outfits.
          </p>
          <p className="text-text-muted leading-relaxed">
            Discover trendy outfits, rent or buy, and enjoy hassle-free fashion at your fingertips.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-text-primary text-lg font-heading mb-4 pb-2 border-b border-accent-200">
              Shop / Explore
            </h3>
            <ul className="space-y-3 text-text-secondary">
              <li><Link to="/browse" className="hover:text-accent-600 transition-colors duration-300 block py-1">Browse Outfits</Link></li>
              <li><Link to="/new-arrivals" className="hover:text-accent-600 transition-colors duration-300 block py-1">New Arrivals</Link></li>
              <li><Link to="/popular-categories" className="hover:text-accent-600 transition-colors duration-300 block py-1">Popular Categories</Link></li>
              <li><Link to="/wishlist" className="hover:text-accent-600 transition-colors duration-300 block py-1">Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text-primary text-lg font-heading mb-4 pb-2 border-b border-accent-200">
              Customer Support
            </h3>
            <ul className="space-y-3 text-text-secondary">
              <li><Link to="/faqs" className="hover:text-accent-600 transition-colors duration-300 block py-1">FAQs</Link></li>
              <li><Link to="/returns" className="hover:text-accent-600 transition-colors duration-300 block py-1">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-accent-600 transition-colors duration-300 block py-1">Contact Us</Link></li>
              <li><Link to="/shipping-info" className="hover:text-accent-600 transition-colors duration-300 block py-1">Shipping Info</Link></li>
            </ul>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-text-primary text-lg font-heading mb-4 pb-2 border-b border-accent-200">
              Company
            </h3>
            <ul className="space-y-3 text-text-secondary">
              <li><Link to="/about" className="hover:text-accent-600 transition-colors duration-300 block py-1">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-accent-600 transition-colors duration-300 block py-1">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-accent-600 transition-colors duration-300 block py-1">Blog</Link></li>
              <li><Link to="/terms" className="hover:text-accent-600 transition-colors duration-300 block py-1">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-accent-600 transition-colors duration-300 block py-1">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 font-heading">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-background-200 p-3 rounded-lg text-text-secondary hover:bg-accent hover:text-primary-900 transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="bg-background-200 p-3 rounded-lg text-text-secondary hover:bg-accent hover:text-primary-900 transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="bg-background-200 p-3 rounded-lg text-text-secondary hover:bg-accent hover:text-primary-900 transition-all duration-300 transform hover:-translate-y-1">
                <FaTiktok size={18} />
              </a>
              <a href="#" className="bg-background-200 p-3 rounded-lg text-text-secondary hover:bg-accent hover:text-primary-900 transition-all duration-300 transform hover:-translate-y-1">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="bg-background-200 p-3 rounded-lg text-text-secondary hover:bg-accent hover:text-primary-900 transition-all duration-300 transform hover:-translate-y-1">
                <FaPinterestP size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter & Contact */}
        <div className="space-y-6">
          <div className="premium-card bg-white border-t-4 border-accent p-6 rounded-xl">
            <h3 className="font-semibold text-text-primary text-lg font-heading mb-3">Stay Updated</h3>
            <p className="text-text-muted text-sm mb-4">Subscribe for latest arrivals and exclusive discounts!</p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-background-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-background-50"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-accent to-brass text-primary-900 font-semibold rounded-lg hover:from-accent-600 hover:to-accent-800 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-text-secondary">
            <p className="flex items-center gap-3 text-sm">
              <FaEnvelope className="text-accent flex-shrink-0" /> 
              support@rentrepeat.com
            </p>
            <p className="flex items-center gap-3 text-sm">
              <FaMobileAlt className="text-accent flex-shrink-0" /> 
              +256 700 000 000
            </p>
            <p className="flex items-center gap-3 text-sm">
              <FaMapMarkerAlt className="text-accent flex-shrink-0" /> 
              Kampala, Uganda
            </p>
          </div>

          {/* Payments & Security */}
          <div className="pt-4 border-t border-background-200">
            <p className="text-text-muted text-sm mb-3">We Accept</p>
            <div className="flex gap-3 mb-2">
              <div className="bg-background-100 p-2 rounded-lg">
                <FaCcVisa className="text-charcoal" size={20} />
              </div>
              <div className="bg-background-100 p-2 rounded-lg">
                <FaCcMastercard className="text-charcoal" size={20} />
              </div>
              <div className="bg-background-100 p-2 rounded-lg">
                <FaMobileAlt className="text-charcoal" size={20} />
              </div>
            </div>
            <p className="text-text-muted text-xs flex items-center gap-1">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              100% Secure Payments
            </p>
          </div>
        </div>
      </div>

      {/* Legal / Copyright */}
      <div className="bg-background-100 border-t border-background-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-muted text-sm">
            © 2025 Rent & Repeat. All rights reserved. | 
            <span className="text-accent mx-2">•</span>
            Sustainable fashion for a better tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
}