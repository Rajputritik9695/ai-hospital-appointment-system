import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Calendar, Clock, User, Phone, Mail, FileText } from 'lucide-react';
import Button from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { getDoctors, getDepartments, submitAppointment } from '../services/api';

export default function BookAppointment() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const [departments, setDepartments] = useState([]);
  const [allDoctors, setAllDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [selectedDoctorData, setSelectedDoctorData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    defaultValues: {
      department: searchParams.get('department') || '',
      doctorId: searchParams.get('doctor') ? parseInt(searchParams.get('doctor')) : '',
      date: '',
      time: ''
    }
  });

  const selectedDept = watch('department');
  const selectedDocId = watch('doctorId');

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [docsRes, deptsRes] = await Promise.all([
          getDoctors(),
          getDepartments()
        ]);
        setAllDoctors(docsRes.data);
        setDepartments(deptsRes.data);
        
        // Handle initial URL params
        const initialDocId = searchParams.get('doctor');
        if (initialDocId) {
          const doc = docsRes.data.find(d => d.id === parseInt(initialDocId));
          if (doc) {
            setValue('department', doc.Department);
            setSelectedDoctorData(doc);
          }
        }
      } catch (error) {
        toast.error("Failed to load doctors data.");
      } finally {
        setIsPageLoading(false);
      }
    };
    fetchInitialData();
  }, [searchParams, setValue]);

  // Update doctors list when department changes
  useEffect(() => {
    if (selectedDept) {
      const docsInDept = allDoctors.filter(doc => doc.Department === selectedDept);
      setFilteredDoctors(docsInDept);
      
      // Reset selected doctor if they are not in the new department
      if (selectedDocId) {
        const docStillValid = docsInDept.find(d => d.id === parseInt(selectedDocId));
        if (!docStillValid) {
          setValue('doctorId', '');
          setSelectedDoctorData(null);
        }
      }
    } else {
      setFilteredDoctors([]);
      setValue('doctorId', '');
      setSelectedDoctorData(null);
    }
  }, [selectedDept, allDoctors, selectedDocId, setValue]);

  // Update selected doctor details
  useEffect(() => {
    if (selectedDocId) {
      const doc = allDoctors.find(d => d.id === parseInt(selectedDocId));
      setSelectedDoctorData(doc || null);
    } else {
      setSelectedDoctorData(null);
    }
  }, [selectedDocId, allDoctors]);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const payload = {
        ...data,
        doctorDetails: selectedDoctorData
      };
      
      await submitAppointment(payload);
      navigate('/success');
    } catch (error) {
      if (error.message === "Requested appointment is unavailable") {
        navigate('/unavailable');
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Prevent past dates
  const today = new Date().toISOString().split('T')[0];

  if (isPageLoading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-darkbg py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Book an Appointment</h1>
          <p className="text-slate-600 dark:text-slate-400">
            Fill out the form below to schedule your visit. We will send you a confirmation email shortly.
          </p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-6 sm:p-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Personal Info Section */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 mb-5 flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" /> Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.fullName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                      placeholder="John Doe"
                      {...register("fullName", { required: "Full Name is required" })}
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Mobile Number *</label>
                    <input 
                      type="tel" 
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.mobile ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                      placeholder="10-digit mobile number"
                      {...register("mobile", { 
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Must be exactly 10 digits"
                        }
                      })}
                    />
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Age *</label>
                      <input 
                        type="number" 
                        className={`w-full px-4 py-2.5 rounded-xl border ${errors.age ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                        placeholder="Yrs"
                        {...register("age", { 
                          required: "Required",
                          min: { value: 1, message: "Min 1" },
                          max: { value: 120, message: "Max 120" }
                        })}
                      />
                      {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Gender *</label>
                      <select 
                        className={`w-full px-4 py-2.5 rounded-xl border ${errors.gender ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                        {...register("gender", { required: "Required" })}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Details Section */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3 mb-5 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" /> Appointment Details
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Department *</label>
                    <select 
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.department ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                      {...register("department", { required: "Department is required" })}
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                    {errors.department && <p className="text-red-500 text-xs mt-1">{errors.department.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Doctor *</label>
                    <select 
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.doctorId ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow disabled:opacity-50`}
                      {...register("doctorId", { required: "Doctor is required" })}
                      disabled={!selectedDept}
                    >
                      <option value="">Select Doctor</option>
                      {filteredDoctors.map(doc => (
                        <option key={doc.id} value={doc.id}>{doc.Name}</option>
                      ))}
                    </select>
                    {errors.doctorId && <p className="text-red-500 text-xs mt-1">{errors.doctorId.message}</p>}
                  </div>
                </div>

                {/* Doctor Details Preview */}
                {selectedDoctorData && (
                  <div className="mb-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20 flex flex-col sm:flex-row gap-4 items-center">
                    <img src={selectedDoctorData.Image} alt={selectedDoctorData.Name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                    <div className="flex-grow text-center sm:text-left">
                      <h4 className="font-bold text-slate-900 dark:text-white">{selectedDoctorData.Name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{selectedDoctorData.Specialization}</p>
                      <p className="text-xs text-primary font-medium mt-1">Fee: ₹{selectedDoctorData.ConsultationFee}</p>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300 text-center sm:text-right border-t sm:border-t-0 sm:border-l border-slate-200 dark:border-slate-700 pt-3 sm:pt-0 sm:pl-4 mt-3 sm:mt-0">
                      <p><span className="font-medium text-slate-800 dark:text-slate-200">Days:</span> {selectedDoctorData.AvailableDays.join(', ')}</p>
                      <p><span className="font-medium text-slate-800 dark:text-slate-200">Timing:</span> {selectedDoctorData.AvailableTime}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Date *</label>
                    <input 
                      type="date" 
                      min={today}
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.date ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                      {...register("date", { required: "Date is required" })}
                    />
                    {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Time *</label>
                    <input 
                      type="time" 
                      className={`w-full px-4 py-2.5 rounded-xl border ${errors.time ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow`}
                      {...register("time", { required: "Time is required" })}
                    />
                    {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Symptoms / Reason for Visit</label>
                  <textarea 
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow resize-none"
                    placeholder="Briefly describe your symptoms or reason for the appointment..."
                    {...register("symptoms")}
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <Button type="submit" size="lg" className="w-full text-lg py-4" isLoading={isLoading}>
                  Confirm Booking Request
                </Button>
                <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> Note: Final confirmation will be sent via email.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
