import React, { useEffect, useRef, useState } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ addUser }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phoneno: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneCheck = /^[0-9]{10}$/;

    if (!emailCheck.test(form.email)) {
      newErrors.email = 'Please enter a valid email .';
    }
    if (form.password.length < 8) {
      newErrors.password = 'Password should be 8digits.';
    }
    if (!phoneCheck.test(form.phoneno)) {
      newErrors.phoneno = 'Please enter 10digits phone number.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate()) {
      addUser(form);
      navigate('/login');
    }
  };

  const userRef = useRef(null);

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  return (
    <div className='sup-body'>
      <h1 className='sign-heading'>Sign Up Here!</h1>
      <form onSubmit={submitHandler} className='signup-form'>
        <div className='form-collection'>
          <input
            type='text' name='username' value={form.username} placeholder='Username'   ref={userRef} onChange={handleChange}/>
          <input type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} />
          <p >{errors.email}</p>
          <input type='text' name='phoneno' value={form.phoneno} placeholder='Phone Number' onChange={handleChange}/>
           <p >{errors.phoneno}</p>
          <input type='password' name='password' value={form.password} placeholder='Password' onChange={handleChange} />
           <p >{errors.password}</p>
          <br />
          <button type='submit' className='submit-button'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
