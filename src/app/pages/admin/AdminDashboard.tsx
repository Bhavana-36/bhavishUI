import { Link, useNavigate } from 'react-router-dom';
import { Package, ShoppingBag, DollarSign, TrendingUp, LogOut } from 'lucide-react';

export function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    navigate('/admin/login');
  };

  const stats = [
    { title: 'Total Orders', value: '145', icon: Package },
    { title: 'Total Products', value: '8', icon: ShoppingBag },
    { title: 'Total Revenue', value: '$12,450', icon: DollarSign },
    { title: 'Growth', value: '+23%', icon: TrendingUp }
  ];

  const recentOrders = [
    { id: 'ORD001', customer: 'John Doe', amount: 89.99, status: 'Processing' },
    { id: 'ORD002', customer: 'Jane Smith', amount: 129.99, status: 'Delivered' },
    { id: 'ORD003', customer: 'Bob Johnson', amount: 299.99, status: 'Shipped' },
    { id: 'ORD004', customer: 'Alice Brown', amount: 54.99, status: 'Processing' },
  ];

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      {/* Admin Header */}
      <header className="bg-[var(--brand-beige)] border-b border-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-[var(--brand-navy)]">Admin Dashboard</h1>
            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-[var(--brand-gold)] hover:text-[var(--brand-navy)]"
              >
                View Store
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2
                  bg-[var(--brand-navy)]
                  text-[var(--brand-beige)]
                  rounded
                  hover:bg-[var(--brand-gold)]
                  transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-navy)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-[var(--brand-navy)] rounded-lg">
                  <stat.icon className="w-6 h-6 text-[var(--brand-gold)]" />
                </div>
              </div>
              <p className="text-[var(--brand-gold)] text-sm mb-1">
                {stat.title}
              </p>
              <p className="text-2xl text-[var(--brand-navy)]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[var(--brand-navy)]">Recent Orders</h2>
              <Link
                to="/admin/orders"
                className="text-[var(--brand-gold)] hover:text-[var(--brand-navy)]"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between py-3
                    border-b border-[var(--brand-muted)] last:border-0"
                >
                  <div>
                    <p className="text-[var(--brand-navy)]">{order.id}</p>
                    <p className="text-sm text-[var(--brand-gold)]">
                      {order.customer}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[var(--brand-navy)]">
                      ${order.amount.toFixed(2)}
                    </p>
            <span
  className={`text-xs px-2 py-1 rounded ${
    order.status === 'Delivered'
      ? 'bg-green-100 text-green-700'
      : order.status === 'Shipped'
      ? 'bg-[var(--brand-navy)]/10 text-[var(--brand-navy)]'
      : 'bg-[var(--brand-beige)] text-[var(--brand-navy)] border border-[var(--brand-muted)]'
  }`}
>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[var(--brand-beige)] p-6 rounded-lg border border-[var(--brand-muted)]">
            <h2 className="mb-6 text-[var(--brand-navy)]">Quick Actions</h2>

            <div className="space-y-3">
              <Link
                to="/admin/products"
                className="block w-full p-4
                  bg-[var(--brand-beige)]
                  border border-[var(--brand-muted)]
                  rounded
                  hover:bg-[var(--brand-muted)]
                  transition-colors"
              >
                <h3 className="mb-1 text-[var(--brand-navy)]">
                  Manage Products
                </h3>
                <p className="text-sm text-[var(--brand-gold)]">
                  Add, edit, or delete products
                </p>
              </Link>

              <Link
                to="/admin/orders"
                className="block w-full p-4
                  bg-[var(--brand-beige)]
                  border border-[var(--brand-muted)]
                  rounded
                  hover:bg-[var(--brand-muted)]
                  transition-colors"
              >
                <h3 className="mb-1 text-[var(--brand-navy)]">
                  Manage Orders
                </h3>
                <p className="text-sm text-[var(--brand-gold)]">
                  View and update order status
                </p>
              </Link>

              <Link
                to="/admin/categories"
                className="block w-full p-4
                  bg-[var(--brand-beige)]
                  border border-[var(--brand-muted)]
                  rounded
                  hover:bg-[var(--brand-muted)]
                  transition-colors"
              >
                <h3 className="mb-1 text-[var(--brand-navy)]">
                  Manage Categories
                </h3>
                <p className="text-sm text-[var(--brand-gold)]">
                  Organize product categories
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
