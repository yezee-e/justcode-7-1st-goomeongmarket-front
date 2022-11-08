//각 제품들
//api 받아오면 상품 하나하나 보여줄수있다
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../../Category/Dropdown.scss';
import './CardList.scss';

function CardList({
  id,
  name,
  sub_name,
  product_img,
  price,
  country_id,
  sale,
}) {
  const navigate = useNavigate();
  const moveDetail = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="productBox">
      <img
        className="mainProductImg"
        alt=""
        src={product_img}
        onClick={moveDetail}
      />
      <h3 className="productName">{name}</h3>
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
