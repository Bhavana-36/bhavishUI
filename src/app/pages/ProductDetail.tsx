import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { ShoppingCart, Minus, Plus, Heart } from 'lucide-react';

interface ProductDetailProps {
  onAddToCart: (product: any, quantity: number, size?: string) => void;
}

export function ProductDetail({ onAddToCart }: ProductDetailProps) {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) {
    return (
      <div className="min-h-screen bg-[var(--brand-beige)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-[var(--brand-navy)]">Product not found</h2>
          <Link to="/" className="text-[var(--brand-navy)] hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }
    onAddToCart(product, quantity, selectedSize);
  };

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-[var(--brand-navy)]">
          <Link to="/" className="hover:text-[var(--brand-navy)]">Home</Link>
          <span className="mx-2">/</span>
          <Link
            to={`/category/${product.category}`}
            className="hover:text-[var(--brand-navy)] capitalize"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--brand-navy)]">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Product Image */}
          <div className="bg-[var(--brand-beige)] rounded-lg overflow-hidden border border-[var(--brand-navy)]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="bg-[var(--brand-beige)] p-8 rounded-lg border border-[var(--brand-navy)]">
            <h1 className="text-[var(--brand-navy)] mb-4">{product.name}</h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl text-[var(--brand-navy)]">
                ${product.price.toFixed(2)}
              </span>
              <span className="px-3 py-1 rounded text-sm
  bg-green-100
  text-green-700">
  In Stock
</span>
            </div>

            <p className="text-[var(--brand-navy)] mb-6">
              {product.description}
            </p>

            {/* Material */}
            {product.material && (
              <div className="mb-6">
                <h3 className="mb-2 text-[var(--brand-navy)]">Material</h3>
                <p className="text-[var(--brand-navy)]">{product.material}</p>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && (
              <div className="mb-6">
                <h3 className="mb-3 text-[var(--brand-navy)]">Select Size</h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded transition-colors ${
                        selectedSize === size
                          ? 'border-[var(--brand-navy)] bg-[var(--brand-navy)] text-[var(--brand-beige)]'
                          : 'border-[var(--brand-muted)] text-[var(--brand-navy)] hover:border-[var(--brand-navy)]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="mb-8">
              <h3 className="mb-3 text-[var(--brand-navy)]">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-[var(--brand-muted)] rounded hover:bg-[var(--brand-muted)]"
                >
                  <Minus className="w-5 h-5 text-[var(--brand-navy)]" />
                </button>
                <span className="w-12 text-center text-[var(--brand-navy)]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-[var(--brand-muted)] rounded hover:bg-[var(--brand-muted)]"
                >
                  <Plus className="w-5 h-5 text-[var(--brand-navy)]" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2
                  bg-[var(--brand-navy)]
                  text-[var(--brand-beige)]
                  py-3 rounded
                  hover:bg-[var(--brand-gold)]
                  transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              <button
                className="p-3 border border-[var(--brand-muted)] rounded
                  hover:bg-[var(--brand-muted)]"
              >
                <Heart className="w-6 h-6 text-[var(--brand-navy)]" />
              </button>
            </div>

            <Link
              to="/checkout"
              className="block w-full text-center
                bg-transparent
                border-2 border-[var(--brand-navy)]
                text-[var(--brand-navy)]
                py-3 rounded
                hover:bg-[var(--brand-muted)]
                transition-colors"
            >
              Buy Now
            </Link>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-[var(--brand-muted)] space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-[var(--brand-navy)]">SKU:</span>
                <span className="text-[var(--brand-navy)]">
                  {product.id.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[var(--brand-navy)]">Category:</span>
                <Link
                  to={`/category/${product.category}`}
                  className="text-[var(--brand-navy)] hover:underline capitalize"
                >
                  {product.category}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
