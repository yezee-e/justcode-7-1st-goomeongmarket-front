import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import Nav from "../../components/Nav/Nav";
import SliderImages from "../../components/SliderImages/SliderImages";
import Footer from "../../components/Footer/Footer";
import CardList from "../../components/Maincontent/CardList";
import Dropdown from "../../components/Category/Dropdown";
import Maincontent from "../../components/Maincontent/Maincontent";

function Home() {
  const [data, setData] = useState([]);

  const filterList = ["카테고리", "가격", "이름순", "해택"]; //대장카테고리

  const mockData = `http://localhost:3000/data/mockData.json`;

  //mock데이터 들고오기
  useEffect(() => {
    fetch(mockData)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  });
  return (
    <div className="mainPages">
      <Nav />
      <Header />
      <SliderImages />
      <Maincontent />
      <div className="wrap">
        <div>
          {filterList.map((list) => (
            <Dropdown key={list} list={list} data={data} setData={setData} />
          ))}
        </div>

        <div className="MaincontentWrap">
          <div className="MainContentBox">
            <div className="MainContentTitle">
              <span>제목 들어오는 자리</span>
            </div>
            <div className="productInformation">
              {data.map((values) => {
                const { id, title, price } = values;
                return <CardList key={id} title={title} price={price} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <CardList /> */}
      <Footer />
    </div>
  );
}

export default Home;
