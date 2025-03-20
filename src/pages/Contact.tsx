import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visit Us</h2>
                <div className="flex items-start space-x-4 text-gray-600">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">The Revive Centre</p>
                    <p>47 London Road</p>
                    <p>Enfield</p>
                    <p>London</p>
                    <p>EN2 6DS</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <a 
                    href="tel:02083665007" 
                    className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Phone className="w-6 h-6 flex-shrink-0" />
                    <span>0208 366 5007</span>
                  </a>
                  
                  <a 
                    href="mailto:info@rcceenfield.org"
                    className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Mail className="w-6 h-6 flex-shrink-0" />
                    <span>info@rcceenfield.org</span>
                  </a>
                  
                  <a 
                    href="https://rccenfield.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Globe className="w-6 h-6 flex-shrink-0" />
                    <span>rccenfield.org</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Times</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-medium">Sunday Service</p>
                  <p>Morning Service: 11:00 AM</p>
                </div>
                <div>
                  <p className="font-medium">Friday Service</p>
                  <p>Evening Prayer Service: 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;