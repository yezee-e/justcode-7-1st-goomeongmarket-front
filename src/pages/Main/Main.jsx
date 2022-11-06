import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Main.scss';
import Nav from '../../components/Nav/Nav';
import SliderImages from '../../components/SliderImages/SliderImages';
import Footer from '../../components/Footer/Footer';

import Maincontent from '../../components/Maincontent/Maincontent';

function Main() {
  const [data, setData] = useState([]);

  const filterList = ['카테고리', '가격', '이름순', '해택']; //대장카테고리

  const mockData = `http://localhost:3000/data/mockData.json`;

  //mock데이터 들고오기
  useEffect(() => {
    fetch(mockData)
      .then(res => res.json())
      .then(json => setData(json.data));
  });
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

export default Main;
