import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { SlidersHorizontal } from 'lucide-react';

interface CategoryPageProps {
  onAddToCart: (product: any) => void;
}

export function CategoryPage({ onAddToCart }: CategoryPageProps) {
  const { category } = useParams<{ category: string }>();
  const [priceRange, setPriceRange] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((p) => {
    if (category && p.category !== category) return false;

    if (priceRange === 'under50' && p.price >= 50) return false;
    if (priceRange === '50-100' && (p.price < 50 || p.price > 100)) return false;
    if (priceRange === 'over100' && p.price <= 100) return false;

    return true;
  });

  const categoryTitles: Record<string, string> = {
    men: "Men's Wear",
    women: "Women's Wear",
    kids: "Kids Wear",
    jewellery: "Jewellery"
  };

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2 text-[var(--brand-navy)]">
              {category ? categoryTitles[category] : 'All Products'}
            </h1>
            <p className="text-[var(--brand-navy)]">
              {filteredProducts.length} products
            </p>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2
              bg-[var(--brand-beige)]
              border border-[var(--brand-muted)]
              text-[var(--brand-navy)]
              rounded
              hover:bg-[var(--brand-muted)]"
          >
            <SlidersHorizontal className="w-5 h-5" />
            Filters
          </button>
        </div>

        <div className="flex gap-8">

          {/* Filters Sidebar */}
          <aside
            className={`${
              showFilters ? 'block' : 'hidden'
            } md:block w-full md:w-64
            bg-[var(--brand-beige)]
            p-6 rounded-lg
            border border-[var(--brand-muted)]
            h-fit`}
          >
            <h3 className="mb-4 text-[var(--brand-navy)]">Filters</h3>

            {/* Price Filter */}
            <div className="mb-6">
              <h4 className="mb-3 text-[var(--brand-navy)]">Price Range</h4>
              <div className="space-y-2">
                {[
                  { label: 'All Prices', value: 'all' },
                  { label: 'Under $50', value: 'under50' },
                  { label: '$50 - $100', value: '50-100' },
                  { label: 'Over $100', value: 'over100' }
                ].map(({ label, value }) => (
                  <label key={value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      value={value}
                      checked={priceRange === value}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-4 h-4 accent-[var(--brand-gold)]"
                    />
                    <span className="text-[var(--brand-navy)]">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Size Filter */}
            {category && category !== 'jewellery' && (
              <div className="mb-6">
                <h4 className="mb-3 text-[var(--brand-navy)]">Size</h4>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      className="px-3 py-1
                        border border-[var(--brand-muted)]
                        text-[var(--brand-navy)]
                        rounded
                        hover:border-[var(--brand-gold)]
                        hover:bg-[var(--brand-navy)]
                        hover:text-[var(--brand-beige)]
                        transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Material Filter */}
            <div>
              <h4 className="mb-3 text-[var(--brand-navy)]">Material</h4>
              <div className="space-y-2">
                {['Cotton', 'Linen', 'Denim', 'Gold'].map((material) => (
                  <label key={material} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[var(--brand-gold)]"
                    />
                    <span className="text-[var(--brand-navy)]">{material}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[var(--brand-muted)]">
                  No products found matching your filters.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
