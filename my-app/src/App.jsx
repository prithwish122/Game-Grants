import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import JoinPage from './components/JoinPage';
import InvestorsPage from './components/InvestorsPage'; 

function App() {
  return (
    <Router>
      <div
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://miro.medium.com/v2/resize:fit:1400/1*N2onDhIb_hd4FedS4rmNKw.gif)' }}
    >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/investors" element={<InvestorsPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
