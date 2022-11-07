import React, { useState } from 'react';
import './Incart.scss';

function Incart({ id, setPopUp, title, price, converPrice, img }) {
  const [stock, setStock] = useState(1);
  const [cart, setCart] = useState([]);

  const onClickPlus = () => {
    setStock(stock + 1);
  };
  const onClickMinus = () => {
    setStock(stock !== 0 ? stock - 1 : (stock = 0));
  };

  const priceMultiplQanntity = price * stock;

  const handleCart = () => {
    const cartItem = {
      id: id,
      img: img,
      price: priceMultiplQanntity,
      quantity: stock,
      title: title,
    };

    setCart([...cart, cartItem]);
  };

  return (
    <div className="popUpWraper">
      <div className="popUpBox">
        <div className="popUpBoxTop">
          <span>{title}</span>
          <div className="popUpMarginTop10px popUpCartPriceSection">
            <span>{converPrice(priceMultiplQanntity)}원</span>
            <div className="pmBox">
              <button
                onClick={onClickMinus}
                type="button"
                className="pmBoxInBtnM"
              >
                -
              </button>
              <span>{stock}</span>
              <button
                onClick={onClickPlus}
                type="button"
                className="pmBoxInBtnP"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="popUpBoxMid">
          <span>합계</span>
          <span>{converPrice(priceMultiplQanntity)}원</span>
        </div>
        <div className="popUpBoxBot">
          <button
            onClick={() => setPopUp(false)}
            type="button"
            className="popUpBotSectionBoxDesign popUpBotSectionBoxDesignL"
          >
            취소
          </button>

          <button
            onClick={handleCart}
            type="button"
            className="popUpBotSectionBoxDesign popUpBotSectionBoxDesignR"
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Incart;
