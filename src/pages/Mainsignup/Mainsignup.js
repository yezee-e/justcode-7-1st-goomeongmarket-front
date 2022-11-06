import React from 'react';
import Header from '../../components/Header/Header';
import './Mainsignup.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Signup from '../../components/Signup/Signup';

function Mainsignup() {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <Signup />
      <Footer />
    </div>
  );
}

export default Mainsignup;
