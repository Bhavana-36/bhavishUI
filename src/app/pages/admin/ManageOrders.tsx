import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Eye, LogOut } from 'lucide-react';

export function ManageOrders() {
  const [orders] = useState([
    { id: 'ORD001', customer: 'John Doe', email: 'john@example.com', amount: 89.99, status: 'processing', date: '2024-12-20' },
    { id: 'ORD002', customer: 'Jane Smith', email: 'jane@example.com', amount: 129.99, status: 'delivered', date: '2024-12-19' },
    { id: 'ORD003', customer: 'Bob Johnson', email: 'bob@example.com', amount: 299.99, status: 'shipped', date: '2024-12-21' },
    { id: 'ORD004', customer: 'Alice Brown', email: 'alice@example.com', amount: 54.99, status: 'processing', date: '2024-12-22' },
    { id: 'ORD005', customer: 'Charlie Wilson', email: 'charlie@example.com', amount: 199.99, status: 'shipped', date: '2024-12-21' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-neutral-100 text-neutral-800';
    }
  };

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      {/* Header */}
      <header className="bg-blue border-b border-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link to="/admin/dashboard">
                <h2 className="text-[var(--brand-navy)]">Admin Panel</h2>
              </Link>
              <nav className="flex gap-6">
                <Link to="/admin/products" className="text-[var(--brand-navy)]/70 hover:text-[var(--brand-navy)]">
                  Products
                </Link>
                <Link to="/admin/orders" className="text-[var(--brand-navy)] font-medium">
                  Orders
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Link to="/" className="text-[var(--brand-gold)] hover:text-[var(--brand-navy)]">
                View Store
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-navy)] text-white rounded hover:bg-[var(--brand-gold)] hover:text-[var(--brand-navy)] transition-colors">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[var(--brand-navy)]">Manage Orders</h1>
          <select className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-navy)] text-white rounded hover:bg-[var(--brand-muted)] hover:text-[var(--brand-navy)] transition-colors">
            <option value="all">All Orders</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="bg-white rounded-lg border border-[var(--brand-muted)] overflow-hidden">
          <table className="w-full">
            <thead className="bg-[var(--brand-beige)] border-b border-[var(--brand-muted)]">
              <tr>
                {['Order ID', 'Customer', 'Email', 'Amount', 'Date', 'Status', 'Actions'].map((h) => (
                  <th key={h} className={`px-6 py-4 text-sm text-[var(--brand-navy)] ${h === 'Actions' ? 'text-right' : 'text-left'}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-[var(--brand-muted)]">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-[var(--brand-beige)]/60">
                  <td className="px-6 py-4 text-[var(--brand-navy)]">{order.id}</td>
                  <td className="px-6 py-4 text-[var(--brand-navy)]">{order.customer}</td>
                  <td className="px-6 py-4 text-[var(--brand-navy)]/70">{order.email}</td>
                  <td className="px-6 py-4 text-[var(--brand-navy)]">${order.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 text-[var(--brand-navy)]/70">{order.date}</td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <select
                      defaultValue={order.status}
                      className={`px-3 py-1 rounded text-sm capitalize border-0 focus:ring-2 focus:ring-[var(--brand-navy)] ${getStatusColor(order.status)}`}
                    >
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-[var(--brand-navy)]/70 hover:text-[var(--brand-navy)] hover:bg-[var(--brand-beige)] rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Status */}
        <div className="mt-8 bg-blue p-6 rounded-lg border border-[var(--brand-muted)]">
          <h2 className="mb-6 text-[var(--brand-navy)]">Payment Status Overview</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded">
              <p className="text-sm text-green-700">Paid Orders</p>
              <p className="text-2xl text-green-900">124</p>
              <p className="text-sm text-green-600">$8,450.00</p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-700">Pending Payment</p>
              <p className="text-2xl text-yellow-900">8</p>
              <p className="text-sm text-yellow-600">$450.00</p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-700">Refunded</p>
              <p className="text-2xl text-blue-900">3</p>
              <p className="text-sm text-blue-600">$180.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
