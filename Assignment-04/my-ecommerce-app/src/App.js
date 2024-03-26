import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './component/Homepage';
import ProductPage from './component/ProductPage';

function App() {
  return (
      <Router> 
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/ProductPage" element={<ProductPage />}/>
        </Routes>
      </Router>

  );
}

export default App;
