// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import './Form.css';

export default function RegisterForm({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ 백엔드로 POST 요청
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        nickname,
        password
      })
    })
      .then(res => res.text())
      .then(data => {
        console.log('응답:', data);
        alert('회원가입 완료!');
        onSwitch(); // 로그인 화면으로 전환
      })
      .catch(err => {
        console.error(err);
        alert('회원가입 실패');
      });
  };

  return (
    <div className="form-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">가입하기</button>
      </form>
      <p onClick={onSwitch}>이미 계정이 있으신가요? 로그인</p>
    </div>
  );
}
