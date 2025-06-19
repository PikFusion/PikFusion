import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import EcommerceKnowledge from './pages/EcommerceKnowledge';
import RestaurantKnowledge from './pages/RestaurantKnowledge';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge-base/ecommerce" element={<EcommerceKnowledge />} />
          <Route path="/knowledge-base/restaurant" element={<RestaurantKnowledge />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;