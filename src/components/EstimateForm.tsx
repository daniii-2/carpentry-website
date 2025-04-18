
import { useState } from 'react';
import { Calendar, Mail, Phone, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EstimateForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    preferredDate: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Estimate Request Received",
      description: "We'll get back to you within 24-48 hours with your free estimate.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      description: '',
      preferredDate: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-primary focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-primary focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-primary focus:border-transparent"
            />
          </div>

          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="date"
              value={formData.preferredDate}
              onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-primary focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({...formData, projectType: e.target.value})}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-primary focus:border-transparent"
          >
            <option value="">Select Project Type</option>
            <option value="custom-furniture">Custom Furniture</option>
            <option value="home-renovation">Home Renovation</option>
            <option value="kitchen-cabinets">Kitchen Cabinets</option>
            <option value="deck">Deck Construction</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <textarea
            placeholder="Project Description"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wood-primary focus:border-transparent"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-wood-primary text-white py-3 rounded-md hover:bg-wood-dark transition-colors font-medium"
        >
          Request Free Estimate
        </button>
      </div>
    </form>
  );
};

export default EstimateForm;
