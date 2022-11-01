import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="headerWrap">
      <div className="hederLeft">
        <span className="listIcon" />
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
  );
}

export default Header;
