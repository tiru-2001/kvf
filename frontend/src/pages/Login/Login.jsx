import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import configuredUrl from '../../utilities/request';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await configuredUrl.post('/user/login', {
        email,
        password,
      });
      if (data.success) {
        localStorage.setItem('token', data.token);
        if (data.userExist.role == 'admin') {
          navigate('/admin-dashboard');
        } else if (data.userExist.role == 'reviewer') {
          navigate('/reviewer-dashboard');
        } else {
          navigate('/user-dashboard');
        }
        setEmail('');
        setPassword('');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container">
      <h2>Login</h2>
      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-field">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />
      </div>
      <button>Sign In</button>

      <div className="forgot-password">
        <p onClick={() => navigate('/forgot-password')}>Forgot Password?</p>
      </div>

      <div className="register-link">
        <p onClick={() => navigate('/register')}>New User? Register</p>
      </div>
    </form>
  );
};

export default Login;
