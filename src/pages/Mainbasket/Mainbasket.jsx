import React from 'react';
import Header from '../../components/Header/Header';
import './Mainbasket.scss';
import Nav from '../../components/Nav/Nav';
import SliderImages from '../../components/SliderImages/SliderImages';
import Footer from '../../components/Footer/Footer';
import Basket from '../../components/Basket/Basket';

function Mainbasket() {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <SliderImages />
      <Basket />
      <Footer />
    </div>
  );
}

export default Mainbasket;
