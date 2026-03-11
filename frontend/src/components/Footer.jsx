import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="max-w-[1600px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">M</span>
              <span className="text-[#FF8C00]">Y</span>
              <span className="text-white">TYLES</span>
            </h3>
            <p className="text-gray-300 mb-4">
              India's largest online tile store. Buy wall & floor tiles online at discounted rates with pan-India shipping.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#FF8C00] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-[#FF8C00] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-[#FF8C00] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-[#FF8C00] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-[#FF8C00] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-[#FF8C00] transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Contact Us</Link></li>
              <li><Link to="/store" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Store Locator</Link></li>
              <li><Link to="/inspiration" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Inspiration Gallery</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Return & Exchange</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-[#FF8C00] transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-[#FF8C00] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-[#FF8C00]" />
                <p className="text-gray-300">
                  123 Tile Street, Bangalore, Karnataka 560001, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-[#FF8C00]" />
                <a href="tel:+91-7625094292" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  +91-7625094292
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-[#FF8C00]" />
                <a href="mailto:info@mytyles.com" className="text-gray-300 hover:text-[#FF8C00] transition-colors">
                  info@mytyles.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
          <p>&copy; 2026 MyTyles. All rights reserved. Designed with care for your home.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;