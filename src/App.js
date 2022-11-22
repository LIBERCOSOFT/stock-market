import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ListFilteredStocks from './pages/ListFilteredStocks';
import ListAllStocks from './pages/ListAllStocks';
import StockDetails from './pages/StockDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listall" element={<ListAllStocks />} />
        <Route path="/list/:id" element={<ListFilteredStocks />} />
        <Route path="/details/:symbol" element={<StockDetails />} />
      </Routes>
    </div>
  );
}

export default App;
