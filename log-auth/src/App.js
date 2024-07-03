import React, { useState } from 'react';
import SignIn from './Components/SignIn';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';



const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignIn addUser={addUser} />} />
        <Route path="/login" element={<LogIn users={users} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </Router>
  );
};

export default App;


