import React, { useState } from 'react';
import './ProductList.scss';

function ProductList({
  id,
  converPrice,
  title,
  price,
  picture,
  onRemove,
  getPrice,
}) {
  //제품 수량 체크
  const [stock, setStock] = useState(1);

  // 버튼 클릭 시 수량 +1 or -1
  const onClickPlus = () => {
    setStock(stock + 1);
  };
  const onClickMinus = () => {
    setStock(stock - 1);
  };

  const prodSumPrice = () => {
    getPrice(priceSum);
  };

  const priceSum = stock * price;

  return (
    <li className="productLi">
      <input className="checkBoxBtn" type="checkbox" />
      <img className="produntImg" alt="" src={picture} />
      <div className="productTitle">{title}</div>
      <div className="pmButtonBox">
        <button className="pmButton" onClick={onClickMinus}>
          -
        </button>
        <div>{stock}</div>
        <button className="pmButton" onClick={onClickPlus}>
          +
        </button>
      </div>
      <div>
        <span className="productPrice" onChange={prodSumPrice()}>
          {converPrice(priceSum)}원
        </span>
      </div>
      <button
        className="listClearbButton"
        type="button"
        onClick={() => onRemove(id)}
      />
    </li>
  );
}

export default ProductList;
