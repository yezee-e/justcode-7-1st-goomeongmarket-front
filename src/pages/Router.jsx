import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Mainlogin from './Mainlogin/Mainlogin';
import Mainsignup from './Mainsignup/Mainsignup';
import Mainbasket from './Mainbasket/Mainbasket';
import Incart from '../components/Maincontent/Incart';
import ProductDetailedPage from '../components/ProductDetailedPage/ProductDetailedPage';

function Router() {
  const converPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  const [cart, setCart] = useState([]);
  const [data, setData] = useState([]);

  const mockData = `http://localhost:3000/data/mockData.json`;

  useEffect(() => {
    fetch(mockData)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              data={data}
              cart={cart}
              setCart={setCart}
              converPrice={converPrice}
            />
          }
        />
        <Route
          path="/basket"
          element={
            <Mainbasket
              cart={cart}
              converPrice={converPrice}
              setCart={setCart}
            />
          }
        />
        <Route path="/signup" element={<Mainsignup />} />
        <Route path="/login" element={<Mainlogin />} />
        <Route
          path="/menu"
          element={
            <Menu data={data} setData={setData} converPrice={converPrice} />
          }
        />
        <Route path="/incart" element={<Incart />} />
        <Route
          path="/detail/:id"
          element={<ProductDetailedPage converPrice={converPrice} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
