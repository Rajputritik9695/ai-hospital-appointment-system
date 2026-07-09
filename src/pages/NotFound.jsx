import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-4 mb-2">Page Not Found</h2>
      <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      {/* Quick fix for button import below since it was default */}
      <Link to="/" className="inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 active:scale-95 bg-primary text-white hover:bg-blue-700 shadow-lg shadow-primary/30 px-5 py-2.5 text-sm">
        Back to Home
      </Link>
    </div>
  );
}
