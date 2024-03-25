// import React from 'react';
// import Homepage from './component/Homepage'
// import Productpage from './component/Productpage'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path ="/" element ={<Homepage></Homepage>}></Route>
//         <Route path="/Productpage" element={<Productpage></Productpage>}></Route>
//       </Routes>
//     </Router>
//   );}

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './component/Homepage';
import ProductPage from './component/Productpage'; 


function App() {
  return (
      <Router> 
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/products" element={<ProductPage />}/>
        </Routes>
      </Router>

  );
}

export default App;
