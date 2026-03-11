import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Phone, Menu, X, Calculator, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navItems = [
    'All Tiles',
    'Floor Tiles',
    'Wall Tiles',
    'Bathroom Tiles',
    'Kitchen Tiles',
    'Living Room Tiles',
    'Outdoor Tiles',
    'Parking Tiles',
    'Ceramic Tiles',
    'Vitrified Tiles',
    'Other Tile Areas',
    'Stone and Brick Cladding',
    'Tile Accessories',
    'Tile Brands'
  ];

  return (
    <header className="w-full">
      {/* Top Header */}
      <div className="bg-[#1a2332] text-white py-3 px-4">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-[#FF8C00]">
                <span className="text-white">M</span>
                <span className="text-[#FF8C00]">Y</span>
                <span className="text-white">TYLES</span>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6 text-sm">
            <Link to="/blog" className="hover:text-[#FF8C00] transition-colors">Blog</Link>
            <Link to="/inspiration" className="hover:text-[#FF8C00] transition-colors">Inspiration Gallery</Link>
            <Link to="/watch" className="hover:text-[#FF8C00] transition-colors">Watch & Choose</Link>
            <a href="tel:+91-7625094292" className="flex items-center gap-2 hover:text-[#FF8C00] transition-colors">
              <Phone size={16} />
              +91-7625094292
            </a>
            <Link to="/calculator" className="flex items-center gap-2 hover:text-[#FF8C00] transition-colors">
              <Calculator size={16} />
              Calculator
            </Link>
            <Link to="/store" className="hover:text-[#FF8C00] transition-colors">Store</Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 w-64"
              />
              <Button variant="ghost" size="sm" className="hover:bg-transparent">
                <Search size={18} className="text-gray-500" />
              </Button>
            </div>

            <Button className="bg-[#FF8C00] hover:bg-[#FF7700] text-white hidden lg:inline-flex">
              <User size={18} className="mr-2" />
              Sign In
            </Button>

            <button className="flex items-center gap-2 hover:text-[#FF8C00] transition-colors">
              <Heart size={20} />
              <span className="hidden lg:inline text-sm">Wishlist</span>
            </button>

            <button className="flex items-center gap-2 hover:text-[#FF8C00] transition-colors">
              <ShoppingCart size={20} />
              <span className="hidden lg:inline text-sm">Cart</span>
            </button>

            <button
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#263447] text-white py-3 px-4 overflow-x-auto">
        <div className="max-w-[1600px] mx-auto">
          <div className="hidden lg:flex items-center gap-6 text-sm whitespace-nowrap">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-[#FF8C00] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1a2332] text-white p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center bg-white rounded-md overflow-hidden mb-4">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
              <Button variant="ghost" size="sm">
                <Search size={18} className="text-gray-500" />
              </Button>
            </div>
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-[#FF8C00] transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;