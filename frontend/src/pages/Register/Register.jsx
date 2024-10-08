import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';
import configuredUrl from '../../utilities/request';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    alert('Registration successful!');

    navigate('/login-user', { state: { email, password } });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await configuredUrl.post('user/register', {
        firstName,
        lastName,
        email,
        password,
        phone,
      });
      console.log(data);
      if (data.success) {
        navigate('/login-user');
        setEmail('');
        setFirstName('');
        setPhone('');
        setLastName('');
        setPassword('');
        setConfirmPassword('');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form-container">
      <h2>Register</h2>
      <div className="form-field">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          required
        />
      </div>
      <div className="form-field">
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          required
        />
      </div>
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
        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
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
      <div className="form-field">
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm your password"
          required
        />
      </div>
      <button>Sign Up</button>
      <div className="login-link">
        <p>
          Having an account?{' '}
          <span onClick={() => navigate('/login-user')}>Login</span>
        </p>
      </div>
    </form>
  );
};

export default Register;
