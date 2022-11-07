import React, { useState, useEffect } from 'react';
import './Basket.scss';
import ProductList from './ProductList';
function Basket() {
  const [basket, setBasket] = useState([]);
  const [payPrice, setPayPrice] = useState(0);

  //자식 컴포넌트에서 값 받아오는 함수
  const getPrice = num => {
    setPayPrice(num);
  };

  const cartMock = `/data/cartData.json`;

  // mockdata fetch
  useEffect(() => {
    fetch(cartMock)
      .then(res => res.json())
      .then(json => setBasket(json.data));
  }, []);

  // 가격표 3번째 자리에 쉼표 찍는 함수
  const converPrice = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // 장바구니 삭제하는 함수
  const onRemove = id => {
    setBasket(basket.filter(prod => prod.id !== id));
  };

  return (
    <div className="boxSizing">
      <div className="basketBody">
        <div className="cartNameBox">
          <h2 className="letterSpacing fontSettingh2">장바구니</h2>
        </div>
        <div className="cartBoxWraper">
          <div className="cartBoxLeft">
            <div className="selectBox">
              <input className="checkBoxBtnHead" type="checkbox" id="check1" />
              <label form="check1" />
              <span>전체선택(0/0)</span>
              <span className="borderRightInBasket" />
              <button className="selectDelBox">선택삭제</button>
            </div>
            <div className="productBox">
              <ul>
                {basket.length === 0 ? (
                  <div className="noProdInCart">
                    <h4>장바구니에 담긴 상품이 없습니다.</h4>
                  </div>
                ) : (
                  basket.map(values => {
                    const { key, id, title, price, picture } = values;
                    return (
                      <ProductList
                        converPrice={converPrice}
                        key={key}
                        id={id}
                        title={title}
                        price={price}
                        picture={picture}
                        onRemove={onRemove}
                        getPrice={getPrice}
                      />
                    );
                  })
                )}
              </ul>
            </div>
          </div>

          <div className="cartBoxRight">
            <div className="productInformationBox">
              <div className="cartBoxRightWraper">
                <div className="cartBoxRightHead">
                  <div className="baesong">
                    <span className="locationIcon" />
                    <h4>배송지</h4>
                  </div>
                  <strong>배송지를 등록</strong>
                  하고
                  <br />
                  <span>구매 가능한 상품을 확인하세요!</span>
                  <button className="addressBox">
                    <span>
                      <img
                        className="addressBoxMagnifier"
                        alt=""
                        src="./img/free-icon-magnifier.png"
                      />
                      주소 검색
                    </span>
                  </button>
                </div>

                <div className="cartBoxRightBody">
                  <div className="cartBoxTop">
                    <span>상품금액</span>
                    <span>{converPrice(payPrice)}원</span>
                  </div>
                  <div className="cartBoxMid">
                    <span>배송비</span>
                    <span>{converPrice(3000)}원</span>
                  </div>
                  <p className="benefits">
                    30,000원 추가주문 시,<strong>무료배송</strong>
                  </p>
                  <div className="cartBoxBot">
                    <span>결제예정금액</span>
                    <span>{converPrice(19000)}원</span>
                  </div>
                </div>
              </div>

              <div className="cartBoxRightFoo">
                <button className="cartBoxRightFooBtn" type="button">
                  <span>배송지를 입력해주세요</span>
                </button>
                <ul className="listController">
                  <li>[주문완료]상태일 경우에만 주문 취소 가능합니다.</li>
                  <li>
                    [마이마켓>주문내역 상세페이지]에서 직접 취소하실 수
                    있습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
