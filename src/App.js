import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ListStocks from './pages/ListStocks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exat path="/" element={<Homepage />} />
        <Route exat path="/list/:id" element={<ListStocks />} />
      </Routes>
    </div>
  );
}

export default App;
