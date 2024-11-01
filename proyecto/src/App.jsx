import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Home, Blog, Planeta, MisionVision, Explora } from './Page';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#add8e6' }} className="flex flex-col"> {/* Color azul claro */}
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
        <div className="flex-grow container mx-auto p-4 mt-20"> {/*margen superior*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Planeta" element={<Planeta />} />
            <Route path="/MisionVision" element={<MisionVision />} />
            <Route path="/Explora" element={<Explora />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

