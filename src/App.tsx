import React from 'react';

import {Routes, Route, BrowserRouter } from "react-router-dom";
import { NavBarLoginContainer } from './module/home/components/navBar/container/navBar.container';
import Footer from './module/home/components/footer/footer';
import { LoginPage } from './module/auth/page';
import { HomePage } from './module/home/page';


function App() {
  return (
 
    <div className="font pb-5">
      <NavBarLoginContainer />
      <BrowserRouter>
      <Routes>
      <Route index element={<HomePage />} />
      <Route path='/login' element={<LoginPage/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
   

  );
}

export default App;
