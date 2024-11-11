// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Home from './pages/Home';
import List from './pages/List';
import PokemonDetail from './pages/PokemonDetail';

const App = () => (
  <Router>
    <div className="App">
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
