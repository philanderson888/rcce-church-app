import React from 'react';
import { Link } from 'react-router-dom';
import { Church, Radio, Compass, Heart } from 'lucide-react';

function Home() {
  const menuItems = [
    { title: 'Sermons', icon: <Radio className="w-8 h-8" />, path: '/sermons' },
    { title: 'Discover', icon: <Compass className="w-8 h-8" />, path: '/discover' },
    { title: 'Livestream', icon: <Church className="w-8 h-8" />, path: '/livestream' },
    { title: 'Giving', icon: <Heart className="w-8 h-8" />, path: '/giving' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Welcome</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-gray-600">{item.icon}</div>
              <span className="mt-4 text-lg font-medium text-gray-900">{item.title}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;