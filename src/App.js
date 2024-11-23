import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
   const [side_bar, setSidebar] = useState(true);

   return (
      <BrowserRouter>
         {/* Navbar should be outside of Routes */}
         <Navbar setSidebar={setSidebar} />

         {/* Routes should only contain Route components */}
         <Routes>
            <Route path='/' element={<Home side_bar={side_bar} />} />
            <Route path='/delta/:categoryid/:videoid' element={<Video />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
