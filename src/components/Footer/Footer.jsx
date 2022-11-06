import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="fontAdd">
      <div className="footerWrap">
        <div className="footerBox">
          <div className="footerLeft">
            <h3 className="clientHappyCenter">고객행복센터</h3>
            <strong className="callNumber">1004-1009</strong>
            <span>월~토요일 오전 7시 - 오후 6시</span>

            <div className="boxContentFlex">
              <button className="footerLeftBtnBox">카카오톡 문의</button>
              <div className="footerLeftBtnInContent">
                월~토요일 오전7시 - 오후 6시
                <br />
                일/공휴일 오전7시 -오후 1시
              </div>
            </div>

            <div className="boxContentFlex">
              <button className="footerLeftBtnBox">1:1 문의</button>
              <div className="footerLeftBtnInContent">
                365일
                <br />
                고객센터 운영시간에 순차적으로 답변드리겠습니다
              </div>
            </div>

            <div className="boxContentFlex">
              <button className="footerLeftBtnBox">대량주문 문의</button>
              <div className="footerLeftBtnInContent">
                월~금요일 오전9시 - 오후 6시
                <br />
                점심시간 낮12시 -오후 1시
              </div>
            </div>
            <div className="noneUserInquiry">
              비회원 문의:help@nevercant.com
              <br />
              비회원 대량주문 문의:gmmk@nevercant.com
            </div>
          </div>

          <div className="footerRight">
            <ul className="footerRightHead">
              <li>
                <span className="footerRightContent">마켓소개</span>
              </li>
              <li>
                <span className="footerRightContent">마켓소개영상</span>
              </li>
              <li>
                <span className="footerRightContent">인재채용</span>
              </li>
              <li>
                <span className="footerRightContent">이용약관</span>
              </li>
              <li>
                <span className="footerRightContent">개인정보처리방침</span>
              </li>
              <li>
                <span className="footerRightContent">이용안내</span>
              </li>
            </ul>
            <div className="footerCompanyInformation">
              법인명(상호):구멍가게 <span className="borderRight">ㅣ</span>
              사업자등록번호 : 123-45-67890
              <a
                className="textDecorationNone marginLeft5"
                href="http://www.just-code.co.kr"
              >
                사업자정보 확인
              </a>
              <br />
              통신판매업:제2000-서울강남-01234호{' '}
              <span className="borderRight">ㅣ</span>
              개인정보보호책임자:000
              <br />
              주소 : 서울특별시 00구 000로 123, 55층(역삼동){' '}
              <span className="borderRight">ㅣ</span> 대표이사 : 000
              <br />
              입점문의 :{' '}
              <a
                className="textDecorationNone"
                href="http://www.just-code.co.kr"
              >
                입점문의하기
              </a>{' '}
              <span className="borderRight">ㅣ</span> 제휴문의 :
              <a
                className="textDecorationNone"
                href="http://www.just-code.co.kr"
              >
                wpgbansdml@nevercant.com
              </a>
              <br />
              채용문의 :{' '}
              <a
                className="textDecorationNone"
                href="http://www.just-code.co.kr"
              >
                codydansdml@nevercant.com
              </a>
              <br />
              팩스 : 070-0000-0000
            </div>
            <div>
              <img
                className="imgSizeControl"
                alt=""
                src="./img/instagram.png"
              />
              <img className="imgSizeControl" alt="" src="./img/facebook.png" />
              <img className="imgSizeControl" alt="" src="./img/blogger.png" />
              <img className="imgSizeControl" alt="" src="./img/mail.png" />
              <img className="imgSizeControl" alt="" src="./img/youtube.png" />
            </div>
          </div>
        </div>

        <div className="footerCertificationBox">
          <div className="footerFlag">
            <img className="flagSizeContol" alt="한국" src="./img/korea.png" />
            <span className="lineHeight30">Korea</span>
          </div>
          <div className="footerFlag">
            <img
              className="flagSizeContol"
              alt="미국"
              src="./img/america.png"
            />
            <span className="lineHeight30">America</span>
          </div>
          <div className="footerFlag">
            <img
              className="flagSizeContol"
              alt="영국"
              src="./img/england.png"
            />
            <span className="lineHeight30">England</span>
          </div>
          <div className="footerFlag">
            <img
              className="flagSizeContol"
              alt="독일"
              src="./img/germany.png"
            />
            <span className="lineHeight30">Germany</span>
          </div>
        </div>

        <div className="footerEndBox">
          구멍마켓에서 판매되는 상품 중에는 구멍마켓에 입점한 개별 판매자가
          판매하는 마켓플레이스(오픈마켓) 상품이 포함되어있습니다.
          <br />
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
          <br />© GMMK CORP. ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
}

export default Footer;
