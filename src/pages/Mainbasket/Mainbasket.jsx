import React from 'react';
import Header from '../../components/Header/Header';
import './Mainbasket.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Basket from '../../components/Basket/Basket';

function Mainbasket({ cart, converPrice }) {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <Basket cart={cart} converPrice={converPrice} />
      <Footer />
    </div>
  );
}

export default Mainbasket;
