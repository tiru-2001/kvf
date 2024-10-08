import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleGetEmail = () => {
    if (email) {
      console.log('Reset link sent to:', email);
      alert(`Password reset link sent to ${email}`);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Reset Password</h2>
      <div className="form-field">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button onClick={handleGetEmail}>Get Email</button>
      
      <div className="login-link">
        <p onClick={() => navigate('/login-user')}>Go to Login</p>
      </div>
    </div>
  );
};

export default ForgotPassword;
