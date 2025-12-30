import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  size?: string;
}

interface CartProps {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

export function Cart({ cartItems, onUpdateQuantity, onRemoveItem }: CartProps) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[var(--brand-beige)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-[var(--brand-navy)]">Your cart is empty</h2>
          <p className="text-[var(--brand-gold)] mb-6">Add some items to get started</p>
          <Link
            to="/"
            className="inline-block bg-[var(--brand-navy)] text-white px-8 py-3 rounded hover:bg-[var(--brand-navy)]/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="mb-8 text-[var(--brand-navy)]">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg border border-[var(--brand-muted)]"
              >
                <div className="flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-[var(--brand-navy)] mb-1">{item.name}</h3>
                        {item.size && (
                          <p className="text-sm text-neutral-500">
                            Size: {item.size}
                          </p>
                        )}
                        <p className="text-[var(--brand-navy)] font-semibold mt-2">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-neutral-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="p-1 border border-[var(--brand-muted)] rounded hover:bg-[var(--brand-muted)]/30"
                      >
                        <Minus className="w-4 h-4 text-[var(--brand-navy)]" />
                      </button>

                      <span className="w-8 text-center text-[var(--brand-navy)]">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 border border-[var(--brand-muted)] rounded hover:bg-[var(--brand-muted)]/30"
                      >
                        <Plus className="w-4 h-4 text-[var(--brand-navy)]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg border border-[var(--brand-muted)] sticky top-24">
              <h2 className="mb-6 text-[var(--brand-navy)]">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-neutral-700">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-neutral-700">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-700 font-medium">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>

                {shipping > 0 && (
                  <p className="text-sm text-neutral-500">
                    Free shipping on orders over $50
                  </p>
                )}

                <div className="pt-3 border-t border-[var(--brand-muted)]">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-[var(--brand-navy)]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="block w-full text-center bg-[var(--brand-navy)] text-white py-3 rounded hover:bg-[var(--brand-navy)]/90 transition-colors mb-3"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/"
                className="block w-full text-center bg-white border border-[var(--brand-muted)] text-[var(--brand-navy)] py-3 rounded hover:bg-[var(--brand-beige)] transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
