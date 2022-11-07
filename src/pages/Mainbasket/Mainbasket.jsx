import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Mainbasket.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Basket from '../../components/Basket/Basket';

function Mainbasket() {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <Basket />
      <Footer />
    </div>
  );
}

export default Mainbasket;
