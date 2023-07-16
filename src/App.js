import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import MainPage from './MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="/Page4" element={<Page4 />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
