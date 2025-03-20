import { Facebook, Instagram, Youtube, Twitter, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';

function Connect() {
  const socialLinks = [
    {
      name: 'Website',
      icon: <Globe className="w-8 h-8" />,
      url: 'https://rccenfield.org',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-8 h-8" />,
      url: 'https://www.facebook.com/rccenfield',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-8 h-8" />,
      url: 'https://www.instagram.com/rccenfield',
      color: 'hover:text-pink-600',
    },
    {
      name: 'YouTube',
      icon: <Youtube className="w-8 h-8" />,
      url: 'https://www.youtube.com/c/RevivalChristianChurchofEnfield',
      color: 'hover:text-red-600',
    },
    {
      name: 'X (Twitter)',
      icon: <Twitter className="w-8 h-8" />,
      url: 'https://x.com/rccenfield',
      color: 'hover:text-gray-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Connect With Us</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <p className="text-xl text-gray-600 mb-8 text-center">
            Stay connected with Revival Christian Church of Enfield through our social media channels
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-lg ${link.color}`}
              >
                {link.icon}
                <span className="mt-4 text-lg font-medium text-gray-900">{link.name}</span>
              </a>
            ))}
          </div>
          
          <p className="text-center mt-8 text-gray-600">
            Follow us to stay updated with our latest events, sermons, and community activities
          </p>
        </div>
      </main>
    </div>
  );
}

export default Connect;