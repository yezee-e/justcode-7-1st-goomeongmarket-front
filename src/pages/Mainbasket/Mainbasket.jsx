import React from 'react';
import Header from '../../components/Header/Header';
import './Mainbasket.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Basket from '../../components/Basket/Basket';

function Mainbasket({ cart, converPrice, setCart, count, setCount }) {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <Basket
        cart={cart}
        converPrice={converPrice}
        setCart={setCart}
        count={count}
        setCount={setCount}
      />
      <Footer />
    </div>
  );
}

export default Mainbasket;
