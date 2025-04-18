
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import EstimateForm from '@/components/EstimateForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-wood-primary mb-6 animate-fade-up">
            Thomas Wright
          </h1>
          <p className="text-xl md:text-2xl text-charcoal mb-8 animate-fade-up">
            Master Craftsman & Custom Furniture Maker
          </p>
          <a 
            href="#estimate"
            className="inline-block bg-wood-primary text-white px-8 py-3 rounded-md hover:bg-wood-dark transition-colors font-medium animate-fade-up"
          >
            Get Free Estimate
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-wood-primary">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-cream rounded-lg">
              <Phone size={32} className="text-wood-primary mb-4" />
              <p className="text-charcoal text-lg">(555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-cream rounded-lg">
              <Mail size={32} className="text-wood-primary mb-4" />
              <p className="text-charcoal text-lg">thomas@wrightcarpentry.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-cream rounded-lg">
              <MapPin size={32} className="text-wood-primary mb-4" />
              <p className="text-charcoal text-lg">Portland, Oregon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Section */}
      <section id="estimate" className="py-20 px-4 bg-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-wood-primary">
            Request a Free Estimate
          </h2>
          <EstimateForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-inter">
            © {new Date().getFullYear()} Thomas Wright Carpentry. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
