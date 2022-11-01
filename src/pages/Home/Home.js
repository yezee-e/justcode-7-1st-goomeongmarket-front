import React from 'react';
import Header from './Header';
import './Home.scss';
import Nav from './Nav';
import SliderImages from './SliderImages';
import Maincontent from './Maincontent';

function Home() {
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <SliderImages />
      <Maincontent />
    </div>
  );
}

export default Home;
