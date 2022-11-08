import { React, useState, useEffect } from 'react';
import './Signup.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

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

const PWD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

function Signup() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setVaildPassword] = useState(false);
  const [samePwd, setSamePwd] = useState('');
  const [validSamePwd, setValidSamePwd] = useState(false);

  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [validPhoneNumber, setValidPhoneNumber] = useState(false);

  // console.log(validSamePwd);

  const [checkList, setCheckList] = useState([]);
  const [active, setActive] = useState('button');
  const navigate = useNavigate();

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);
  useEffect(() => {
    setVaildPassword(PWD_REGEX.test(password));
    setValidSamePwd(password === samePwd);
  }, [password, samePwd]);
  // useEffect(() => {
  //   setValidPhoneNumber(PHONE_REGEX.test(phoneNumber));
  // }, [phoneNumber]);
  // console.log(email);
  const checkAll = e => {
    // if (checkList.length === 7) {
    //   setActive('button');
    // } else {
    //   setActive('activate');
    // }
    e.target.checked
      ? setCheckList([
          'must1',
          'must2',
          'must3',
          'select1',
          'select2',
          'select3',
          'select4',
        ])
      : setCheckList([]);
  };
  const handleCheck = e => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter(el => el !== e.target.name));
  };
  useEffect(() => {
    if (
      checkList.includes('must1') &&
      checkList.includes('must2') &&
      checkList.includes('must3')
    ) {
      setActive('active');
    } else {
      setActive('button');
    }
  }, [checkList]);

  const handleNext = e => {
    e.preventDefault();
    if (active === 'active') {
      navigate('/signup-check');
    }
  };
  return (
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
                정확한 이메일 형식으로 입력해주세요.
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
              className={password && !validPassword ? 'cond_msg' : 'offscreen'}
            >
              비밀번호는 문자,숫자,특수기호를 포함하며 8자 이상으로 설정.
            </p>
            <p
              id="uidnote-pw"
              className={password && validPassword ? 'true-msg' : 'offscreen'}
            >
              보안에 좋은 형식입니다.
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
              placeholder="비밀번호를 한번 더 입력해주세요 "
              onChange={e => setSamePwd(e.target.value)}
            />
            <p
              id="smaePwdNote"
              className={samePwd && !validSamePwd ? 'cond_msg' : 'offscreen'}
            >
              비밀번호가 일치하지 않습니다.
            </p>
            <p
              id="smaePwdNote"
              className={samePwd && validSamePwd ? 'true-msg' : 'offscreen'}
            >
              비밀번호가 일치합니다.
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
              onKeyPress={event => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              // onChange={e => {
              //   setPhoneNumber(e.target.value);
              // }}
              // onInput={e => {
              //   phoneNumber && !validPhoneNumber
              //     ? e.preventDefault()
              //     : e.preventDefault();
              // }}
              maxLength={11}
              className="real-input"
              type="text"
              placeholder="숫자만 입력해주세요 "
            />
          </div>
          {/* 주소 */}
          <div className="input-container">
            <div className="input-name-container address-name">
              <label className="form-label">
                주소<span className="must-input">*</span>
              </label>
            </div>

            <button className="real-input address-button">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-glass" />
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
                <input
                  className="gender-input"
                  type="radio"
                  name="gender"
                  value={1}
                />
                <label className="gender-check-name">남자</label>
              </div>
              <div className="gender-input-personal-container women-check">
                <input
                  className="gender-input "
                  type="radio"
                  name="gender"
                  value={2}
                />
                <label className="gender-check-name">여자</label>
              </div>
              <div className="gender-input-personal-container select-nothing">
                <input
                  className="gender-input"
                  type="radio"
                  name="gender"
                  value={3}
                />
                <label className="gender-check-name">성별 애매</label>
              </div>
            </div>
            <div className="empty-box"> </div>
          </div>
          {/* 생일 */}
          <div className="input-container birth-margin">
            <div className="input-name-container">
              <label className="form-label">
                생년월일<span className="must-input">*</span>
              </label>
            </div>
            <div className="real-input birth-input-column">
              <input
                type="text"
                className="birth-input"
                placeholder="YYYY"
                maxLength={4}
                onKeyPress={e => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <span>/</span>
              <input
                type="text"
                className="birth-input"
                placeholder="MM"
                maxLength={2}
                onKeyPress={e => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <span>/</span>
              <input
                type="text"
                className="birth-input"
                placeholder="DD"
                maxLength={2}
                onKeyPress={e => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
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
                <input
                  type="checkbox"
                  id="check"
                  name="all"
                  checked={checkList.length === 7 ? true : false}
                  onChange={checkAll}
                />
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
                <input
                  onChange={handleCheck}
                  type="checkbox"
                  id="check"
                  name="must1"
                  checked={checkList.includes('must1') ? true : false}
                />
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
                <input
                  onChange={handleCheck}
                  type="checkbox"
                  id="check"
                  name="must2"
                  checked={checkList.includes('must2') ? true : false}
                />
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
                <input
                  onChange={handleCheck}
                  type="checkbox"
                  id="check"
                  name="select1"
                  checked={checkList.includes('select1') ? true : false}
                ></input>

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
                <input
                  type="checkbox"
                  id="check"
                  name="select2"
                  onChange={handleCheck}
                  checked={checkList.includes('select2') ? true : false}
                />
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
                  <input
                    type="checkbox"
                    id="check"
                    name="select3"
                    onChange={handleCheck}
                    checked={checkList.includes('select3') ? true : false}
                  />
                  <label
                    className="check-content-else"
                    id="check"
                    htmlFor="check"
                    name="select3"
                  >
                    SNS
                  </label>
                </div>

                <div className="choose-one">
                  <input
                    onChange={handleCheck}
                    name="select4"
                    type="checkbox"
                    id="check"
                    checked={checkList.includes('select4') ? true : false}
                  />
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
                동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내
              </span>
            </div>
          </div>
          <div className="input-container gap2">
            <div className="agree-column">
              <div className="agree-column-without gap3">
                <input
                  onChange={handleCheck}
                  type="checkbox"
                  id="check"
                  name="must3"
                  checked={checkList.includes('must3') ? true : false}
                />
                <label
                  className="check-content-else"
                  id="check"
                  htmlFor="check"
                >
                  본인은 만 14세 이상입니다.<span>(필수)</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* 가입하기 버튼 */}
        <div className="signup-button-div">
          <button onClick={handleNext}>가입하기</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
