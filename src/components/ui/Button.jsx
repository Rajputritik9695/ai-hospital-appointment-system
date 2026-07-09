import React from 'react';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  children, 
  as: Component = 'button',
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-700 shadow-lg shadow-primary/30',
    secondary: 'bg-secondary text-white hover:bg-sky-600 shadow-lg shadow-secondary/30',
    outline: 'border-2 border-primary text-primary hover:bg-primary/5 dark:border-primary-400 dark:text-primary-400',
    ghost: 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-70 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Component>
  );
});

Button.displayName = 'Button';

export default Button;
