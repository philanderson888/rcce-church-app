import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Sermons from './pages/Sermons';
import Discover from './pages/Discover';
import Livestream from './pages/Livestream';
import Giving from './pages/Giving';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/livestream" element={<Livestream />} />
        <Route path="/giving" element={<Giving />} />
      </Routes>
    </Router>
  );
}

export default App;