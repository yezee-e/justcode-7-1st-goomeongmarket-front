import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
import SliderImages from '../../components/SliderImages/SliderImages';
import Footer from '../../components/Footer/Footer';

import Maincontent from '../../components/Maincontent/Maincontent';

function Main({ data }) {
  const filterList = ['카테고리', '가격', '이름순', '해택']; //대장카테고리

  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <SliderImages />
      <Maincontent data={data} />
      <Footer />
    </div>
  );
}

export default Main;
