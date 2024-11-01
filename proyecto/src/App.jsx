import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home, Blog, Planeta, MisionVision, Explora } from './Page';


const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }} className="flex">
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3, 
          zIndex: -1, 
        }} />

        <Navbar />
        <div className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Planeta" element={<Planeta />} />
            <Route path="/MisionVision" element={<MisionVision />} />
            <Route path="/Explora" element={<Explora />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
