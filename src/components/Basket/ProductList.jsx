import React, { useState } from 'react';
import './ProductList.scss';

function ProductList({ id, converPrice, onRemove, getPrice, cart }) {
  //제품 수량 체크
  const [stock, setStock] = useState(1);

  // 버튼 클릭 시 수량 +1 or -1
  const onClickPlus = () => {
    setStock(stock + 1);
  };
  const onClickMinus = () => {
    setStock(stock !== 0 ? stock - 1 : (stock = 0));
  };

  const priceSum = stock * cart.price;

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
          <div>{stock}</div>
          <button className="pmButton" onClick={onClickPlus}>
            +
          </button>
        </div>
        <div>
          <span className="productPrice">{converPrice(priceSum)}원</span>
        </div>
        <button
          className="listClearbButton"
          type="button"
          onClick={() => onRemove(id)}
        />
      </li>
    </div>
  );
}

export default ProductList;
