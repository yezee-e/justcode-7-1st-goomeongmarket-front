import { useState } from 'react';
import SelectUp from './SelectUp';

function SelectDown({
  title,
  number,
  price,
  decrease,
  increase,
  converPrice,
  isWishAdd,
  wishCountHandler,
  cartCountHandler,
}) {
  const [selectClick, setSelectClick] = useState(false);

  return (
    <div className="selectContainer">
      <div className="buttonWrap">
        <button
          className="selectUp"
          onClick={() => setSelectClick(!selectClick)}
        >
          <span>상품 선택</span>
          <img src={'/icons/selectUp.png'} alt="업" />
        </button>

        {selectClick && (
          <SelectUp
            title={title}
            number={number}
            price={price}
            increase={increase}
            decrease={decrease}
            converPrice={converPrice}
            isWishAdd={isWishAdd}
            wishCountHandler={wishCountHandler}
            cartCountHandler={cartCountHandler}
          />
        )}
      </div>
    </div>
  );
}

export default SelectDown;
