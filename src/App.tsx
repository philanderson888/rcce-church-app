import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sermons from './pages/Sermons';
import Connect from './pages/Connect';
import Events from './pages/Events';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import Livestream from './pages/Livestream';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livestream" element={<Livestream />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;