import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, CalendarPlus } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Success() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 dark:bg-darkbg py-12 px-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 text-center transform transition-all duration-500 hover:scale-[1.02]">
        
        <div className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-500/20 rounded-full flex items-center justify-center mb-8 animate-bounce" style={{ animationDuration: '2s' }}>
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Appointment Submitted Successfully
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 mb-2 font-medium">
          Your appointment request has been received.
        </p>
        <p className="text-slate-500 dark:text-slate-500 text-sm mb-8">
          You will receive an email confirmation shortly with your booking details.
        </p>

        <div className="space-y-4">
          <Button as={Link} to="/" className="w-full">
            Back Home <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button as={Link} to="/book" variant="outline" className="w-full">
            <CalendarPlus className="w-4 h-4 mr-2" /> Book Another Appointment
          </Button>
        </div>
      </div>
    </div>
  );
}
