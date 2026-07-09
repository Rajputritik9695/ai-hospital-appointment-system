import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Spinner({ className, size = 'md' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  
  return (
    <Loader2 className={cn('animate-spin text-primary', sizes[size], className)} />
  );
}
