import React from 'react';
import './ContactOwner.css';
import img from './sai.jpg'

const ContactOwner = ({ user, cardOpen, closeCard,details}) => {
  if (!cardOpen) return null;
  

  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={closeCard}>X</button>
        <h2>Contact Seller</h2>
        <div className="agent-info">
          <div className="agent-image"> 
           <img  className="agent-image"src={img} alt='sai'/>
          </div>
          <div>
            <h6 className='owner-info'>Mokile Sai</h6>
            <h6 className='owner-info'>Agent</h6>
          </div>
        </div>
        <p className='share-contact'>Please Share your Contact</p>
        <h4 className='proj-title'> ProjectName : {details.projectname.toUpperCase()}</h4>
        <form>
          <input
            type="text"
            placeholder="Name"
            defaultValue={user.username}
          />
          <input
            type="text"
            placeholder="Phone Number"
            defaultValue={user.phoneno}
          />
          <input
            type="email"
            placeholder="Email"
            defaultValue={user.email}
          />
          <textarea placeholder="Description">
            I am interested in the property listed on the Openplot website.
          </textarea>
          <button className='form-button'>Submit Details</button>
        </form>
      </div>
    </div>
  );
};

export default ContactOwner;
