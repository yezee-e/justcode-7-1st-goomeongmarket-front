function SelectUp({
  title,
  number,
  price,
  increase,
  decrease,
  converPrice,
  isWishAdd,
  wishCountHandler,
  cartCountHandler,
}) {
  return (
    <div className="buttonWrap">
      <div className="selectOption">
        <div className="selectWrap">
          <div className="selectTitleWrap">
            <span className="selectTitle">{title}</span>

            <span className="selectButtonWrap">
              <div>
                <button className="selectMinus" onClick={decrease}>
                  <img src="/icons/minus.png" alt="마이너스" />
                </button>
                <div className="selectNumber">{number}</div>
                <button className="selectPlus" onClick={increase}>
                  <img src="/icons/plus.png" alt="플러스" />
                </button>
              </div>
              <span className="selectPriceWrap">
                <span className="selectPrice">{`${converPrice(price)}원`}</span>
              </span>
            </span>
          </div>
        </div>
        <div className="selectTotalWrap">
          <span className="selectPriceTitle">총 상품금액 :</span>
          <span className="selectTotalPrice">
            {converPrice(number * price)}
          </span>
          <span className="selectTotalWon">원</span>
        </div>
        <div className="selectIconContainer">
          <div className="selectIconWrap">
            <div className="selectButton">
              <button className="selectLike" onClick={wishCountHandler}>
                <span>
                  <img
                    src={
                      isWishAdd
                        ? '/icons/redheart.png'
                        : '/icons/purpleHeart.png'
                    }
                    width="32px"
                    alt="찜버튼"
                  />
                </span>
              </button>
              <div className="selectCartWrap">
                <button className="selectCart" onClick={cartCountHandler}>
                  <span>장바구니 담기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectUp;
