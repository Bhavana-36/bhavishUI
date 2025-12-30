import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';

interface NavbarProps {
  cartItemsCount?: number;
}

export function Navbar({ cartItemsCount = 0 }: NavbarProps) {
  return (
    <nav className="bg-[#F3E8D8] border-b border-[#C8A35F] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border-2 border-[#C8A35F] flex items-center justify-center bg-[#0A2A4F]">
              <span className="text-[#C8A35F] font-serif text-xl">B</span>
            </div>

            <h1 className="text-lg font-serif tracking-[0.3em] text-[#0A2A4F] uppercase">
              Bhavish Elegance
            </h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {["men", "women", "kids", "jewellery"].map((item) => (
              <Link
                key={item}
                to={`/category/${item}`}
                className="text-[#0A2A4F] hover:text-[#C8A35F] transition-colors font-medium"
              >
                {item === "men" && "Men's Wear"}
                {item === "women" && "Women's Wear"}
                {item === "kids" && "Kids Wear"}
                {item === "jewellery" && "Jewellery"}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[#0A2A4F]/10 rounded-full transition-colors">
              <Search className="w-5 h-5 text-[#0A2A4F]" />
            </button>

            <Link to="/cart" className="p-2 hover:bg-[#0A2A4F]/10 rounded-full transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-[#0A2A4F]" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C8A35F] text-[#0A2A4F] text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {cartItemsCount}
                </span>
              )}
            </Link>

            <Link to="/admin/login" className="p-2 hover:bg-[#0A2A4F]/10 rounded-full transition-colors">
              <User className="w-5 h-5 text-[#0A2A4F]" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-[#C8A35F] bg-[#F3E8D8]">
        <div className="px-4 py-3 space-y-2">
          {["men", "women", "kids", "jewellery"].map((item) => (
            <Link
              key={item}
              to={`/category/${item}`}
              className="block py-2 text-[#0A2A4F] hover:text-[#C8A35F] font-medium"
            >
              {item === "men" && "Men's Wear"}
              {item === "women" && "Women's Wear"}
              {item === "kids" && "Kids Wear"}
              {item === "jewellery" && "Jewellery"}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
