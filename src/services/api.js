import axios from 'axios';

// Replace this with your actual n8n webhook URL
const API_URL = "YOUR_N8N_WEBHOOK_URL";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const submitAppointment = async (appointmentData) => {
  // Placeholder implementation for frontend readiness
  console.log("Submitting appointment to:", API_URL, appointmentData);
  
  // Simulate API delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate success
      resolve({ data: { success: true, message: "Appointment submitted successfully" } });
      
      // Uncomment to simulate error/unavailable slot
      // reject(new Error("Requested appointment is unavailable"));
    }, 1500);
  });
};

export const getDoctors = async () => {
  // This will return the hardcoded data for now, but is ready to be swapped for an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: doctorsData });
    }, 500);
  });
};

export const getDepartments = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const departments = [...new Set(doctorsData.map(doc => doc.Department))];
      resolve({ data: departments });
    }, 500);
  });
};

// Hardcoded data based on user requirements
export const doctorsData = [
  {
    id: 1,
    Name: "Dr. Amit Sharma",
    Department: "Cardiology",
    Specialization: "Interventional Cardiologist",
    Experience: "15 Years",
    ConsultationFee: 800,
    AvailableDays: ["Monday", "Tuesday", "Wednesday"],
    AvailableTime: "09:00 AM – 05:00 PM",
    Image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 2,
    Name: "Dr. Neha Mehta",
    Department: "Dermatology",
    Specialization: "Skin & Hair Specialist",
    Experience: "12 Years",
    ConsultationFee: 700,
    AvailableDays: ["Monday", "Thursday", "Friday"],
    AvailableTime: "10:00 AM – 04:00 PM",
    Image: "https://images.unsplash.com/photo-1594824436998-d45610810488?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 3,
    Name: "Dr. Raj Gupta",
    Department: "Orthopedics",
    Specialization: "Joint Replacement Surgeon",
    Experience: "18 Years",
    ConsultationFee: 900,
    AvailableDays: ["Tuesday", "Wednesday", "Friday"],
    AvailableTime: "09:00 AM – 03:00 PM",
    Image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 4,
    Name: "Dr. Priya Rao",
    Department: "General Medicine",
    Specialization: "General Physician",
    Experience: "10 Years",
    ConsultationFee: 500,
    AvailableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    AvailableTime: "09:00 AM – 06:00 PM",
    Image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 5,
    Name: "Dr. Vivek Kapoor",
    Department: "Neurology",
    Specialization: "Neurologist",
    Experience: "16 Years",
    ConsultationFee: 1000,
    AvailableDays: ["Monday", "Wednesday", "Friday"],
    AvailableTime: "10:00 AM – 04:00 PM",
    Image: "https://images.unsplash.com/photo-1537368910025-702800faa86b?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 6,
    Name: "Dr. Sneha Verma",
    Department: "Pediatrics",
    Specialization: "Child Specialist",
    Experience: "9 Years",
    ConsultationFee: 600,
    AvailableDays: ["Tuesday", "Thursday", "Saturday"],
    AvailableTime: "09:00 AM – 03:00 PM",
    Image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 7,
    Name: "Dr. Rohit Singh",
    Department: "Cardiology",
    Specialization: "Heart Specialist",
    Experience: "14 Years",
    ConsultationFee: 850,
    AvailableDays: ["Monday", "Tuesday", "Thursday"],
    AvailableTime: "10:00 AM – 05:00 PM",
    Image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 8,
    Name: "Dr. Anjali Patel",
    Department: "Gynecology",
    Specialization: "Obstetrician & Gynecologist",
    Experience: "11 Years",
    ConsultationFee: 750,
    AvailableDays: ["Monday", "Wednesday", "Friday"],
    AvailableTime: "09:00 AM – 04:00 PM",
    Image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 9,
    Name: "Dr. Karan Joshi",
    Department: "ENT",
    Specialization: "Ear, Nose & Throat Specialist",
    Experience: "13 Years",
    ConsultationFee: 650,
    AvailableDays: ["Tuesday", "Thursday", "Saturday"],
    AvailableTime: "09:00 AM – 03:00 PM",
    Image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=250&h=250&auto=format&fit=crop"
  },
  {
    id: 10,
    Name: "Dr. Riya Malhotra",
    Department: "General Medicine",
    Specialization: "Family Physician",
    Experience: "8 Years",
    ConsultationFee: 500,
    AvailableDays: ["Monday", "Tuesday", "Friday"],
    AvailableTime: "10:00 AM – 05:00 PM",
    Image: "https://images.unsplash.com/photo-1594824436998-d45610810488?q=80&w=250&h=250&auto=format&fit=crop"
  }
];
