import React from 'react';
import Navigation from '../components/Navigation';

function Discover() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Discover</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-600">Discover content coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default Discover;