import React from 'react';
import CardList from './CardList';
import './Maincontent.scss';

function Maincontent({ data, converPrice, cart, setCart }) {
  return (
    <div>
      <div className="MaincontentWraper">
        <div className="MainContentBox">
          <div className="MainContentTitle">
            {data.map((titleName, index) => {
              const { titlename } = titleName;

              return (
                <span>
                  {index}
                  {titlename}
                </span>
              );
            })}
          </div>

          <div className="productInformation">
            {data.map(values => {
              const { id, title, price, img } = values;
              return (
                <CardList
                  converPrice={converPrice}
                  key={id}
                  title={title}
                  price={price}
                  img={img}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
