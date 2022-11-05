import React from 'react';

import './Login.scss';

function Login() {
  return (
    <div className="login-whole">
      <div className="login-title">
        <h1>로그인</h1>
      </div>
      <div className="login-input-column">
        <input
          className="id-input"
          type={'text'}
          placeholder="아이디를 입력해주세요"
        ></input>
        <input type={'password'} placeholder="비밀번호를 입력해주세요"></input>
      </div>
      <div className="search-bar">
        <p>아이디 찾기</p>
        <p>|</p>
        <p>비밀번호 찾기</p>
      </div>
      <div className="button-column">
        <button className="login-button">로그인</button>
        <button className="sign-up-button">회원가입</button>
      </div>
    </div>
  );
}

export default Login;
