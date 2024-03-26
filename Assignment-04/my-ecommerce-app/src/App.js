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
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';

function App() {
  return (
      <Router> 
        <Routes>
            <Route path="/" element={<Homepage />} /> 
          <Route path="/Homepage" element={<Homepage />} /> 
          <Route path="/Productpage" element={<Productpage />}/>
        </Routes>
      </Router>

  );
}

export default App;
