import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import './Maincontent.scss';

function Maincontent() {
  const [data, setData] = useState([]);

  const mockData = `http://localhost:3000/data/mockProduct.json`; //수정1 데이터주소

  //mock데이터 들고오기
  useEffect(() => {
    fetch(mockData)
      .then(res => res.json())
      .then(json => setData(json.data));
  }, []);

  // console.log(data[2].title);
  //수정2 키값
  return (
    <div>
      <div className="MaincontentWrap">
        <div className="MainContentBox">
          <div className="MainContentTitle">
            {data.map((titleName, index) => {
              const { titlename } = titleName;

              return (
                <span>
                  {index}
                  {titlename}
                </span>
              );
            })}
          </div>
          <div className="productInformation">
            {data.map(values => {
              const {
                id,
                name,
                sub_name,
                product_img,
                price,
                country_id,
                sale,
              } = values;
              return (
                <CardList
                  key={id}
                  id={id}
                  name={name}
                  sub_name={sub_name}
                  product_img={product_img}
                  price={price}
                  country_id={country_id}
                  sale={sale}
                />
              );
            })}
          </div>

          {/* <div className="productBox">
            <img className="mainProductImg" alt="" src="/img/예제.jpg" />
            <h3 className="productName">상품 제목</h3>
            <span>{data.price}</span>
            <button className="cart" />
          </div>

          <div className="productBox">
            <img className="mainProductImg" alt="" src="/img/예제.jpg" />
            <h3 className="productName">상품 제목</h3>
            <span>가격</span>
            <button className="cart" />
          </div>

          <div className="productBox">
            <img className="mainProductImg" alt="" src="/img/예제.jpg" />
            <h3 className="productName">상품 제목</h3>
            <span>가격</span>
            <button className="cart" />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
