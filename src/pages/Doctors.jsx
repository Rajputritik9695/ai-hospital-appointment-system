import { useState, useEffect } from 'react';
import { Search, MapPin, Clock, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { getDoctors, getDepartments } from '../services/api';

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [docsRes, deptsRes] = await Promise.all([
          getDoctors(),
          getDepartments()
        ]);
        setDoctors(docsRes.data);
        setDepartments(['All', ...deptsRes.data]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.Name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.Specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All' || doc.Department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-darkbg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Our Expert Doctors</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Meet our team of experienced and highly qualified medical professionals dedicated to providing you with the best care.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow shadow-sm"
            />
          </div>
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <div className="flex space-x-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedDept === dept 
                      ? 'bg-primary text-white shadow-md shadow-primary/20' 
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : filteredDoctors.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🩺</div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No doctors found</h3>
            <p className="text-slate-500">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.map((doc) => (
              <Card key={doc.id} className="flex flex-col group h-full">
                <div className="p-1">
                  <div className="relative aspect-[4/3] rounded-t-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={doc.Image} 
                      alt={doc.Name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                      ₹{doc.ConsultationFee}
                    </div>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-secondary mb-1">{doc.Department}</p>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">{doc.Name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{doc.Specialization}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                      <span>Exp: {doc.Experience}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 mt-0.5 text-slate-400 shrink-0" />
                      <span>{doc.AvailableDays.slice(0, 3).join(', ')}{doc.AvailableDays.length > 3 ? '...' : ''}</span>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                    <Button variant="outline" className="flex-1 text-xs px-2">Profile</Button>
                    <Button as={Link} to={`/book?doctor=${doc.id}`} variant="primary" className="flex-1 text-xs px-2">
                      Book <ChevronRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
