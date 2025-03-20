import { Link } from 'react-router-dom';
import { Radio, Users, Calendar as CalendarIcon, Church, Heart, Mail, PartyPopper } from 'lucide-react';
import Navigation from '../components/Navigation';

function Home() {
  const menuItems = [
    { title: 'Livestream', icon: <Church className="w-8 h-8" />, path: '/livestream' },
    { title: 'Sermons', icon: <Radio className="w-8 h-8" />, path: '/sermons' },
    { title: 'Connect', icon: <Users className="w-8 h-8" />, path: '/connect' },
    { title: 'Events', icon: <PartyPopper className="w-8 h-8" />, path: '/events' },
    { title: 'Calendar', icon: <CalendarIcon className="w-8 h-8" />, path: '/calendar' },
    { 
      title: 'Giving', 
      icon: <Heart className="w-8 h-8" />, 
      path: 'https://rcce.churchsuite.com/donate',
      external: true 
    },
    { title: 'Contact', icon: <Mail className="w-8 h-8" />, path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {menuItems.map((item) => (
            item.external ? (
              <a
                key={item.title}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-600">{item.icon}</div>
                <span className="mt-4 text-lg font-medium text-gray-900">{item.title}</span>
              </a>
            ) : (
              <Link
                key={item.title}
                to={item.path}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-600">{item.icon}</div>
                <span className="mt-4 text-lg font-medium text-gray-900">{item.title}</span>
              </Link>
            )
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;