import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LogIn = ({ users }) => {
  const [login, setLogin] = useState({ identifier: '', password: '' });
   const [loginType, setLoginType] = useState('email'); 
  const [errors, setErrors] = useState({});
   const navigate = useNavigate();

  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const phoneCheck = /^[0-9]{10}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
  
  const handleLoginTypeChange = (e) => {
    setLoginType(e.target.value);
    setLogin({ identifier: '', password: '' });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (loginType === 'email') {
      if (!emailCheck.test(login.identifier)) {
        newErrors.identifier = 'Please enter a valid email address.';
      }
    } else if (loginType === 'phone') {
 if (!phoneCheck.test(login.identifier)) {
        newErrors.identifier = 'Please enter a valid phone number (10 digits).';
      }
    }

if (login.password.length < 8) {
      newErrors.password = 'Password must be  8 digits.';
    }

    setErrors(newErrors);
return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const user = users.find((user) =>
        (loginType === 'email' ? user.email : user.phoneno) === login.identifier &&
        user.password === login.password
      );

      if (user) {
        navigate('/home');
        
      } else {
         setErrors({ identifier: 'You enterer Invalid details' });
      }
    }
  };
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.focus();
    }
  }, []);

  return (
    <div className='login-body'>
      <h2 className='login-heading'>Login Here 👇</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <div>
          
          <select value={loginType} onChange={handleLoginTypeChange}>
            <option value="email" className='email-dd'>Email</option>
            <option value="phone">Phone Number</option>
          </select>
        </div>
        <div>
          
          <input className='input-email'
            type={loginType === 'email' ? 'text' : 'tel'}
            name="identifier"  value={login.identifier} onChange={handleChange} placeholder={`Enter ${loginType === 'email' ? 'email' : 'phone number'}`}
            required ref={logRef}
          />
          <p >{errors.identifier}</p>
        </div>
        <div>
          
          <input className='input-pas'
            type="password" name="password" value={login.password} onChange={handleChange}  placeholder="Enter password" required
          />
        <p>{errors.password}</p>
        </div>
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
  );
};

export default LogIn;


