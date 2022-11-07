//각 제품들
//api 받아오면 상품 하나하나 보여줄수있다
import React from 'react';
import '../Category/Dropdown.scss';
import './CardList.scss';

function CardList({ title, price }) {
  return (
    <div className="productBox">
      <img className="mainProductImg" alt="" src="/img/예제.jpg" />
      <h3 className="productName">{title}</h3>
      <span>{price}</span>
      <button
        onClick={() => {
          alert('준비중입니다.');
        }}
        type="button"
        className="cart"
      />
    </div>
  );
}

export default CardList;
