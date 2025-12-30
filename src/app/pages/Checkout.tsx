import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone } from 'lucide-react';

interface CheckoutProps {
  cartItems: any[];
}

export function Checkout({ cartItems }: CheckoutProps) {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    navigate(`/order-confirmation/${orderId}`);
  };

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <h1 className="mb-8 text-[var(--brand-navy)]">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">

              {/* Customer Details */}
              <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
                <h2 className="mb-6 text-[var(--brand-navy)]">Customer Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'First Name', placeholder: 'John', type: 'text' },
                    { label: 'Last Name', placeholder: 'Doe', type: 'text' },
                    { label: 'Email', placeholder: 'john@example.com', type: 'email' },
                    { label: 'Phone', placeholder: '+1 234 567 8900', type: 'tel' }
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block mb-2 text-[var(--brand-navy)]">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        className="w-full px-4 py-2
                          border border-[var(--brand-muted)]
                          rounded
                          bg-transparent
                          text-[var(--brand-navy)]
                          focus:outline-none
                          focus:ring-2 focus:ring-[var(--brand-gold)]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
                <h2 className="mb-6 text-[var(--brand-navy)]">Shipping Address</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-[var(--brand-navy)]">Street Address</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Main Street"
                      className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded
                        bg-transparent text-[var(--brand-navy)]
                        focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['City', 'State', 'ZIP Code'].map((label) => (
                      <div key={label}>
                        <label className="block mb-2 text-[var(--brand-navy)]">{label}</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded
                            bg-transparent text-[var(--brand-navy)]
                            focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
                <h2 className="mb-6 text-[var(--brand-navy)]">Payment Method</h2>

                <div className="space-y-4 mb-6">
                  {[
                    { value: 'upi', label: 'UPI Payment', icon: Smartphone },
                    { value: 'card', label: 'Credit / Debit Card', icon: CreditCard }
                  ].map(({ value, label, icon: Icon }) => (
                    <label
                      key={value}
                      className="flex items-center gap-3 p-4 border-2 rounded cursor-pointer
                        border-[var(--brand-muted)]
                        hover:bg-[var(--brand-muted)] transition-colors"
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={value}
                        checked={paymentMethod === value}
                        onChange={() => setPaymentMethod(value as 'upi' | 'card')}
                        className="w-5 h-5 accent-[var(--brand-gold)]"
                      />
                      <Icon className="w-6 h-6 text-[var(--brand-navy)]" />
                      <span className="text-[var(--brand-navy)]">{label}</span>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'upi' && (
                  <div>
                    <label className="block mb-2 text-[var(--brand-navy)]">UPI ID</label>
                    <input
                      type="text"
                      required
                      placeholder="yourname@upi"
                      className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded
                        bg-transparent text-[var(--brand-navy)]
                        focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                    />
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    {['Card Number', 'Expiry Date', 'CVV'].map((label) => (
                      <div key={label}>
                        <label className="block mb-2 text-[var(--brand-navy)]">{label}</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded
                            bg-transparent text-[var(--brand-navy)]
                            focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)] sticky top-24">
                <h2 className="mb-6 text-[var(--brand-navy)]">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <p className="text-sm text-[var(--brand-navy)]">{item.name}</p>
                        <p className="text-sm text-[var(--brand-muted)]">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm text-[var(--brand-navy)]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pt-6 border-t border-[var(--brand-muted)]">
                  <div className="flex justify-between text-[var(--brand-navy)]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[var(--brand-navy)]">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="pt-3 border-t border-[var(--brand-muted)]">
                    <div className="flex justify-between font-medium text-[var(--brand-navy)]">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded
                    bg-[var(--brand-navy)]
                    text-[var(--brand-beige)]
                    hover:bg-[var(--brand-gold)]
                    transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}
