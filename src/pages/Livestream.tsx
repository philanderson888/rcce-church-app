import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import { Calendar, Play } from 'lucide-react';

interface LiveStreamStatus {
  isLive: boolean;
  videoId?: string;
}

function Livestream() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liveStatus, setLiveStatus] = useState<LiveStreamStatus>({ isLive: false });
  
  // Get next Sunday at 11am
  const getNextSunday = () => {
    const now = new Date();
    const nextSunday = new Date(now);
    nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
    nextSunday.setHours(11, 0, 0, 0);
    return nextSunday;
  };

  const isSundayServiceTime = () => {
    const now = new Date();
    return now.getDay() === 0 && now.getHours() >= 11 && now.getHours() < 14;
  };

  const checkLiveStream = async () => {
    try {
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      const channelId = 'UCsQLfjesONWETmed0386WqA';
      
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Failed to check livestream status');
      }

      const data = await response.json();
      const isLive = data.items && data.items.length > 0;
      setLiveStatus({
        isLive,
        videoId: isLive ? data.items[0].id.videoId : undefined
      });
      setIsLoading(false);
    } catch (err) {
      console.error('Error checking livestream:', err);
      setError('Failed to check livestream status');
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial check
    checkLiveStream();

    // Set up polling every 10 seconds
    const interval = setInterval(checkLiveStream, 10000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
  };

  const nextSunday = getNextSunday();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Livestream</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {isLoading ? (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-gray-600">Checking livestream status...</p>
          </div>
        ) : error ? (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <p className="text-red-600">{error}</p>
          </div>
        ) : liveStatus.isLive ? (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${liveStatus.videoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4">
                <p className="text-green-600 font-semibold flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse"></span>
                  Live Now
                </p>
              </div>
            </div>
          </div>
        ) : isSundayServiceTime() ? (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Service Not Live Yet</h2>
              <p className="text-gray-600">
                Our Sunday service will begin shortly. Please check back in a few minutes.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Next Live Service</h2>
              <p className="text-gray-600 mb-6">
                Join us for our next Sunday service on {formatDate(nextSunday)}
              </p>
              <div className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 cursor-not-allowed">
                <Play className="w-5 h-5 mr-2" />
                Livestream Not Available
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Livestream;