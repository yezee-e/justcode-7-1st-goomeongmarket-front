import React from 'react';
import './Maincontent.scss';

function Maincontent() {
  return (
    <div className="MaincontentWrap">
      <div className="MainContentBox">
        <div className="MainContentTitle">
          <span>제목 들어오는 자리</span>
        </div>

        <div className="productInformation">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
