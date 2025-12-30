import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User } from 'lucide-react';

export function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials. Use username: admin, password: admin123');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--brand-beige)] flex items-center justify-center">
      <div className="bg-blue p-8 rounded-lg border border-[var(--brand-gold)] w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="mb-2 text-[var(--brand-navy)]">Admin Login</h1>
          <p className="text-[var(--brand-navy)]/70">
            Enter your credentials to access the admin panel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username */}
          <div>
            <label className="block mb-2 text-[var(--brand-navy)]/80">
              Username
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--brand-navy)]" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-[var(--brand-muted)] rounded
                           focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]"
                placeholder="Enter username"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-[var(--brand-navy)]/80">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--brand-navy)]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-[var(--brand-muted)] rounded
                           focus:outline-none focus:ring-2 focus:ring-[var(--brand-navy)]"
                placeholder="Enter password"
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[var(--brand-navy)] text-white py-3 rounded
                       hover:bg-[var(--brand-gold)] hover:text-[var(--brand-navy)]
                       transition-colors"
          >
            Login
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-[var(--brand-beige)] rounded text-sm text-[var(--brand-navy)]/70 border border-[var(--brand-muted)]">
          <p className="mb-1 font-medium">Demo Credentials:</p>
          <p>
            Username: <span className="text-[var(--brand-navy)]">admin</span>
          </p>
          <p>
            Password: <span className="text-[var(--brand-navy)]">admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
}
