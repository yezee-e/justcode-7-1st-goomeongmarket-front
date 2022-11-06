import React, { useEffect, useState } from 'react';
import './Nav.scss';
function Nav({ setSearch }) {
  return (
    <nav className="navMain">
      <div className="navBody">
        <div className="naviHead">
          <a className="signUp" href="https://www.naver.com">
            회원가입
          </a>

          <div className="borderRight" />

          <a className="underLineNone" href="https://www.naver.com">
            로그인
          </a>

          <div className="borderRight" />
          <div className="dropDown">
            <a className="underLineNone" href="https://www.naver.com">
              고객센터 ▼
            </a>
          </div>
          <div className="serviceCenterBox">
            <span>공지사항</span>
            <br />
            <span>자주하는 질문</span>
            <br />
            <span>1:1 문의</span>
            <br />
            <span>대량주문 문의</span>
          </div>
        </div>

        <div className="navSection">
          <div className="navSectionLeft">
            <img alt="컬리" src="./img/GMMK.jpg" />
            <button className="NavKurlyMarkerBtn marginLeft20">GM마켓</button>
            <div className="borderRightSection" />
            <button className="NavKurlyBeautyBtn marginLeft20">뷰티GM</button>
            <button className="redNWord">N</button>
          </div>
          <form className="navSectionCenter">
            <input
              type="text"
              className="navSearch"
              placeholder="검색어를 입력해주세요"
              onChange={e => setSearch(e.target.value)}
            />

            <button className="SearchBarMagnifier" />
          </form>
          <div className="navSectionLeft">
            <img className="iconControl " alt="위치" src="./img/location.png" />
            <img className="iconControl " alt="하트" src="./img/love.png" />
            <img
              className="iconControl "
              alt="장바구니"
              src="./img/purchase.png"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
