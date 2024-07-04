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
    const { name, value } = e.target;
    if (name === 'password') {
      setForm({ ...form, [name]: value.replace(/\s/g, '') });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneCheck = /^[0-9]{10}$/;

    if (!emailCheck.test(form.email)) {
      newErrors.email = 'Please enter a valid email.';
    }
    if (form.password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters.';
    }
    if (!phoneCheck.test(form.phoneno)) {
      newErrors.phoneno = 'Please enter a 10-digit phone number.';
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
      alert("Sign Up successfully");
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
          <input className='in-put'
            type='text' name='username' value={form.username} placeholder='Username' ref={userRef} onChange={handleChange} />
          <input className='input-email' type='email' name='email' placeholder='Email' value={form.email} onChange={handleChange} />
          <p>{errors.email}</p>
          <input className='input-ph' type='text' name='phoneno' value={form.phoneno} pattern="[0-9]*" placeholder='Phone Number' onChange={handleChange} />
          <p>{errors.phoneno}</p>
          <input className='input-pas' type='password' name='password' value={form.password} placeholder='Password' onChange={handleChange} />
          <p>{errors.password}</p>
          <br />
          <button type='submit' className='submit-button'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
