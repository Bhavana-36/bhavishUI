import { Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../../data/products';
import { Plus, Edit, Trash2, LogOut } from 'lucide-react';

export function ManageProducts() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--brand-beige)]">
      {/* Admin Header */}
      <header className="bg-blue border-b border-[var(--brand-muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link to="/admin/dashboard">
                <h2 className="text-[var(--brand-navy)]">Admin Panel</h2>
              </Link>

              <nav className="flex gap-6">
                <Link
                  to="/admin/products"
                  className="text-[var(--brand-navy)] font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/admin/orders"
                  className="text-neutral-600 hover:text-[var(--brand-navy)]"
                >
                  Orders
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <Link
                to="/"
                className="text-[var(--brand-gold)] hover:text-[var(--brand-navy)]"
              >
                View Store
              </Link>

              <button className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-navy)] text-white rounded hover:opacity-90 transition">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[var(--brand-navy)]">Manage Products</h1>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--brand-navy)] text-white rounded hover:opacity-90 transition"
          >
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </div>

        {/* Add Product Form */}
        {showAddForm && (
          <div className="bg-white p-6 rounded-lg border border-[var(--brand-muted)] mb-8">
            <h2 className="mb-6 text-[var(--brand-navy)]">Add New Product</h2>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: 'Product Name', type: 'text', placeholder: 'Enter product name' },
                  { label: 'Price ($)', type: 'number', placeholder: '0.00' },
                  { label: 'Material', type: 'text', placeholder: 'Cotton, Gold, etc.' },
                  { label: 'Image URL', type: 'url', placeholder: 'https://...' },
                ].map((field, i) => (
                  <div key={i}>
                    <label className="block mb-2 text-neutral-700">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]"
                    />
                  </div>
                ))}

                <div>
                  <label className="block mb-2 text-neutral-700">Category</label>
                  <select className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]">
                    <option>Men's Wear</option>
                    <option>Women's Wear</option>
                    <option>Kids Wear</option>
                    <option>Jewellery</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-neutral-700">Sizes</label>
                  <input
                    type="text"
                    placeholder="S, M, L, XL"
                    className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block mb-2 text-neutral-700">Description</label>
                  <textarea
                    rows={3}
                    placeholder="Enter product description"
                    className="w-full px-4 py-2 border border-[var(--brand-muted)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[var(--brand-navy)] text-white rounded hover:opacity-90"
                >
                  Add Product
                </button>

                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-6 py-2 bg-[var(--brand-beige)] text-[var(--brand-navy)] border border-[var(--brand-muted)] rounded hover:bg-[var(--brand-muted)]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Table */}
        <div className="bg-white rounded-lg border border-[var(--brand-muted)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[var(--brand-beige)] border-b border-[var(--brand-muted)]">
                <tr>
                  {['Image', 'Product', 'Category', 'Price', 'Material', 'Actions'].map(
                    (head) => (
                      <th
                        key={head}
                        className={`px-6 py-4 text-sm text-[var(--brand-navy)] ${
                          head === 'Actions' ? 'text-right' : 'text-left'
                        }`}
                      >
                        {head}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody className="divide-y divide-[var(--brand-muted)]">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-[var(--brand-beige)]">
                    <td className="px-6 py-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>

                    <td className="px-6 py-4">
                      <p className="text-[var(--brand-navy)]">{product.name}</p>
                      <p className="text-sm text-neutral-500 line-clamp-1">
                        {product.description}
                      </p>
                    </td>

                    <td className="px-6 py-4 capitalize text-neutral-700">
                      {product.category}
                    </td>

                    <td className="px-6 py-4 text-[var(--brand-navy)]">
                      ${product.price.toFixed(2)}
                    </td>

                    <td className="px-6 py-4 text-neutral-700">
                      {product.material || 'N/A'}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-[var(--brand-navy)] hover:bg-[var(--brand-beige)] rounded">
                          <Edit className="w-4 h-4" />
                        </button>

                        <button className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
