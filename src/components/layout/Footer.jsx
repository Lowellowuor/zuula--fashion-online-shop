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
    <footer className="bg-background border-t border-background-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand / About */}
        <div className="space-y-4">
          <h1 className="text-2xl font-heading font-bold text-primary-700">
            Rent & Repeat
          </h1>
          <p className="text-text-secondary text-sm italic">
            Your go-to platform for renting and repeating your favorite outfits.
          </p>
          <p className="text-text-muted text-sm">
            Discover trendy outfits, rent or buy, and enjoy hassle-free fashion at your fingertips.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-heading font-semibold text-primary-600 text-lg mb-4 border-b pb-2 border-accent">
            Shop / Explore
          </h3>
          <ul className="space-y-2 text-text-secondary text-sm">
            <li><Link to="/browse" className="hover:text-accent transition">Browse Outfits</Link></li>
            <li><Link to="/new-arrivals" className="hover:text-accent transition">New Arrivals</Link></li>
            <li><Link to="/popular-categories" className="hover:text-accent transition">Popular Categories</Link></li>
            <li><Link to="/wishlist" className="hover:text-accent transition">Wishlist</Link></li>
          </ul>
        </div>

        {/* Support & Company */}
        <div className="space-y-8">
          <div>
            <h3 className="font-heading font-semibold text-primary-600 text-lg mb-4 border-b pb-2 border-accent">
              Customer Support
            </h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><Link to="/faqs" className="hover:text-accent transition">FAQs</Link></li>
              <li><Link to="/returns" className="hover:text-accent transition">Returns & Refunds</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition">Contact Us</Link></li>
              <li><Link to="/shipping-info" className="hover:text-accent transition">Shipping Info</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-primary-600 text-lg mb-4 border-b pb-2 border-accent">
              Company
            </h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li><Link to="/about" className="hover:text-accent transition">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition">Blog</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-accent transition">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Contact */}
        <div className="space-y-6">
          <div className="premium-card">
            <h3 className="font-heading font-semibold text-primary-700 text-lg mb-3">Stay Updated</h3>
            <p className="text-text-muted text-sm mb-4">
              Subscribe for latest arrivals and exclusive discounts!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-4 py-3 border border-background-300 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-sm bg-background-50"
                required
              />
              <button
                type="submit"
                className="btn-gold w-full"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-sm text-text-secondary">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-accent" /> support@rentrepeat.com
            </p>
            <p className="flex items-center gap-2">
              <FaMobileAlt className="text-accent" /> +256 700 000 000
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-accent" /> Kampala, Uganda
            </p>
          </div>

          {/* Payments */}
          <div className="pt-4 border-t border-background-200">
            <p className="text-text-muted text-xs mb-2">We Accept</p>
            <div className="flex gap-3">
              <FaCcVisa size={28} className="text-charcoal" />
              <FaCcMastercard size={28} className="text-charcoal" />
              <FaMobileAlt size={24} className="text-charcoal" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-background-100 border-t border-background-200 py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm text-center md:text-left">
            © 2025 Rent & Repeat. All rights reserved. | <span className="text-accent">Sustainable fashion for a better tomorrow</span>
          </p>
          <div className="flex space-x-3">
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:bg-accent hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:bg-accent hover:text-white transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:bg-accent hover:text-white transition">
              <FaTiktok size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:bg-accent hover:text-white transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white shadow hover:bg-accent hover:text-white transition">
              <FaPinterestP size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
// 