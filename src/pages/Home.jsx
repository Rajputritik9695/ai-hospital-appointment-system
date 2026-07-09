import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Clock, HeartHandshake, Stethoscope } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

const Home = () => {
  const stats = [
    { value: '10+', label: 'Expert Doctors' },
    { value: '500+', label: 'Happy Patients' },
    { value: '24/7', label: 'Support' },
    { value: '98%', label: 'Patient Satisfaction' },
  ];

  const features = [
    { icon: <Stethoscope className="w-8 h-8 text-primary" />, title: 'Professional Doctors', desc: 'Expert medical care from highly qualified professionals.' },
    { icon: <CheckCircle2 className="w-8 h-8 text-primary" />, title: 'Online Booking', desc: 'Schedule your appointments easily through our platform.' },
    { icon: <Shield className="w-8 h-8 text-primary" />, title: 'Instant Confirmation', desc: 'Get immediate email confirmation for your bookings.' },
    { icon: <HeartHandshake className="w-8 h-8 text-primary" />, title: 'Affordable Care', desc: 'Quality healthcare that fits your budget.' },
    { icon: <ArrowRight className="w-8 h-8 text-primary" />, title: 'Emergency Care', desc: '24/7 emergency services available when you need them most.' },
    { icon: <Clock className="w-8 h-8 text-primary" />, title: 'Experienced Staff', desc: 'Compassionate and experienced nursing staff.' },
  ];

  const departments = [
    { id: 1, name: 'Cardiology', icon: '❤️', desc: 'Expert care for your heart and cardiovascular system.' },
    { id: 2, name: 'General Medicine', icon: '🩺', desc: 'Comprehensive medical care for all ages.' },
    { id: 3, name: 'Neurology', icon: '🧠', desc: 'Advanced treatment for neurological disorders.' },
    { id: 4, name: 'Pediatrics', icon: '👶', desc: 'Specialized healthcare for infants, children, and adolescents.' },
    { id: 5, name: 'Orthopedics', icon: '🦴', desc: 'Treatment for bones, joints, and muscles.' },
    { id: 6, name: 'Dermatology', icon: '✨', desc: 'Expert care for skin, hair, and nail conditions.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent dark:from-primary/5 dark:to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Providing Quality Healthcare
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                Your Health, <br />
                <span className="text-primary">Our Priority</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
                Book appointments with experienced doctors in just a few clicks. Get the medical attention you deserve, right when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button as={Link} to="/book" size="lg" className="w-full sm:w-auto">
                  Book Appointment
                </Button>
                <Button as={Link} to="/doctors" variant="outline" size="lg" className="w-full sm:w-auto">
                  View Doctors
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" 
                alt="Hospital Staff" 
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full border border-white/20 dark:border-slate-800"
              />
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <CheckCircle2 className="text-green-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Trusted Clinic</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Certified Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary dark:bg-slate-900 border-y border-primary/20 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 dark:divide-slate-800">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50 dark:bg-darkbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Us</h2>
            <p className="text-slate-600 dark:text-slate-400">
              We provide comprehensive medical services with a patient-first approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="group hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-primary/10 rounded-2xl w-max group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Departments</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Explore our specialized departments equipped with state-of-the-art facilities.
              </p>
            </div>
            <Button as={Link} to="/book" variant="outline" className="shrink-0 group">
              Book Appointment <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <div key={dept.id} className="relative group rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-8 relative z-10 flex flex-col h-full">
                  <div className="text-4xl mb-6">{dept.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{dept.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                    {dept.desc}
                  </p>
                  <Button as={Link} to={`/book?department=${encodeURIComponent(dept.name)}`} variant="ghost" className="w-full justify-between hover:text-primary">
                    Book Appointment <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
