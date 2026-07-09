import { Link } from 'react-router-dom';
import { XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Unavailable() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-darkbg py-12 px-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 text-center">
        
        <div className="mx-auto w-24 h-24 bg-red-100 dark:bg-red-500/20 rounded-full flex items-center justify-center mb-8">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Slot Unavailable
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-2 font-medium">
          Requested appointment is unavailable.
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">
          Please check your email for available appointment slots or select alternative appointment dates.
        </p>

        <div className="space-y-4">
          <Button as={Link} to="/book" className="w-full">
            <RefreshCcw className="w-4 h-4 mr-2" /> Book Again
          </Button>
          <Button as={Link} to="/" variant="outline" className="w-full">
            Back Home <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
