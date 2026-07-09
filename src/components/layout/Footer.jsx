import { Link } from 'react-router-dom';
import { HeartPulse, MapPin, Phone, Mail, Globe, MessageCircle, Share2, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-primary/20 rounded-xl">
                <HeartPulse className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-white">
                CityCare<span className="text-primary">Hospital</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your health, our priority. Providing world-class medical care with experienced professionals and advanced technology.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full hover:bg-primary"><Globe className="w-4 h-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full hover:bg-primary"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full hover:bg-primary"><Share2 className="w-4 h-4" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors p-2 bg-slate-800 rounded-full hover:bg-primary"><Users className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Doctors', 'Book Appointment', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Departments</h3>
            <ul className="space-y-3">
              {['Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics', 'Dermatology'].map((item) => (
                <li key={item}>
                  <Link to="/#departments" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">123 Health Avenue, Medical District, Cityville, 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">info@citycarehospital.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} CityCare Hospital. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
