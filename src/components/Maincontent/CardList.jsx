import React, { useState } from 'react';
import Incart from './Incart';

import './CardList.scss';

function CardList({ id, title, img, price, converPrice, cart, setCart, key }) {
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
          cart={cart}
          setCart={setCart}
          key={key}
          id={id}
          setPopUp={setPopUp}
          converPrice={converPrice}
          price={price}
          img={img}
          title={title}
        />
      ) : null}
    </div>
  );
}

export default CardList;
