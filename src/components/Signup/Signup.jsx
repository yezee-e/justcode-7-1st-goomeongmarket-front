import { React, useState, useEffect } from 'react';
import './Signup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
//구현 해야할 것
//1.아이디 정규표현식 사용
//2. 비밀번호 10자 이상 , 2개이상 조합 (공백제외)
//3.비밀번호 확인하기 (같은지)
// 아이디 중복확인
//4. 휴대폰 숫자만 입력하기
//5.생년월일 4글자 2글자 2글자
//6. 전체동의 누르면 다 체크
//7.필수만 누르면 제출되고 아니면 필수체크해달라고 alert 띄우기

const EMAIL_REGEX = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const NAME_REGEX = /^[a-zA-Z\s]{3,30}$/;
const PHONE_REGEX = /^[0-9]{10,30}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,24}$/;

function Signup() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setVaildPassword] = useState(false);
  const [checkPw, setValidCheckPw] = useState('');
  const [checkSame, setCheckSame] = useState(false);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setVaildPassword(PWD_REGEX.test(password));
    setCheckSame(password === checkPw);
  }, [password, checkSame]);

  console.log(checkPw);
  console.log(password);
  return (
    <div className="boxSizingInitial">
      <div className="sign-up">
        {/*회원가입 타이틀 */}
        <div className="title">
          <h1>회원가입 </h1>
          <p>필수입력사항</p>
        </div>
        <form className="form-whole">
          <div className="form-input">
            {/* 아이디 */}
            <div className="input-container">
              <div className="input-name-container">
                <label className="form-label">
                  이메일<span className="must-input">*</span>
                </label>
              </div>
              <div className="email-input-button-column">
                <input
                  className="real-input"
                  type="text"
                  onChange={e => setEmail(e.target.value)}
                />
                <button className="check-email">중복확인 </button>
                <p
                  id="uidnote"
                  className={email && !validEmail ? 'cond_msg' : 'offscreen'}
                >
                  Name length should be 3 to 30 characters.
                </p>
              </div>
            </div>

            {/* 비밀번호 */}
            <div className="input-container">
              <div className="input-name-container">
                <label className="form-label">
                  비밀번호<span className="must-input">*</span>
                </label>
              </div>
              <input
                className="real-input"
                placeholder="비밀번호를 입력해 주세요 "
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              <p
                id="uidnote-pw"
                className={
                  password && !validPassword ? 'cond_msg' : 'offscreen'
                }
              >
                비밀번호 제대로 치세요
              </p>
            </div>
            {/* 비밀번호 확인 */}
            <div className="input-container">
              <div className="input-name-container">
                <label className="form-label">
                  비밀번호 확인<span className="must-input">*</span>
                </label>
              </div>
              <input
                className="real-input"
                type="password"
                placeholder="비밀번호를 한번 더  입력해주세요 "
                onChange={e => setValidCheckPw(e.target.value)}
              />
              <p
                id="uidnote"
                className={checkPw && setCheckSame ? 'cond_msg' : 'offscreen'}
              >
                비밀번호가 같습니다
              </p>
            </div>
            {/* 이름 */}
            <div className="input-container">
              <div className="input-name-container">
                <label className="form-label">
                  이름<span className="must-input">*</span>
                </label>
              </div>
              <input
                className="real-input"
                type="text"
                placeholder="이름을 입력해주세요 "
                //onChange={handleInput}
              />
              <div className="empty-box"> </div>
            </div>
            {/* 휴대폰 */}
            <div className="input-container">
              <div className="input-name-container">
                <label className="form-label">
                  휴대폰<span className="must-input">*</span>
                </label>
              </div>
              <input
                //onChange={handleInput}
                className="real-input"
                type="text"
                placeholder="숫자만 입력해주세요 "
              />
              <div className="empty-box"> </div>
            </div>
            {/* 주소 */}
            <div className="input-container">
              <div className="input-name-container address-name">
                <label className="form-label">
                  주소<span className="must-input">*</span>
                </label>
              </div>

              <button className="real-input address-button">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="fa-glass"
                />
                주소 검색
              </button>
              <div className="empty-box"> </div>
              <p className="adress-alert-message">
                배송지에 따라 상품 정보가 달라질 수 있습니다.
              </p>
            </div>
            {/* 성별 */}
            <div className="input-container">
              <div className="input-name-container gender-name">
                <label className="form-label">성별</label>
              </div>
              <div className="gender-input-container">
                <div className="gender-input-personal-container">
                  <input className="gender-input" type="radio" name="gender" />
                  <label className="gender-check-name">남자</label>
                </div>
                <div className="gender-input-personal-container women-check">
                  <input className="gender-input " type="radio" name="gender" />
                  <label className="gender-check-name">여자</label>
                </div>
                <div className="gender-input-personal-container select-nothing">
                  <input className="gender-input" type="radio" name="gender" />
                  <label className="gender-check-name">성별 애매</label>
                </div>
              </div>
              <div className="empty-box"> </div>
            </div>
            {/* 생일 */}
            <div className="input-container birth-margin">
              <div className="input-name-container">
                <label className="form-label"> 생년월일</label>
              </div>
              <div className="real-input birth-input-column">
                <input type="text" className="birth-input" placeholder="YYYY" />
                <span>/</span>
                <input type="text" className="birth-input" placeholder="MM" />
                <span>/</span>
                <input type="text" className="birth-input" placeholder="DD" />
              </div>
            </div>
            <div className="margin-box"> </div>
            {/* 이용약관동의 */}
            <div className="input-container">
              <div className="input-name-container">
                <label className="form-label">
                  이용약관동의<span className="must-input">*</span>
                </label>
              </div>
              <div className="agree-column">
                <div className="agree-column-without">
                  <input type="checkbox" id="check" />
                  <label className="check-content" id="check" htmlFor="check">
                    전체 동의합니다.
                  </label>
                </div>
                <p className="check-alert-message">
                  선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를
                  이용할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="input-container">
              <div className="agree-column">
                <div className="agree-column-without">
                  <input type="checkbox" id="check" />
                  <label
                    className="check-content-else"
                    id="check"
                    htmlFor="check"
                  >
                    이용약관 동의<span>(필수)</span>
                  </label>
                  <span className="look-description">약관보기 {' >'}</span>
                </div>
              </div>
            </div>
            <div className="input-container gap">
              <div className="agree-column">
                <div className="agree-column-without">
                  <input type="checkbox" id="check" />
                  <label
                    className="check-content-else"
                    id="check"
                    htmlFor="check"
                  >
                    개인정보 수집 및 이용 동의<span>(필수)</span>
                  </label>
                  <span className="look-description  not-first">
                    약관보기 {' >'}{' '}
                  </span>
                </div>
              </div>
            </div>
            <div className="input-container gap">
              <div className="agree-column">
                <div className="agree-column-without">
                  <input type="checkbox" id="check" />
                  <label
                    className="check-content-else"
                    id="check"
                    htmlFor="check"
                  >
                    개인정보 수집 및 이용 동의<span>(선택)</span>
                  </label>
                  <span className="look-description  not-first">
                    약관보기 {' >'}
                  </span>
                </div>
              </div>
            </div>
            <div className="input-container gap">
              <div className="agree-column">
                <div className="agree-column-without">
                  <input type="checkbox" id="check" />
                  <label
                    className="check-content-else"
                    id="check"
                    htmlFor="check"
                  >
                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의<span>(선택)</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="input-container gap">
              <div className="agree-column">
                <div className="agree-column-without">
                  <div className="choose-one">
                    <input type="checkbox" id="check" />
                    <label
                      className="check-content-else"
                      id="check"
                      htmlFor="check"
                    >
                      SNS
                    </label>
                  </div>

                  <div className="choose-one">
                    <input type="checkbox" id="check" />
                    <label
                      className="check-content-else"
                      id="check"
                      htmlFor="check"
                    >
                      이메일
                    </label>
                  </div>
                </div>
                <span className="delivery-alert">
                  동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후
                  안내
                </span>
              </div>
            </div>
            <div className="input-container gap2">
              <div className="agree-column">
                <div className="agree-column-without">
                  <input type="checkbox" id="check" />
                  <label
                    className="check-content-else"
                    id="check"
                    htmlFor="check"
                  >
                    본인은 만 14세 이상입니다.
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* 가입하기 버튼 */}
          <div className="signup-button-div">
            <button>가입하기</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
