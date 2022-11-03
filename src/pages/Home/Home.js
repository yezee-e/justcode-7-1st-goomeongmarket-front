import React from 'react';
import Header from '../../components/Header/Header';
import './Home.scss';
import Nav from '../../components/Nav/Nav';
import SliderImages from '../../components/SliderImages/SliderImages';
import Maincontent from '../../components/Maincontent/Maincontent';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <SliderImages />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default Home;
