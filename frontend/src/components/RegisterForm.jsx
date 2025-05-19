// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import './Form.css';

export default function RegisterForm({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <div className="form-container">
      <h2>회원가입</h2>
      <input
        type="text"
        placeholder="닉네임"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="email"
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>가입하기</button>
      <p onClick={onSwitch}>이미 계정이 있으신가요? 로그인</p>
    </div>
  );
}
