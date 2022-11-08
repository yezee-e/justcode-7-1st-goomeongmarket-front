import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './Menu.scss';
import Nav from '../../components/Nav/Nav';
import SliderImages from '../../components/SliderImages/SliderImages';
import Footer from '../../components/Footer/Footer';
import axios from 'axios';

import TabContent from '../../components/Maincontent/TabContent';
import { useParams } from 'react-router-dom';

function Menu({ data, setData, setSearch, converPrice }) {
  const params = useParams();
  const [tab, setTab] = useState(0);
  const [newOne, setNewOne] = useState([]);
  const [best, setBest] = useState([]);
  const [cheap, setCheap] = useState([]);

  let { tabId } = params;

  //😌 진짜 구현해볼 api
  // useEffect(() => {
  //   let { tabId } = params;
  //   fetch(`${"백엔드api"}/${tabId}`)
  //     .then(res => res.json())
  //     .then(res => setNewOne(res.data))
  // }, [newOne]);

  // useEffect(() => {
  //   let { tabId } = params;
  //   fetch(`${"백엔드api"}/${tabId}`)
  //     .then(res => res.json())
  //     .then(res => setBest(res.data))
  // }, [best]);

  // useEffect(() => {
  //  let { tabId } = params;
  //   fetch(`${"백엔드api"}/${tabId}`)
  //     .then(res => res.json())
  //     .then(res => setCheap(res.data))
  // }, [cheap]);

  //😌 axios로 한번에 여러 api받아오기
  // useEffect(() => {
  //   axios.all(
  //     [
  //       axios.get('api주소'),
  //       axios.get('api 주소2'),
  //       axios.get('api 주소3'),
  //     ].then(
  //       axios.spread((res1, res2, res3) => {
  //         setURL1(res1.data);
  //         setURL2(res2.data);
  //         setURL3(res3.data);
  //       })
  //     )
  //   );
  // }, []);

  //😌가짜 목데이터
  useEffect(() => {
    fetch('http://localhost:3000/data/mockNew.json')
      .then(res => res.json())
      .then(res => setNewOne(res.data));
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/data/mockBest.json')
      .then(res => res.json())
      .then(res => setBest(res.data));
  }, []);
  useEffect(() => {
    fetch('http://localhost:3000/data/mockCheap.json')
      .then(res => res.json())
      .then(res => setCheap(res.data));
  }, []);

  return (
    <div className="menuPages">
      <Nav setSearch={setSearch} />
      <Header setSearch={setSearch} setTab={setTab} tabId={tabId} />
      <SliderImages />
      {tab == 0 && (
        <TabContent
          data={data}
          setData={setData}
          converPrice={converPrice}
          URL={newOne}
          tabTitle={'신상품'}
        />
      )}
      {tab == 1 && (
        <TabContent
          data={data}
          setData={setData}
          converPrice={converPrice}
          URL={best}
          tabTitle={'베스트'}
        />
      )}
      {tab == 2 && (
        <TabContent
          data={data}
          setData={setData}
          converPrice={converPrice}
          URL={cheap}
          tabTitle={'알뜰쇼핑'}
        />
      )}

      <Footer />
    </div>
  );
}

export default Menu;
