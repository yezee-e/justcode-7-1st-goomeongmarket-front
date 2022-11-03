import React from 'react';

import './Header.scss';

function Header() {
  return (
    <>
      <div className="headerWrap">
        <div className="hederLeft">
          <span className="hamburgerIcon" />
          <span className="listCategory">카테고리</span>
        </div>
        <ul className="headerCenter">
          <li className="headerCenterBox">
            <span>신상품</span>
          </li>
          <li className="headerCenterBox">
            <span>베스트</span>
          </li>
          <li className="headerCenterBox">
            <span>알뜰쇼핑</span>
          </li>
          <li className="headerCenterBox">
            <span>특가/혜택</span>
          </li>
        </ul>
        <a href="www.naver.com" className="headerRight">
          <span className="colorChagne">샛별 · 낮</span>
          배송안내
        </a>
      </div>

      <div className="scrollheaderWrap">
        <div className="scrollhederLeft">
          <span className="scrollhamburgerIcon" />
          <span className="scrolllistCategory">카테고리</span>
        </div>
        <ul className="scrollheaderCenter">
          <li className="scrollheaderCenterBox">
            <span>신상품</span>
          </li>
          <li className="scrollheaderCenterBox">
            <span>베스트</span>
          </li>
          <li className="scrollheaderCenterBox">
            <span>알뜰쇼핑</span>
          </li>
          <li className="scrollheaderCenterBox">
            <span>특가/혜택</span>
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
          <button className="iconLocation" />
          <button className="iconHeart" />
          <button className="iconCart" />
        </div>
      </div>
    </>
  );
}

export default Header;
