import Link from 'next/link';

export default function BrandIcon() {
  return (
    <Link href="/" className="group">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white text-2xl font-bold group-hover:opacity-90 transition-opacity">
        <span className="transform -rotate-90">⏎</span>
      </div>
    </Link>
  );
}
