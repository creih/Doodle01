import { Link } from 'react-router';
import { ArrowRight, Layers, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    title: 'Modular Architecture',
    description: 'Clean separation between layouts, pages, and reusable UI blocks.',
    icon: Layers,
  },
  {
    title: 'Fast by Default',
    description: 'Powered by Vite, React, and Tailwind CSS for instant feedback.',
    icon: Zap,
  },
  {
    title: 'Type-Safe Code',
    description: 'Built with TypeScript to catch errors before they reach production.',
    icon: ShieldCheck,
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Build scalable apps with clean foundations
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Your industry-standard React, TypeScript, and Tailwind layout is ready. Start adding
          features without fighting messy folder structures.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
