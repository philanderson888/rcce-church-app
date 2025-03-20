import { Link, useLocation } from 'react-router-dom';
import { Home, Radio, Users, Calendar as CalendarIcon, Church, Heart, Mail, PartyPopper } from 'lucide-react';

function Navigation() {
  const location = useLocation();
  
  const menuItems = [
    { title: 'Livestream', icon: <Church className="w-6 h-6" />, path: '/livestream' },
    { title: 'Sermons', icon: <Radio className="w-6 h-6" />, path: '/sermons' },
    { title: 'Connect', icon: <Users className="w-6 h-6" />, path: '/connect' },
    { title: 'Events', icon: <PartyPopper className="w-6 h-6" />, path: '/events' },
    { title: 'Calendar', icon: <CalendarIcon className="w-6 h-6" />, path: '/calendar' },
    { 
      title: 'Giving', 
      icon: <Heart className="w-6 h-6" />, 
      path: 'https://rcce.churchsuite.com/donate',
      external: true 
    },
    { title: 'Contact', icon: <Mail className="w-6 h-6" />, path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Home className="w-6 h-6 text-gray-600 hover:text-gray-900" />
          </Link>
          
          <div className="hidden lg:flex space-x-6">
            {menuItems.map((item) => (
              item.external ? (
                <a
                  key={item.title}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </a>
              ) : (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`flex items-center space-x-2 text-sm font-medium ${
                    location.pathname === item.path
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              )
            ))}
          </div>
          
          <div className="lg:hidden flex space-x-4">
            {menuItems.map((item) => (
              item.external ? (
                <a
                  key={item.title}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item.icon}
                </a>
              ) : (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.icon}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;