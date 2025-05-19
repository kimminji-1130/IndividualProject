// src/components/LoginForm.jsx
import React, { useState } from 'react';
import './Form.css';

export default function LoginForm({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form-container">
      <h2>로그인</h2>
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
      <button>로그인</button>
      <p onClick={onSwitch}>계정이 없으신가요? 회원가입</p>
    </div>
  );
}
