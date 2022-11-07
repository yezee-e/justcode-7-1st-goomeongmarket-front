import React from 'react';
import CardList from './CardList';
import './Maincontent.scss';

function Maincontent({ data, converPrice }) {
  // console.log(data[2].title);
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
              const { id, title, price, img } = values;
              return (
                <CardList
                  converPrice={converPrice}
                  key={id}
                  title={title}
                  price={price}
                  img={img}
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

          // <div className="productBox">
          //   <img className="mainProductImg" alt="" src="/img/예제.jpg" />
          //   <h3 className="productName">상품 제목</h3>
          //   <span>가격</span>
          //   <button className="cart" />
          // </div> */}
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
