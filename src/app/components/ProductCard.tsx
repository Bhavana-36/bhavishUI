import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group bg-[#F3E8D8] rounded-lg overflow-hidden border border-[#C8A35F]/40 hover:shadow-xl transition-shadow">
      
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] overflow-hidden bg-[#F3E8D8]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-[#0A2A4F] font-medium group-hover:text-[#C8A35F] transition-colors mb-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-[#0A2A4F]/70 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-[#0A2A4F] font-semibold">
            ₹{product.price.toFixed(2)}
          </span>
          
          <button
            onClick={() => onAddToCart?.(product)}
            className="p-2 bg-[#0A2A4F] text-[#C8A35F] rounded-full hover:bg-[#C8A35F] hover:text-[#0A2A4F] transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
