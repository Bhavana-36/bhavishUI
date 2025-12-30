import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A2A4F] text-[#D6C29A] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand Section */}
          <div>
            <h3 className="text-[#C8A35F] font-serif text-lg mb-4 tracking-wider">
              BHAVISH ELEGANCE
            </h3>
            <p className="text-sm text-[#D6C29A]">
              A destination for timeless fashion and fine jewellery.  
              Crafted with elegance, designed for royalty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C8A35F] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/men" className="hover:text-[#C8A35F] transition-colors">Men's Wear</Link></li>
              <li><Link to="/category/women" className="hover:text-[#C8A35F] transition-colors">Women's Wear</Link></li>
              <li><Link to="/category/kids" className="hover:text-[#C8A35F] transition-colors">Kids Wear</Link></li>
              <li><Link to="/category/jewellery" className="hover:text-[#C8A35F] transition-colors">Jewellery</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-[#C8A35F] mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#C8A35F] cursor-pointer">Shipping Info</li>
              <li className="hover:text-[#C8A35F] cursor-pointer">Returns & Exchange</li>
              <li className="hover:text-[#C8A35F] cursor-pointer">Size Guide</li>
              <li className="hover:text-[#C8A35F] cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C8A35F] mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8A35F]" />
                <span>bhavishelegance@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C8A35F]" />
                <span>+91 63039 40722</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C8A35F]" />
                <span>Ramannapet 1/1, Koritapadu, Guntur</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#C8A35F]/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-[#F3E8D8] hover:bg-[#C8A35F] transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#0A2A4F]" />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-3 py-1 bg-[#F3E8D8] text-[#0A2A4F] rounded">🔒 Secure Payment</span>
              <span className="px-3 py-1 bg-[#F3E8D8] text-[#0A2A4F] rounded">↩️ Easy Returns</span>
              <span className="px-3 py-1 bg-[#F3E8D8] text-[#0A2A4F] rounded">🚚 Fast Delivery</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center text-sm text-[#D6C29A]">
            © 2026 Bhavish Elegance. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
