import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddMovie from './components/AddMovie';

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/add-movie' element={<AddMovie />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
