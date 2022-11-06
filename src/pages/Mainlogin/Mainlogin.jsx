import React from 'react';
import Header from '../../components/Header/Header';
import './Mainlogin.scss';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Login from '../../components/Login/Login';

function Mainlogin() {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default Mainlogin;
