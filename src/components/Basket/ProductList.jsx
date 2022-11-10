import React, { useState, useEffect } from 'react';
import './ProductList.scss';

function ProductList({
  converPrice,
  onRemove,
  cart,
  setLiveValue,
  count,
  setCount,
}) {
  //제품 수량 체크
  // let [count, setCount] = useState(1);
  let [currentPrice, setCurrentPrice] = useState(0);

  // 버튼 클릭 시 수량 +1 or -1
  const onClickPlus = () => {
    setCount(count + 1);
  };
  const onClickMinus = () => {
    setCount(count !== 0 ? count - 1 : (count = 0));
  };

  const priceSum = count * cart.price;
  // console.log(cart.id);
  useEffect(() => {
    setLiveValue(priceSum);
  }, priceSum);

  const totalQuantity = count + count;

  return (
    <div className="boxSizing">
      <li className="productLi">
        <input className="checkBoxBtn" type="checkbox" />
        <img className="produntImg" alt="" src={cart.img} />
        <div className="productTitle">{cart.title}</div>
        <div className="pmButtonBox">
          <button className="pmButton" onClick={onClickMinus}>
            -
          </button>
          <div>{count}</div>
          <button className="pmButton" onClick={onClickPlus}>
            +
          </button>
        </div>
        <div className="productPriceBox">
          <span className="productPrice">{converPrice(priceSum)}</span>
        </div>
        <button
          className="listClearbButton"
          type="button"
          onClick={() => onRemove(cart.id)}
        />
      </li>
    </div>
  );
}

export default ProductList;
