import React, { useState } from 'react';
import Incart from './Incart';

import './CardList.scss';

function CardList({ id, img, title, price, converPrice }) {
  const [popUp, setPopUp] = useState(false);

  return (
    <div className="productBox">
      <img className="mainProductImg" alt="" src={img} />
      <h3 className="productName">{title}</h3>
      <span>{converPrice(price)}</span>
      <button
        onClick={() => {
          setPopUp(true);
        }}
        type="button"
        className="cart"
      />
      {popUp === true ? (
        <Incart
          img={img}
          key={id}
          title={title}
          setPopUp={setPopUp}
          price={price}
          converPrice={converPrice}
        />
      ) : null}
    </div>
  );
}

export default CardList;
