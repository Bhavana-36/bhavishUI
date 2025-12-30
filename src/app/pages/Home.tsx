import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { ShieldCheck, RotateCcw, Truck } from "lucide-react";

interface HomeProps {
  onAddToCart: (product: any) => void;
}

export function Home({ onAddToCart }: HomeProps) {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      {/* Hero Banner */}
      <div className="relative h-[500px] bg-[var(--brand-navy)] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1724184888115-e76e42f53dcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl mb-4">
            Summer Collection 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-200">
            Discover Premium Fashion & Jewelry
          </p>
          <Link
            to="/category/women"
            className="inline-block bg-[var(--brand-gold)] text-[var(--brand-navy)] px-8 py-3 rounded hover:opacity-90 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center mb-12 text-[var(--brand-navy)]">
          Shop By Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { to: "/category/men", label: "Men's Wear", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
            { to: "/category/women", label: "Women's Wear", img: "https://images.unsplash.com/photo-1753192108753-81be0db2f7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
            { to: "/category/kids", label: "Kids Wear", img: "https://images.unsplash.com/photo-1622218286192-95f6a20083c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
            { to: "/category/jewellery", label: "Jewellery", img: "https://images.unsplash.com/photo-1643300866907-032b3baeeb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" },
          ].map((item) => (
            <Link key={item.label} to={item.to} className="group">
              <div className="relative h-64 rounded-lg overflow-hidden bg-[var(--brand-muted)]">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-[var(--brand-navy)]/40 flex items-center justify-center">
                  <h3 className="text-white text-2xl">{item.label}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center mb-12 text-[var(--brand-navy)]">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/category/women"
            className="inline-block bg-[var(--brand-navy)] text-white px-8 py-3 rounded hover:opacity-90 transition"
          >
            View All Products
          </Link>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-[var(--brand-beige)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Payment",
                desc: "100% secure payment with SSL encryption",
              },
              {
                icon: RotateCcw,
                title: "Easy Returns",
                desc: "30-day return policy on all items",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Free shipping on orders over $50",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white rounded-full border border-[var(--brand-gold)]">
                    <Icon className="w-8 h-8 text-[var(--brand-navy)]" />
                  </div>
                </div>
                <h3 className="mb-2 text-[var(--brand-navy)]">{title}</h3>
                <p className="text-neutral-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
