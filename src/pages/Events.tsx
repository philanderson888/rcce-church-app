import Navigation from '../components/Navigation';

function Events() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Events</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <iframe 
            src="https://rcce.churchsuite.com/embed/calendar/events?body_bgcolor=F5F6F7&categories=&event_bgcolor=FFFFFF&event_border=&featured=NULL&filters_bgcolor=FFFFFF&heading_color=444444&icon_color=BBBBBB&layout=grid&merge=signup_to_sequence&num_results=&show_categories=0&show_search=0&show_sites=0&text_color=666666" 
            className="events-iframe"
            title="Church Events Calendar"
          />
        </div>
      </main>
    </div>
  );
}

export default Events;