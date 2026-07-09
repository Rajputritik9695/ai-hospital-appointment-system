import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-darkbg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or medical emergencies. Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Card className="flex-1 bg-primary text-white border-transparent">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Emergency</h3>
                <p className="text-blue-100 mb-4">Available 24/7 for medical emergencies</p>
                <a href="tel:1066" className="text-2xl font-bold hover:text-blue-200 transition-colors">1066</a>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Location</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      123 Health Avenue, Medical District,<br />
                      Cityville, State 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      info@citycarehospital.com<br />
                      support@citycarehospital.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">Business Hours</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Mon - Sun: 24 Hours Open<br />
                      OPD: 9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea 
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card className="overflow-hidden">
          <div className="bg-slate-200 dark:bg-slate-800 w-full h-[400px] flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay dark:opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            <div className="relative z-10 text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white bg-white/80 dark:bg-slate-900/80 px-6 py-2 rounded-full backdrop-blur-sm inline-block">
                CityCare Hospital Location
              </h3>
              <p className="mt-2 text-slate-800 dark:text-slate-200 font-medium bg-white/60 dark:bg-slate-900/60 px-4 py-1 rounded-full backdrop-blur-sm inline-block">
                Interactive Google Map Integration Pending
              </p>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}
