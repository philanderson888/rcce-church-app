import { useState } from 'react';
import Navigation from '../components/Navigation';
import { Calendar as CalendarIcon, MapPin, Clock, ExternalLink, LayoutGrid, List } from 'lucide-react';

interface Location {
  name: string;
  type: string;
  address: string;
  latitude: number;
  longitude: number;
  url: string | null;
}

interface Event {
  id: number;
  name: string;
  starts_at: string;
  ends_at: string;
  all_day: boolean;
  status: string;
  description: string;
  location: Location;
  url: string;
}

// Static event data
const generateStaticEvents = () => {
  const events: Event[] = [];
  const location: Location = {
    name: "The Revive Centre",
    type: "physical",
    address: "47 London Road, Enfield, London, EN2 6DS",
    latitude: 51.6528,
    longitude: -0.0918,
    url: null
  };

  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);

  // Find the next Friday
  while (startDate.getDay() !== 5) { // 5 is Friday
    startDate.setDate(startDate.getDate() + 1);
  }

  // Generate 5 weeks of events
  for (let week = 0; week < 5; week++) {
    // Friday Prayer Meeting
    const fridayDate = new Date(startDate);
    fridayDate.setDate(fridayDate.getDate() + (week * 7));
    fridayDate.setHours(19, 0, 0, 0); // 7 PM

    events.push({
      id: week * 2 + 1,
      name: "Prayer Meeting",
      starts_at: fridayDate.toISOString(),
      ends_at: new Date(fridayDate.getTime() + (2.5 * 60 * 60 * 1000)).toISOString(), // 2.5 hours later
      all_day: false,
      status: "confirmed",
      description: "Join us for our weekly prayer meeting where we come together as a church family to pray and seek God's presence.",
      location: location,
      url: "https://rcce.churchsuite.com/events/prayer-meeting"
    });

    // Sunday Service
    const sundayDate = new Date(fridayDate);
    sundayDate.setDate(sundayDate.getDate() + 2); // Sunday is 2 days after Friday
    sundayDate.setHours(11, 0, 0, 0); // 11 AM

    events.push({
      id: week * 2 + 2,
      name: "Sunday Service",
      starts_at: sundayDate.toISOString(),
      ends_at: new Date(sundayDate.getTime() + (2 * 60 * 60 * 1000)).toISOString(), // 2 hours later
      all_day: false,
      status: "confirmed",
      description: "Join us for our Sunday morning service as we worship together, hear God's Word, and experience His presence.",
      location: location,
      url: "https://rcce.churchsuite.com/events/sunday-service"
    });
  }

  return events;
};

function Calendar() {
  const [view, setView] = useState<'custom' | 'embed'>('custom');
  const staticEvents = generateStaticEvents();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setView('custom')}
                className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                  view === 'custom'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <LayoutGrid className="w-4 h-4 mr-2" />
                Custom View
              </button>
              <button
                onClick={() => setView('embed')}
                className={`inline-flex items-center px-3 py-2 border rounded-md text-sm font-medium ${
                  view === 'embed'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <List className="w-4 h-4 mr-2" />
                Embedded View
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {view === 'custom' ? (
          <div className="space-y-6">
            {staticEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {event.name}
                      </h2>
                      <div className="space-y-2">
                        <div className="flex items-center text-gray-500">
                          <CalendarIcon className="w-5 h-5 mr-2" />
                          <span>{formatDate(event.starts_at)}</span>
                        </div>
                        <div className="flex items-center text-gray-500">
                          <Clock className="w-5 h-5 mr-2" />
                          <span>
                            {formatTime(event.starts_at)} - {formatTime(event.ends_at)}
                          </span>
                        </div>
                        {event.location && (
                          <div className="flex items-center text-gray-500">
                            <MapPin className="w-5 h-5 mr-2" />
                            <span>{event.location.address}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
              src="https://rcce.churchsuite.co.uk/embed/calendar?preview=true"
              width="100%"
              height="800"
              frameBorder="0"
              scrolling="yes"
              style={{ borderWidth: 0 }}
              title="Church Calendar"
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default Calendar;