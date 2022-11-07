import React, { useState } from 'react';
import Incart from './Incart';

import './CardList.scss';

function CardList({ title, price }) {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="productBox">
      <img className="mainProductImg" alt="" src="/img/예제.jpg" />
      <h3 className="productName">{title}</h3>
      <span>{price}</span>
      <button
        onClick={() => {
          setPopUp(true);
        }}
        type="button"
        className="cart"
      />
      {popUp === true ? (
        <Incart title={title} setPopUp={setPopUp} price={price} />
      ) : null}
    </div>
  );
}

export default CardList;
