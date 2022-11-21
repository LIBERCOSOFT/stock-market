import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ListFilteredStocks from './pages/ListFilteredStocks';
import ListAllStocks from './pages/ListAllStocks';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exat path="/" element={<Homepage />} />
        <Route exat path="/listall" element={<ListAllStocks />} />
        <Route exat path="/list/:id" element={<ListFilteredStocks />} />
      </Routes>
    </div>
  );
}

export default App;
