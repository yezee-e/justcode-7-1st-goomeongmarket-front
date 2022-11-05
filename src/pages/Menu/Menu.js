import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Menu.scss';
import Nav from '../../components/Nav/Nav';
import SliderImages from '../../components/SliderImages/SliderImages';
import Footer from '../../components/Footer/Footer';
import CardList from '../../components/Maincontent/CardList';
import Dropdown from '../../components/Category/Dropdown';
import Maincontent from '../../components/Maincontent/Maincontent';

function Menu() {
  const [data, setData] = useState([]);

  const filterList = ['카테고리', '가격', '이름순', '해택']; //대장카테고리

  const mockData = `http://localhost:3000/data/mockData.json`;

  //mock데이터 들고오기
  useEffect(() => {
    fetch(mockData)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      {/* <SliderImages /> */}
      <div className="mainMenu">
        <div className="wrap">
          <div className="categoryBox">
            {filterList.map(list => (
              <Dropdown key={list} list={list} data={data} setData={setData} />
            ))}
          </div>

          <div className="MaincontentWrap">
            <div className="MainContentBox">
              <div className="productInformation">
                {data.map(values => {
                  const { id, title, price } = values;
                  return <CardList key={id} title={title} price={price} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Menu;
