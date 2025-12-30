import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Package, Truck, Mail } from 'lucide-react';

export function OrderConfirmation() {
  const { orderId } = useParams<{ orderId: string }>();

  return (
    <div className="min-h-screen bg-[var(--brand-beige)] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">

        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="p-4 rounded-full bg-[var(--brand-muted)]">
            <CheckCircle className="w-16 h-16 text-[var(--brand-gold)]" />
          </div>
        </div>

        <h1 className="mb-4 text-[var(--brand-navy)]">
          Order Placed Successfully!
        </h1>

        <p className="text-xl text-[var(--brand-gold)] mb-8">
          Thank you for your purchase
        </p>

        {/* Order Details */}
        <div className="bg-[var(--brand-beige)] p-8 rounded-lg border border-[var(--brand-muted)] mb-8">
          <div className="mb-6">
            <p className="text-sm text-[var(--brand-navy)] mb-2">
              Order ID
            </p>
            <p className="text-2xl text-[var(--brand-navy)]">
              {orderId}
            </p>
          </div>

          <div className="text-sm text-[var(--brand-gold)] space-y-2">
            <p>A confirmation email has been sent to your email address.</p>
            <p>You can track your order status using the order ID above.</p>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
            <div className="flex justify-center mb-3">
              <Package className="w-8 h-8 text-[var(--brand-navy)]" />
            </div>
            <h3 className="mb-2 text-[var(--brand-navy)]">Processing</h3>
            <p className="text-sm text-[var(--brand-gold)]">
              Your order is being prepared
            </p>
          </div>

          <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
            <div className="flex justify-center mb-3">
              <Truck className="w-8 h-8 text-[var(--brand-navy)]" />
            </div>
            <h3 className="mb-2 text-[var(--brand-navy)]">Shipping</h3>
            <p className="text-sm text-[var(--brand-gold)]">
              Delivery in 3–5 business days
            </p>
          </div>

          <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
            <div className="flex justify-center mb-3">
              <Mail className="w-8 h-8 text-[var(--brand-navy)]" />
            </div>
            <h3 className="mb-2 text-[var(--brand-navy)]">Updates</h3>
            <p className="text-sm text-[var(--brand-gold)]">
              Track via email notifications
            </p>
          </div>

        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-8 py-3 rounded
              bg-[var(--brand-navy)]
              text-[var(--brand-beige)]
              hover:bg-[var(--brand-gold)]
              transition-colors"
          >
            Continue Shopping
          </Link>

          <button
            className="px-8 py-3 rounded
              border border-[var(--brand-muted)]
              text-[var(--brand-navy)]
              bg-transparent
              hover:bg-[var(--brand-muted)]
              transition-colors"
          >
            Track Order
          </button>
        </div>

      </div>
    </div>
  );
}
