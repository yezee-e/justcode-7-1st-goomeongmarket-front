import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  const NavigateBasket = useNavigate();

  const goToBasket = () => {
    NavigateBasket('/basket');
  };

  const [isVisible, setIsVisible] = useState(false); // Nav가 보일지말지 정하는 setter

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      <div className="fontAdd">
        <div className="headerWrap">
          <div className="hederLeft">
            <div className="categoryWraper">
              <span className="hamburgerIcon" />
              <span className="categoryBox">카테고리</span>
              <div className="dropBox">
                <div className="dropBoxDiv">
                  <span className="categoryContent">선물하기</span>
                </div>
                <div className="dropBoxDiv">
                  <span className="categoryContent">채소</span>
                </div>
                <div className="dropBoxDiv">
                  <span className="categoryContent">과일 견과 쌀</span>
                </div>
                <div className="dropBoxDiv">
                  <span className="categoryContent">수산 해산 건어물</span>
                </div>
                <div className="dropBoxDiv">
                  <span className="categoryContent">정육 계란</span>
                </div>
                <div className="dropBoxDiv">
                  <span className="categoryContent">국 반찬 메인요리</span>
                </div>
              </div>
            </div>
          </div>

          <ul className="headerCenter">
            <li className="headerCenterBox">
              <Link className="linkToMenu" to="/product/new">
                신상품
              </Link>
            </li>
            <li className="headerCenterBox">
              <Link className="linkToMenu" to="/menu">
                베스트
              </Link>
            </li>
            <li className="headerCenterBox">
              <Link className="linkToMenu" to="/menu">
                알뜰쇼핑
              </Link>
            </li>
            <li className="headerCenterBox">
              <Link className="linkToMenu" to="/menu">
                특가혜택
              </Link>
            </li>
          </ul>
          <div
            onClick={() => alert('준비중입니다.')}
            href="www.naver.com"
            className="headerRight"
          >
            <span className="colorChagne">샛별 · 낮</span>
            배송안내
          </div>
        </div>

        <div
          style={
            isVisible === true
              ? { visibility: 'visible' }
              : { visibility: 'hidden' }
          }
          className="scrollheaderWrap"
        >
          <div className="scrollhederLeft">
            <span className="scrollhamburgerIcon" />
            <span className="scrolllistCategory">카테고리</span>
          </div>
          <ul className="scrollheaderCenter">
            <li className="scrollheaderCenterBox">
              <Link className="scrollLinkToMenu" to="/menu">
                신상품
              </Link>
            </li>
            <li className="scrollheaderCenterBox">
              <Link className="scrollLinkToMenu" to="/menu">
                베스트
              </Link>
            </li>
            <li className="scrollheaderCenterBox">
              <Link className="scrollLinkToMenu" to="/menu">
                알뜰쇼핑
              </Link>
            </li>
            <li className="scrollheaderCenterBox">
              <Link className="scrollLinkToMenu" to="/menu">
                특가/혜택
              </Link>
            </li>
          </ul>
          <div className="scrollSearchBox">
            <input
              className="scrollSearchBar"
              placeholder="검색어를 입력해주세요"
            />
            <button className="scrollMagnifier" />
          </div>
          <div className="scrollIconBox">
            <button
              className="iconLocation"
              onClick={() => alert('준비중입니다.')}
            />
            <button
              className="iconHeart"
              onClick={() => alert('준비중입니다.')}
            />
            <button className="iconCart" onClick={goToBasket} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
