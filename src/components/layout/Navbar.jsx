import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Moon, Sun, HeartPulse } from 'lucide-react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check initial theme
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Doctors', path: '/doctors' },
    // We can scroll to departments on home page or have a separate route. Given the requirements, it's just a section on home or its own route. Let's make it go to home with hash for now, or just a separate page. I'll make a separate page or point to home #departments.
    { name: 'Departments', path: '/#departments' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'glass-panel py-3' : 'bg-transparent py-5 dark:bg-transparent bg-white/80 backdrop-blur-sm shadow-sm'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
              <HeartPulse className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              CityCare<span className="text-primary">Hospital</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary',
                    location.pathname === link.path ? 'text-primary' : 'text-slate-600 dark:text-slate-300'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-700 pl-6">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>
              <div className="flex flex-col items-end">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Emergency</span>
                <a href="tel:1066" className="text-sm font-bold text-red-500 hover:text-red-600 flex items-center gap-1">
                  <PhoneCall className="w-3 h-3" /> 1066
                </a>
              </div>
              <Button as={Link} to="/book" variant="primary">
                Book Appointment
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              {isDark ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-t border-slate-200 dark:border-slate-800 shadow-xl py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'block text-base font-medium px-4 py-2 rounded-lg transition-colors',
                  location.pathname === link.path 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-3">
              <a href="tel:1066" className="flex items-center justify-center gap-2 w-full py-2 bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 font-bold rounded-lg">
                <PhoneCall className="w-4 h-4" /> Emergency: 1066
              </a>
              <Button as={Link} to="/book" variant="primary" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
