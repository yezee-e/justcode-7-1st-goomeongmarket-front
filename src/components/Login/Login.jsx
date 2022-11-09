import React, { useRef, useNavigate } from 'react';

import './Login.scss';

function Login() {
  // const navigate = useNavigate();
  // const goToMain = () => {
  //   navigate('/main');
  // };
  // const goToSiginup = () => {
  //   navigate('/signup');
  // };
  const id = useRef();
  const pw = useRef();
  const handleLogin = e => {
    e.preventDefault();

    fetch('http://localhost:8000/users/account1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: id.current.value,
        password: pw.current.value,
      }),
    })
      .then(res => res.json())
      .then(result => localStorage.setItem('token', result.token));
  };

  return (
    <div className="login-whole">
      <div className="login-title">
        <h1>로그인</h1>
      </div>
      <div className="login-input-column">
        <input
          className="id-input"
          type={'text'}
          ref={id}
          placeholder="아이디를 입력해주세요"
        ></input>
        <input
          type={'password'}
          ref={pw}
          placeholder="비밀번호를 입력해주세요"
        ></input>
      </div>
      <div className="search-bar">
        <p>아이디 찾기</p>
        <p>|</p>
        <p>비밀번호 찾기</p>
      </div>
      <div className="button-column">
        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>
        <button className="sign-up-button">회원가입</button>
      </div>
    </div>
  );
}

export default Login;
