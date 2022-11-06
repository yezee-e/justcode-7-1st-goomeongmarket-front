import React, { useState } from 'react';
import './ProductList.scss';

function ProductList({ id, converPrice, title, price, picture, onRemove }) {
  const [stock, setStock] = useState(1);
  const onClickPlus = () => {
    setStock(stock + 1);
  };
  const onClickMinus = () => {
    setStock(stock - 1);
  };

  return (
    <li className="productLi">
      <input className="checkBoxBtn" type="checkbox" id="check2" />
      <label form="check2"></label>
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
        <span className="productPrice">{converPrice(stock * price)}원</span>
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
