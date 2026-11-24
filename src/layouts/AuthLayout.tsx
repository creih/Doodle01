import { Link, Outlet } from 'react-router';
import { Sparkles } from 'lucide-react';

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      {/* Brand Header */}
      <div className="mb-8 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-2xl font-bold text-slate-900">
          <Sparkles className="h-7 w-7 text-indigo-600" />
          <span>Doodle01</span>
        </Link>
      </div>

      {/* Centered Auth Card */}
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}
