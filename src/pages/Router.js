import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Mainlogin from './Mainlogin/Mainlogin';
import Mainsignup from './Mainsignup/Mainsignup';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Mainsignup />} />
        <Route path="/login" element={<Mainlogin />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
