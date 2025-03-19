import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';

function Sermons() {
  const [apiStatus, setApiStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const testYouTubeAPI = async () => {
      try {
        const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&key=${apiKey}`
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error.message);
        }

        const data = await response.json();
        console.log('YouTube API Test Response:', data);
        setApiStatus('success');
      } catch (error) {
        console.error('YouTube API Error:', error);
        setApiStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'An unknown error occurred');
      }
    };

    testYouTubeAPI();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Sermons</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">YouTube API Test Status</h2>
          
          {apiStatus === 'loading' && (
            <p className="text-gray-600">Testing YouTube API connection...</p>
          )}
          
          {apiStatus === 'success' && (
            <p className="text-green-600">✓ YouTube API connection successful! Check the console for the test response.</p>
          )}
          
          {apiStatus === 'error' && (
            <div className="text-red-600">
              <p>✗ YouTube API connection failed</p>
              <p className="mt-2 text-sm">{errorMessage}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Sermons;