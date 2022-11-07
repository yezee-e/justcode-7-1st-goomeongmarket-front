import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Mainlogin from './Mainlogin/Mainlogin';
import Mainsignup from './Mainsignup/Mainsignup';
import Mainbasket from './Mainbasket/Mainbasket';
import ProductDetailedPage from '../components/ProductDetailedPage/ProductDetailedPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/basket" element={<Mainbasket />} />
        <Route path="/signup" element={<Mainsignup />} />
        <Route path="/login" element={<Mainlogin />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/detail/:id" element={<ProductDetailedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
