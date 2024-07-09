import React, { useState, useEffect } from 'react';
import SignIn from './Components/SignIn';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Datefilter from './Filter/Datefilter';
import NewSignUp from './UpdateDetails/NewSignUp';
import UpdateProfile from './UpdateDetails/UpdateProfile';
import DisplayProp from './Filter/DiaplayProp';
import Favorite from './Filter/Favorite';
import ContactOwner from './ContactOwner';
import ListView from './Filter/ListView';

const App = () => {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

const [details,setDetails] =useState(null);

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [cardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const handleAddFav = (e, item) => {
    e.stopPropagation();
    if (favorites.some(fav => fav.price === item.price)) {
      setFavorites(favorites.filter(fav => fav.price !== item.price));
      alert("Removed from favorites");
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const handleContactOwner = (e,item) => {
    e.stopPropagation();
    setCardOpen(true);
   setDetails(item);
   console.log(item);
   
  };


  const closeCard = () => {
    setCardOpen(false);
  };
  
 
  const currentUser = users.length > 0 ? users[0] : { username: '', email: '', phoneno: '' };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignIn addUser={addUser} />} />
          <Route path="/login" element={<LogIn users={users} />} />
          <Route path="/home" element={<Home />} />
          <Route path='/Filter' element={<Datefilter favorite={favorites} handleAddFav={handleAddFav} handleContactOwner={handleContactOwner} />} />
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="fav" element={<Favorite favorites={favorites} handleAddFav={handleAddFav} handleContactOwner={handleContactOwner} />} />
          <Route path="/:id" element={<DisplayProp />} />
          <Route path="/list" element={<ListView />} />
          
        </Routes>
      </Router>
      {cardOpen && <ContactOwner user={currentUser} cardOpen={cardOpen} closeCard={closeCard} details={details }/>}
    </>
  );
};

export default App;



