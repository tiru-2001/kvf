import React from 'react';
import './LoginOption.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const LoginOption = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login-user');
  };

  return (
    <div className="login-option-page">
      <div className="login-option-page__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="login-option-page__options">
        <div className="login-option" onClick={handleLogin}>
          <span>User</span>
        </div>
        <div className="login-option" onClick={handleLogin}>
          <span>Reviewer</span>
        </div>
        <div className="login-option" onClick={handleLogin}>
          <span>Admin</span>
        </div>
      </div>
    </div>
  );
};

export default LoginOption;
